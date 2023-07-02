import React, { useState } from "react";
import {
  Drawer,
  Typography,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
// import Logo from './assets/logo.svg';
import { NavItems } from "../../components/NavItems";

export const Navbar = () => {
  const styles = makeStyles({
    backdrop: {
      background: "black",
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        zIndex: "1000",
        flexDirection: "row",
      }}
    >
      <IconButton
        edge="start"
        color="white"
        onClick={() => {
          setIsOpen(true);
        }}
        sx={{
          marginTop: "1.5rem",
          marginLeft: "1rem",
        }}
      >
        <MenuSharpIcon
          sx={{
            color: "white",
            fontSize: "3rem",
          }}
        />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={styles.backdrop}
        transitionDuration={{
          enter: 500,
          exit: 500,
        }}
      >
        <Box
          width="100vw"
          height="auto"
          textAlign="center"
          role="presentation"
          sx={{
            backgroundColor: "rgba(0,0,0)",
            backdropFilter: "blur(10px)",
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => {
              setIsOpen(false);
            }}
            sx={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
            }}
          >
            <CloseSharpIcon
              sx={{
                color: "#a1a1a1",
                fontSize: "3rem",
                animation: "fadeIn 1s ease-in",
                "@keyframes fadeIn": {
                  "0%": { opacity: 0 },
                  "100%": { opacity: 1 },
                },
                "&:hover": {
                  color: "white",
                },
              }}
            />
          </IconButton>
          <Box
            width="100%"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              "@media(max-width: 850px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "@media(max-width: 850px)": {
                  width: "100vw",
                  height: "35vh",
                },
              }}
              height="100%"
              width="45%"
            >
              {/* <img
                src="https://res.cloudinary.com/damjdcgak/image/upload/v1675709886/Makeathon%205%20website/Chu%20Logo/makeathon5-Logo-white-noBG_kz20hk.png"
              /> */}
              <h1
                style={{
                  color: "white",
                  fontSize: "xx-large",
                  fontFamily: "orbitron",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Makeathon 6
              </h1>
            </Box>
            <Box
              width="45vw"
              height="100vh"
              textAlign="center"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media(max-width: 850px)": {
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100vw",
                  height: "65vh",
                },
              }}
            >
              <NavItems close={setIsOpen} />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
