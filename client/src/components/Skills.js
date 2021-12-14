import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const data = [
    {
        name: "React.js",
        logo: "https://img.icons8.com/color/40/000000/react-native.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "Material Ui",
        logo: "https://img.icons8.com/color/40/000000/material-ui.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "JavaScript",
        logo: "https://img.icons8.com/color/40/000000/javascript--v1.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "Node.js",
        logo: "https://img.icons8.com/fluency/40/000000/node-js.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "HTML5",
        logo: "https://img.icons8.com/color/40/000000/html-5--v2.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "CSS3",
        logo: "https://img.icons8.com/color/40/000000/css3.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "Heroku",
        logo: "https://img.icons8.com/color/40/000000/heroku.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "Git",
        logo: "https://img.icons8.com/color/40/000000/git.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "MongoDB",
        logo: "https://img.icons8.com/color/40/000000/mongodb.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "GraphQL",
        logo: "https://img.icons8.com/color/40/000000/graphql.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "MySQL",
        logo: "https://img.icons8.com/color/40/000000/mysql-logo.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
    {
        name: "Apollo",
        logo: "https://img.icons8.com/color/40/000000/apollo.png",
        value: 5,
        years: 2,
        last: "December 2021"
    },
]

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const Skills = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
        <Card >
            <h1 >
                Skills
            </h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((index) => (

                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Grid>

                                <img alt={index.name} src={index.logo} />
                            </Grid>
                            <Grid>


                                <Button aria-describedby={id} variant="text" onClick={handleClick}>
                                    {index.name}
                                </Button>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>

                                            <Typography variant="h5" component="div">
                                                {index.years} Years of Experience
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                Last Used: {index.last}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} >
                                                Skill Level:
                                            </Typography>
                                            <Box
                                                sx={{
                                                    width: 200,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >

                                                <Rating
                                                    name="text-feedback"
                                                    value={index.value}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <Box sx={{ ml: 2 }}>{labels[index.value]}</Box>
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Documentation</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>
                            </Grid>
                        </Grid>

                    ))}
                </Grid>
            </Box>


        </Card>
    )
}

export default Skills;