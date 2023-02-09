import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import styles from "./Styles/speakers.module.css";

export default function Speakercard(props) {
    return (
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "275px", 
          height: "300px",
          opacity: `${props.opaque}`,
          transform: `Translate(0,${props.displace})`,
          borderRadius: 5,
          zIndex: `${props.zvalue}`,
          transition: '0.2s all',
          margin:"0 5px",
          background: "rgba(255,255,255,0)",
        }}>
            <img className={styles.speakerimg} src={props.pic}></img>
            <h3 className={styles.spname}>{props.naam}</h3>
  
        </Box>
    );
}
