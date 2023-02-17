import React from "react";
// import {motion, useScroll} from "framer-motion"; 
import style from './event.module.css';
import {
  Button, Typography, Box
} from "@mui/material";

export const TimelineEvent = ({position, content, date}) => {
  // const { scrollYProgress } = useScroll();
  const font = "'Overpass Mono', monospace"; 
  return(
    <div
      className={style.primary}
    >
      <Button
        variant="text"
        color="inherit"
        sx={{
          posiiton: "fixed",
          top: position == "up"  ? "20.75%" : "50.75%",
          // top: "25.75%",
          left: "32.3%",
          height: "5rem",
          width: "10rem",
          color: "white",
          fontFamily: font,
          borderRadius: "10px",
          "@media (max-width: 800px)": {
            left: "-20%",
            top: position == "up" ? "20.75%" : "55.75%"
          }
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            zIndex: 2
          }}
        >
          {date}
        </Typography>
      </Button>
      <Box
        sx={{
          width: "inherit",
          height: "70vh",
          display: "flex",
          flexDirection: "row",
          alignItems: position == "down" ? "flex-start" : "flex-end",
          wordWrap:"break-word",
          backgroundColor: "transparent",
          "@media (max-width: 800px)" : {
            height: "80vh"
          }
        }}
      >
        
        <div
          className={style.text}
        >
          {content}
        </div>
      </Box>
    </div>
  );
}
