import React from 'react';
import{
  List, ListItem, 
  ListItemButton, ListItemText
} from '@mui/material'

export const NavItems = () => {
  const items = {
    "Home": "#home",
    "About Us" : "#about",
    "Timeline" : "#timeline",
    "Tracks" : "#tracks",
    "Speakers": "#speakers",
    "Prizes" : "#prizes",
    "Sponsors": "#sponsors",
    "FAQs" : "#faqs"
  }
  return (
    <List
      sx={{
      }}
    >
      {
        Object.keys(items).map((text, index) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{
                  color: "white"
                }}
              />
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}
