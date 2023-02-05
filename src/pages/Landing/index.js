import React, { useEffect, useRef } from "react";
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
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  },[])
  // const ref=useRef();
  return(
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "-10rem",
        scrollSnapAlign: "start",
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
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
          height:"80vh"
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
      <Box
        sx={{
          width: "100vw",
          height: "20vh",
        }}
      >
        <ButtonsBar />
      </Box>
    </Box>
  )
} 

export default Landing;
