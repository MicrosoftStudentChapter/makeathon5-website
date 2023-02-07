import React from "react";
// import {motion, useScroll} from "framer-motion"; 
import style from './event.module.css';
import {
  Button, Typography
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
          top: position == "up"  ? "17.75%" : "33.75%",
          // top: "25.75%",
          left: "42%",
          height: "5rem",
          width: "1rem",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
        >
          {date}
        </Typography>
      </Button>
      <div
        style={{
          width: "inherit",
          height: "50vh",
          display: "flex",
          flexDirection: "row",
          alignItems: position == "down" ? "flex-start" : "flex-end",
          wordWrap:"break-word",
          backgroundColor: "transparent",
        }}
      >
        
        <div
          className={style.text}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
