import React from "react";
import {motion, useScroll} from "framer-motion";

export const TimelineEvent = ({position, content}) => {
  const { scrollYProgress } = useScroll();
  return(
    <div
      style={{
        width: "20vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <div
        style={{
          width: "inherit",
          height: "50vh",
          display: "flex",
          flexDirection: "row",
          alignItems: position == "down" ? "flex-start" : "flex-end",
          color: "black",
          wordWrap:"break-word",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "inherit",
            height: "fit-content",
            wordWrap: "break-word",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
