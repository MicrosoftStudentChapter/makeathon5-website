import React, {useState} from "react";
import background from './assets/wallpaper4.svg';
// import logo from './assets/logo.svg';
import styles from '../Landing/landing.module.scss';
import {Navbar} from '../../components/Navbar';
import { 
  Typography, 
  Box, Grid, 
} from "@mui/material";

const Landing = () => {
  const title = "MAKE A THON";
  const font = "'Lexend Exa', sans-serif";
  return(
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "-10rem",
        "@media(max-width: 800px)" : {
          backgroundPosition: "center"
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "4vh",
          justifyContent: "flex-start"
        }}
      >
        <Navbar />
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100vw",
          height:"95vh"
        }}
      >
        <Typography 
          variant="h1"
          align="center"
          sx={{
            color: "#fff",
            fontFamily: font,
            fontSize: "8rem",
            marginRight: "1.5rem",
            "@media(max-width: 800px)" : {
              fontSize: "2.9rem",
              marginTop: "-5rem",
              marginRight: "0"
            }
          }}
          className={styles.glitchyBabe}
          data-text={title}
        >
          {title}
        </Typography>
      </Grid>
    </Box>
  )
} 

export default Landing;
