import React, { useState } from 'react';

import { Grid, Paper, Container, Switch } from '@mui/material';


import ModeNightIcon from '@mui/icons-material/ModeNight';

import Landing from './components/Landing.js';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [value, setValue] = React.useState(0);
  const theme = createTheme({

    palette: {

      mode: darkMode ? "dark" : "light",

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

            <Paper style={{ height: '500px'}}>

              <Landing

                item={true}

              />

            </Paper>

          </Grid>

          <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >

            <Paper style={{ height: '500px' }}>

              <Landing

                item={true}

              />

            </Paper>

          </Grid>

        </Grid>
      </Container>
        <Box 
        component="footer"
        sx={{
          position: 'fixed',
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        
        >
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
          </Paper>
        </Box>
     

    </ThemeProvider>

  )
}

export default App;
