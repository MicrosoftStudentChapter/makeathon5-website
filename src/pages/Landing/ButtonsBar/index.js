import React from 'react';
import {Box, Button} from '@mui/material'

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
      <Button
        variant="contained"
        sx={{
          margin: "1rem",
          width: "20rem",
          height: "3rem"
        }}
      >
        Register Now
      </Button>
      <Button
        variant="outlined"
        sx={{
          margin: "2rem"
        }}
      >
        Register Now
      </Button>
    </Box>
  )
}
