import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import styles from "./Styles/speakers.module.css";
import { Translate } from "@mui/icons-material";
import { Hidden } from "@mui/material";

export default function Speakercard(props) {
    const Widget = styled("div")(({ theme }) => ({
        padding: 15,
        borderRadius: 16,
        width: 200,
        maxWidth: "100%",
        minHeight: "300px",
        margin: "0 0px",
        position: "relative",
        zIndex: `${props.zvalue}`,
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,207,156,1)"
                : "rgba(255,207,156,1)",
        backdropFilter: "blur(40px)",
        
        border: "solid 2px black",
    }));
    return (
        <Box sx={{ 
          width: "100%", 
          height: "300px",
          opacity: `${props.opaque}`,
          transform: `Translate(0,${props.value})`,
          borderRadius: 16,
          zIndex: `${props.zvalue}`,
          transition: '0.5s all'
        }}>
            
                <Widget>
                    <img
                        className={styles.speakerimg}
                        src="https://i.pcmag.com/imagery/articles/040JHoVNgc1gh2e7sunj82k-1..v1569492349.png"
                    />
                    <h2>Linus Tech Tips</h2>
                </Widget>
  
        </Box>
    );
}
