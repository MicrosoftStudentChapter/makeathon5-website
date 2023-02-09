import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import styles from "./Styles/speakers.module.css";

export default function Speakercard(props) {
    const Widget = styled("div")(({ theme }) => ({
        height: "100%",
        width: "100%",
        borderRadius: 16,
        margin: "0 0",
        zIndex: `${props.zvalue}`,
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,207,156,1)"
                : "rgba(255,207,156,1)",
        backdropFilter: "blur(40px)",
        color: "white",
        
    }));
    return (
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "225px", 
          height: "300px",
          opacity: `${props.opaque}`,
          transform: `Translate(0,${props.value})`,
          borderRadius: 16,
          zIndex: `${props.zvalue}`,
          transition: '0.2s all'
        }}>
            
                <Widget>
                    <img
                        className={styles.speakerimg}
                        // src="https://i.pcmag.com/imagery/articles/040JHoVNgc1gh2e7sunj82k-1..v1569492349.png"
                        src={props.source}
                    />
                    <h2>Linus Tech Tips</h2>
                </Widget>
  
        </Box>
    );
}
