import React from "react";
import background from './assets/wallpaper4.svg';
import background2 from './assets/wallpaper2.png';
// import logo from './assets/logo.svg';
import styles from '../Landing/landing.module.scss';
import { 
  Typography, 
  Box, Grid, 
} from "@mui/material";
// Components
import {CountdownTimer} from './CountdownTimer'
import {ButtonsBar} from './ButtonsBar'

const Landing = () => {
  const title = "MAKE A THON";
  const font = "'Lexend Exa', sans-serif";
  return(
    <Box
      sx={{
        width: "100vw",
        height: "200vh"
      }}
    >
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
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${background2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPositionY: "-2rem",
          backgroundColor: "#72D7BE"
        }}
      >
        <CountdownTimer />
        <ButtonsBar />
      </Box>
    </Box>
  )
} 

export default Landing;
