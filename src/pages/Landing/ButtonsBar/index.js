import React from "react";
import { Box, IconButton, Button } from "@mui/material";
import Logo from "../assets/devfolio.svg";
import btnstyles from "./btnbar.module.css";

export const ButtonsBar = () => {
  function getOs() {
    var usag = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(usag)) {
      return "android";
    }
    return "n";
    // }
  }

  function handleClick() {
    const os = getOs();
    if (os == "android") {
      alert(
        "You will now be redirected. Kindly download and install the APK file provided in the drive folder."
      );
      window.open(
        "https://drive.google.com/drive/folders/1Y2P3guYLQmLSFl7EsWaqkIuj46-NoTa7"
      );
    } else if (os == "n") {
      // currently only for android, add the ios link here
      window.open(
        "https://drive.google.com/drive/folders/1Y2P3guYLQmLSFl7EsWaqkIuj46-NoTa7"
      );
    }
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "20vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        "@media (max-width: 800px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        },
      }}
    >
      {/* <div
        class="apply-button"
        data-hackathon-slug="makeathon5"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      ></div> */}
      {/* uncomment when adding Devfolio Integration */}
      {/* <a className={btnstyles.anchor} href="https://tally.so/r/3xVk7E" target="_blank" rel="noopener noreferrer"> */}
      <Button
        variant="contained"
        // disabled
        sx={{
          marginLeft: "0rem",
          width: "312px",
          height: "44px",
          "@media (max-width: 800px)": {
            marginTop: "1rem",
            marginLeft: "0rem",
          },
          textDecoration: "none",
        }}
        color="secondary"
        onClick={() => {
          alert("Offline Registrations are closed now.");
        }}
      >
        Offline Registration Form
      </Button>
      <Button
        variant="contained"
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
        onClick={() => {
          handleClick();
        }}
      >
        Download Our App / Checkin
      </Button>
    </Box>
  );
};
