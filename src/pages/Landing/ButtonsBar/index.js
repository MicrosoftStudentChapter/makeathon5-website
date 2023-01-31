import React from 'react';
import {Box, Button} from '@mui/material'

export const ButtonsBar = () => {
  return(
    <Box
      sx={{
        width: "50vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button>
        Hello
      </Button>
    </Box>
  )
}
