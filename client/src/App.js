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
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Bio from './components/Bio';
import Documents from './components/Documents'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ExploreIcon from '@mui/icons-material/Explore';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BrushIcon from '@mui/icons-material/Brush';
const actions = [
  { icon: <AccountCircleIcon />, name: 'Biography', href: '#bio' },
  { icon: <BrushIcon />, name: 'Skills',  href: '#skills' },
  { icon: <HistoryEduIcon />, name: 'Documents', href: '#documents'},
  { icon: <MenuBookIcon />, name: 'Portfolio', href: '#portfolio'},
];
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

            style={{ textAlign: "center", marginBottom: "20px", height: '500px' }}

            item

            sm={12}>
          <Landing />
          </Grid>
         

          <Grid

            style={{ textAlign: "center", marginBottom: "20px" }}

            item

            sm={12}>

            <Paper id='bio' style={{ height: '500px'}}>

              <Bio

                item={true}

              />

            </Paper>

          </Grid>

          <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >

            <Paper id='skills' style={{ height: '500px' }}>

              <Skills

                item={true}

              />

            </Paper>
           
          </Grid>
          <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >

            <Paper id='documents' style={{ height: '500px' }}>

              <Documents

                item={true}

              />

            </Paper>
           
          </Grid>
          <Grid

            style={{ textAlign: "center" }}

            item sm={12}

          >

            <Paper id='portfolio' style={{ height: '500px' }}>

              <Portfolio

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
     
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 65, right: 995 }}
              icon={<ExploreIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  href={action.href}
                />
              ))}
            </SpeedDial>
       
          <Grid

            style={{ textAlign: "center" }}

            item

            sm={12}

          >
          
            <WbSunnyIcon  />

            <Switch
              id='nightmodeswitch'
              item={true}

              checked={darkMode}

              onChange={() => setDarkMode(!darkMode)}

              name="checkedA"

            />

            <DarkModeIcon />
            </Grid>
       
          </Paper>
        </Box>
     

    </ThemeProvider>

  )
}

export default App;
