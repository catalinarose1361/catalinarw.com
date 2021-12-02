import React, { useState } from 'react';

import { Grid, Paper, Container, Switch } from '@mui/material';


import ModeNightIcon from '@mui/icons-material/ModeNight';

import Landing from './components/Landing.js';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';




function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({

    palette: {

      mode: darkMode ? "dark" : "light",

    }

  })

  return (

    <ThemeProvider

      theme={theme}

    >

      <Container>

        <Grid

          direction="column"

          justify="center"

          container

        >

          <Grid

            style={{ textAlign: "center" }}

            item

            sm={12}

          >

            <ModeNightIcon />

            <Switch

              item={true}

              checked={darkMode}

              onChange={() => setDarkMode(!darkMode)}

              name="checkedA"

            />

            <Brightness4Icon />

          </Grid>

          <Grid

            style={{ textAlign: "center", marginBottom: "20px" }}

            item

            sm={12}>

            <Paper>

              <Landing

                item={true}

              />

            </Paper>

          </Grid>

          <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >

            <Paper>

              <Landing

                item={true}

              />

            </Paper>

          </Grid>

        </Grid>

      </Container>

    </ThemeProvider>

  )
}

export default App;
