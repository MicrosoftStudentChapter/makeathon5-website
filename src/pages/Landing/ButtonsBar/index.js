import React from "react";
import { Box, IconButton, Button } from "@mui/material";
import Logo from "../assets/devfolio.svg";
export const ButtonsBar = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "20vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        "@media (max-width: 800px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        },
      }}
    >
      <div
        class="apply-button"
        data-hackathon-slug="makeathon5"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      ></div>
      <a href="https://tally.so/r/3xVk7E" target="_blank" rel="noopener noreferrer">
      <Button
        variant="contained"
        // disabled
        sx={{
          marginLeft: "2rem",
          width: "312px",
          height: "44px",
          "@media (max-width: 800px)": {
            marginTop: "1rem",
            marginLeft: "0rem",
          },
          textDecoration:"none",
          
        }}
        color="secondary"
      >
        Offline Registration Form
      </Button>
      </a>
      <Button
        variant="contained"
        disabled
        sx={{
          marginLeft: "2rem",
          width: "312px",
          height: "44px",
          "@media (max-width: 800px)": {
            marginTop: "1rem",
            marginLeft: "0rem",
          },
        }}
        color="secondary"
      >
        Download The Checkin App
      </Button>
      
    </Box>
  );
};
