import React from 'react';
import{
  List, ListItem, 
  ListItemButton, ListItemText, Typography
} from '@mui/material';

export const NavItems = ({close}) => {
  const items = {
    "HOME": "#landing",
    "ABOUT US" : "#aboutnew",
    "TIMELINE" : "#timeline",
    "TRACKS" : "#tracks",
    "SPONSOR TRACKS" : "#sponsorTracks",
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
            onClick={() => {close(false); window.location=items[text]}}
            disablePadding
          >
            <ListItemButton
            sx={{
              "&:hover":{
                color:'white'
              }
            }}>
            <a href={items[text]}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  marginLeft:'1.5rem',
                  fontSize: '1.7rem',
                  color: "#ffffffaa",
                  fontWeight: "900",
                  "@media (max-width: 950px)":{
                    fontSize: "1rem"
                  }
                }} 
                
              />
            </a>
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}
