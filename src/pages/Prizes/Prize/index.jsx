import React from "react";
import {
  Card, CardActions,
  CardContent, CardMedia,
  Button, Typography  
}
from '@mui/material';

export const Prize = ({icon, title, content}) => {
  return(
    <Card
      sx={{
        height: "20rem",
        width: "20rem",
        backgroundColor: "#ffffff32",
        boxShadow: "1px 1px #ffffff11",
        backdropFilter: "blur(10px)",
        marginRight: "2rem",
        marginBottom: "1rem",
        transition: "0.4s",
        "&:hover":{
          boxShadow: "0px 3px #ffffffe3"
        }
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "white"
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}
