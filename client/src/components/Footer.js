import React from 'react';
import { Grid, Paper, Switch } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialAction from '@mui/material/SpeedDialAction';

import ExploreIcon from '@mui/icons-material/Explore';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Smartphone from '@mui/icons-material/Smartphone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BookIcon from '@mui/icons-material/Book';
const Footer = (props) => {
    const actions = props.actions
    const darkMode = props.darkmode
    const setDarkMode = props.setdarkmode

    return (
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

                    <WbSunnyIcon />

                    <Switch
                        id='nightmodeswitch'
                        item={true}

                        checked={darkMode}

                        onChange={() => setDarkMode(!darkMode)}

                        name="checkedA"

                    />

                    <DarkModeIcon />
                </Grid>
                <Grid style={{ textAlign: "center" }} container>
                    <Grid xs={2} item>
                        <IconButton>
                            <AlternateEmailIcon />
                        </IconButton>
                    </Grid>
                    <Grid xs={2} item>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                    <Grid xs={2} item>
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid xs={2} item>
                        <IconButton>
                            <Smartphone />
                        </IconButton>
                    </Grid>
                    <Grid xs={2} item>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                    </Grid>
                    <Grid xs={2} item>
                        <IconButton>
                            <BookIcon />
                        </IconButton>
                    </Grid>
            
                </Grid>
              

            </Paper>
        </Box>
    )
}
export default Footer;