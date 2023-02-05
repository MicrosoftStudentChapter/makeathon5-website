import React from 'react';
import {Box, IconButton, Button} from '@mui/material'
import Logo from '../assets/devfolio.svg'

export const ButtonsBar = () => {
  return(
    <Box
      sx={{
        width: "100vw",
        height: "20vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <div 
        class="apply-button" 
        data-hackathon-slug="makeathon5" 
        data-button-theme="light"
        style={{height: "44px",width: "312px"}} 
      ></div>
      <Button
        variant="contained"
        sx={{
          marginLeft: "2rem",
          width: "312px",
          height: "44px",
        }}
        color = "secondary"
      >
        Download The Checkin App
      </Button>
    </Box>
  )
}
