import React, { useState } from 'react';

import { Grid, Paper, Container, Switch } from '@mui/material';

import Landing from './components/Landing.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

// import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Bio from './components/Bio';
import Documents from './components/Documents'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BrushIcon from '@mui/icons-material/Brush';
import Footer from './components/Footer';
import { amber, deepOrange, grey } from '@mui/material/colors';
const actions = [
  { icon: <AccountCircleIcon />, name: 'Biography', href: '#bio' },
  { icon: <BrushIcon />, name: 'Skills', href: '#skills' },
  { icon: <HistoryEduIcon />, name: 'Documents', href: '#documents' },
  { icon: <MenuBookIcon />, name: 'Portfolio', href: '#portfolio' },
];
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({

    palette: {

      mode: darkMode ? "dark" : "light",
      primary: {
        ...amber,
        ...(darkMode === false && {
          main: '#c1666b',
        }),
      },
      ...(darkMode === false && {
        background: {
          default: '#cba46a',
          paper: '#dcd0c0',
        },
      }),
      text: {
        ...(darkMode === false
          ? {
            primary: '#fff',
            secondary: grey[800],
          }
          : {
            primary: '#cba46a',
            secondary: grey[500],
          }),
      },

    }

  })

  return (

    <ThemeProvider

      theme={theme}

    >

      <Container component="main">


        <Grid

          direction="column"

          justify="center"

          container

        >
          <Grid

            style={{ textAlign: "center", marginBottom: "20px", height: '500px' }}

            item

            sm={12}>
            <Landing />
          </Grid>


          <Grid

            style={{ textAlign: "center", marginBottom: "20px" }}

            item

            sm={12}>
            <Box>

              <Paper id='bio' >

                <Bio

                  item={true}

                />

              </Paper>
            </Box>
          </Grid>

          <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >
            <Box>
              <Paper id='skills' >

                <Skills

                  item={true}

                />

              </Paper>
            </Box>
          </Grid>
          <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >
            <Box>
              <Paper id='documents' >

                <Documents

                  item={true}

                />

              </Paper>
            </Box>
          </Grid>
          {/* Keep For Later Use  */}
          {/* <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >
            <Box>
              <Paper id='portfolio' >

                <Portfolio

                  item={true}

                />

              </Paper>
            </Box>
          </Grid> */}

        </Grid>

      </Container>

      <Footer
        darkmode={darkMode}
        setdarkmode={setDarkMode}
        actions={actions}
        theme={theme}
      />


    </ThemeProvider>

  )
}

export default App;
