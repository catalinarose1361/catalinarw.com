import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const data = [
    {
        name: "React.js",
        logo: "https://img.icons8.com/color/40/000000/react-native.png"
    },
    {
        name: "Material Ui",
        logo: "https://img.icons8.com/color/40/000000/material-ui.png"
    },
    {
        name: "JavaScript",
        logo: "https://img.icons8.com/color/40/000000/javascript--v1.png"
    },
    {
        name: "Node.js",
        logo: "https://img.icons8.com/fluency/40/000000/node-js.png"
    },
    {
        name: "HTML5",
        logo: "https://img.icons8.com/color/40/000000/html-5--v2.png"
    },
    {
        name: "CSS3",
        logo: "https://img.icons8.com/color/40/000000/css3.png"
    },
    {
        name: "Heroku",
        logo: "https://img.icons8.com/color/40/000000/heroku.png"
    },
    {
        name: "Git",
        logo: "https://img.icons8.com/color/40/000000/git.png"
    },
    {
        name: "MongoDB",
        logo: "https://img.icons8.com/color/40/000000/mongodb.png"
    },
    {
        name: "GraphQL",
        logo: "https://img.icons8.com/color/40/000000/graphql.png"
    },
    {
        name: "MySQL",
        logo: "https://img.icons8.com/color/40/000000/mysql-logo.png"
    },
    {
        name: "Apollo",
        logo: "https://img.icons8.com/color/40/000000/apollo.png"
    },
]


const Skills = () => {
    return (
        <div>
            <h1>
                Skills
            </h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <img alt={index.name} src={index.logo} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
          
            {/* <img src="https://img.icons8.com/color/40/000000/react-native.png" /> */}
         
            {/* <img src="https://img.icons8.com/color/40/000000/material-ui.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/javascript--v1.png" /> */}
            {/* <img src="https://img.icons8.com/fluency/40/000000/node-js.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/html-5--v2.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/css3.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/heroku.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/git.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/mongodb.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/graphql.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/mysql-logo.png" /> */}
            {/* <img src="https://img.icons8.com/color/40/000000/apollo.png" /> */}
        </div>
    )
}

export default Skills;