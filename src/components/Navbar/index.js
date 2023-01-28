import React, {useState} from 'react';
import {Drawer, Typography, IconButton, Box} from '@mui/material'
import MenuSharpIcon from '@mui/icons-material/MenuSharp'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
      <IconButton
        edge="start"
        color="white"
        onClick={() => setIsOpen(true)}
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
        anchor="left"
        open={isOpen}
        onClose = {() => setIsOpen(false)}
      >
        <Box
          p={2}
          width="100vw"
          textAlign='center'
          role='presentation'
        >
          <Typography
            variant="h6"
            component="div"
          >
            SidePanel
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
