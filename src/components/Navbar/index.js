import React, {useState} from 'react';
import {Drawer, Typography, IconButton, Box, List, ListItem, ListItemButton, ListItemText} from '@mui/material'
import {makeStyles} from '@mui/styles';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
// import Logo from './assets/logo.svg';
import {NavItems} from '../../components/NavItems'

export const Navbar = () => {
  const styles = makeStyles({
    backdrop: {
      background: "black",
    }
  })
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        zIndex: "1000",
        flexDirection: "row"
      }}
    >
      <IconButton
        edge="start"
        color="white"
        onClick={() => {setIsOpen(true)}}
        sx={{
          marginTop: "1.5rem",
          marginLeft: "1rem"
        }}
      >
        <MenuSharpIcon
          sx={{
            color: "white",
            fontSize: "3rem"
          }}
        />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose = {() => setIsOpen(false)}
        className={styles.backdrop}
        transitionDuration={{
          enter: 500,
          exit: 500
        }}
      >
        <Box
          width="100vw"
          height="100vh"
          textAlign='center'
          role='presentation'
          sx={{
            backgroundColor: "rgba(0,0,0)",
            display: "flex",
            backdropFilter: "blur(10px)",
            flexDirection: "row"
          }}
        >
          <Box
            width="55vw"
            heigh="100vh"
            textAlign="center"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Box
              width="inherit"
              height="10vh"
              sx={{
                display: "flex",
                flexDirection:"row",
                justifyContent: "flex-start",
                marginLeft: 2
              }}
            >
              <IconButton
                onClick={()=>{setIsOpen(false);}}
                sx={{
                  // paddingLeft: "3rem"
                }}
              >
                <CloseSharpIcon
                  sx={{
                    color: "#a1a1a1",
                    fontSize: "3rem",
                    animation:"fadeIn 1s ease-in",
                    "@keyframes fadeIn": {
                      "0%" : {"opacity": 0},
                      "100%": {"opacity": 1}
                    },
                    "&:hover" : {
                      color: "white",
                    }
                  }
                  }
                />
              </IconButton>
            </Box>
            <Box
              width="inherit"
              height="90vh"
              sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent: "center"
              }}
            >
              <img
                src="https://res.cloudinary.com/damjdcgak/image/upload/v1675709886/Makeathon%205%20website/Chu%20Logo/makeathon5-Logo-white-noBG_kz20hk.png"
              />
            </Box>
          </Box>
          <Box
            width="45vw"
            height="100vh"
            textAlign="center"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <NavItems />
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}
