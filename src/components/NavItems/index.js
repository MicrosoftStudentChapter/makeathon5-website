import React from 'react';
import{
  List, ListItem, 
  ListItemButton, ListItemText, Typography
} from '@mui/material';

export const NavItems = () => {
  const items = {
    "HOME": "#home",
    // "ABOUT US" : "#about",
    // "TIMELINE" : "#timeline",
    // "TRACKS" : "#tracks",
    // "SPEAKERS": "#speakers",
    // "PRIZES" : "#prizes",
    // "SPONSORS": "#sponsors",
    "FAQs" : "#faqs"
  }
  const fontq = "'Lexend Exa', sans-serif";
  return (
    <List>
      {
        Object.keys(items).map((text, index) => (
          <ListItem
            key={text}
            sx={{
              borderLeft: "3px solid #ffffffaa",
              margin: "1rem",
              "&:hover":{
                borderLeft: "3px solid #ffffff"
              }
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: '20px',
                  color: "#ffffff",
                  fontWeight: "bold",
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}
