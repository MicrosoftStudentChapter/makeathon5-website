import React, { useEffect, useRef } from "react";
import bg from './assets/bg3.jpg'
// import background from './assets/wallpaper4.svg';
// import background2 from './assets/wallpaper2.png';
// import logo from './assets/logo.svg';

import styles from "../Landing/landing.module.scss";
import { Typography, Box, Grid } from "@mui/material";
// Components
import { CountdownTimer } from "./CountdownTimer";
import { ButtonsBar } from "./ButtonsBar";
import { motion } from "framer-motion";
import background from "./assets/background3.gif"
const Landing = () => {
  const title = "MAKE A THON ";
  const title2="VI"
  const font = "'Lexend Exa', sans-serif";
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // const ref=useRef();
  return (
    <motion.div
      initial={{ opacity: 0.0 }}
      animate={{ opacity: 1.0 }}
      exit={{ opacity: 0.0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          // backgroundImage:
            // "url(https://i.pinimg.com/originals/4e/15/a9/4e15a9e296c03c97c417335a2fbe8f93.gif)",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          scrollSnapAlign: "start",
          scrollBehavior: "smooth",
          scrollSnapType: "y mandatory",
          "@media(max-width: 800px)": {
            backgroundPosition: "center",
          },
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
            height: "80vh",
            "@media (max-width: 800px)": {
              height: "80vh",
            },
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
              "@media(max-width: 800px)": {
                fontSize: "2.9rem",
                marginTop: "-5rem",
                marginRight: "0",
              },
            }}  
            className={styles.glitchyBabe}
            data-text={title}
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            align="center"
            sx={{
              color: "#fff",
              fontFamily: font,
              fontSize: "8rem",
              marginRight: "1.5rem",
              "@media(max-width: 800px)": {
                fontSize: "2.9rem",
                marginTop: "-5rem",
                marginRight: "0",
              },
            }}  
            className={styles.glitchyBabe}
            data-text={title2}
          >
            {title2}
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
    </motion.div>
  );
};

export default Landing;
