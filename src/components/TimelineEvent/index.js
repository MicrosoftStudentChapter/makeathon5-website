import React from "react";
// import {motion, useScroll} from "framer-motion"; 
import style from './event.module.css';
import {
  Button, Typography, Box
} from "@mui/material";

export const TimelineEvent = ({position, content, date}) => {
  // const { scrollYProgress } = useScroll();
  return(
    <div
      className={style.primary}
      style={{
      }}
    >
      <Button
        variant="text"
        color="inherit"
        sx={{
          posiiton: "fixed",
          top: position == "up"  ? "22.75%" : "35.75%",
          // top: "25.75%",
          left: "32.3%",
          height: "5rem",
          width: "10rem",
          color: "white",
          borderRadius: "10px",
          "@media (max-width: 800px)": {
            left: "-21%",
            top: position == "up" ? "22.75%" : "41.75%"
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
          height: "50vh",
          display: "flex",
          flexDirection: "row",
          alignItems: position == "down" ? "flex-start" : "flex-end",
          wordWrap:"break-word",
          backgroundColor: "transparent",
          "@media (max-width: 800px)" : {
            height: "60vh"
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
