import React from 'react';
import{
  List, ListItem, 
  ListItemButton, ListItemText, Typography
} from '@mui/material';

export const NavItems = () => {
  const items = {
    "HOME": "#home",
    "ABOUT US" : "#about",
    "TIMELINE" : "#timeline",
    "TRACKS" : "#tracks",
    "SPEAKERS": "#speakers",
    "PRIZES" : "#prizes",
    "SPONSORS": "#sponsors",
    "FAQs" : "#faqs"
  }
  const fontq = "'Lexend Exa', sans-serif";
  return (
    <List sx={{
      paddingTop:'0.5rem',
      paddingBottom:'0.5rem'
    }}>
      {
        Object.keys(items).map((text, index) => (
          <ListItem
            key={text}
            sx={{
              borderLeft: "3px solid #ffffffaa",
              margin: "1rem",
              "&:hover":{
                borderLeft: "3px solid #ffffff",
              }
            }}
            disablePadding
          >
            <ListItemButton
            sx={{
              "&:hover":{
                color:'white'
              }
            }}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  marginLeft:'1.5rem',
                  fontSize: '1.7rem',
                  color: "#ffffffaa",
                  fontWeight: "900",
                }} 
                
              />
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}
