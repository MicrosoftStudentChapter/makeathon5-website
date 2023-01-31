import React from 'react';
import {Box, IconButton, Button} from '@mui/material'
import Logo from '../assets/devfolio.svg'

export const ButtonsBar = () => {
  return(
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div 
        class="apply-button" 
        data-hackathon-slug="makeathon5" 
        data-button-theme="light"
        style={{height: "44px",width: "312px"}} 
      ></div>
      <Button
        variant="outlined"
        sx={{
          margin: "2rem"
        }}
      >
        Download The Checkin App
      </Button>
    </Box>
  )
}
