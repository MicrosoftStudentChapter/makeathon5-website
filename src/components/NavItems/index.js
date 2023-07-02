import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export const NavItems = ({ close }) => {
  const items = {
    HOME: "#landing",
    "ABOUT US": "#about",
    // "TIMELINE" : "#timeline",
    // "TRACKS" : "#tracks",
    // "SPONSOR TRACKS" : "#sponsorTracks",
    // "SPEAKERS": "#speakers",
    // "PRIZES" : "#prizes",
    SPONSORS: "#sponsors",
    FAQs: "#faqs",
  };
  const fontq = "'Lexend Exa', sans-serif";
  return (
    <List>
      {Object.keys(items).map((text, index) => (
        <ListItem
          key={text}
          sx={{
            borderLeft: "3px solid #ffffffaa",
            "&:hover": {
              borderLeft: "3px solid #ffffff",
            },
            "@media(max-width: 850px)": {
              border: "3px solid #ffffffaa",
              "&:hover": {
                border: "3px solid #ffffff",
              },
            },
            margin: 2,
          }}
          onClick={() => {
            close(false);
            window.location = items[text];
          }}
          disablePadding
        >
          <ListItemButton
            sx={{
              "&:hover": {
                color: "white",
              },
            }}
          >
            <a href={items[text]}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  // marginLeft: "1.5rem",
                  fontSize: "1.7rem",
                  color: "#ffffffaa",
                  fontWeight: "900",
                  "@media (max-width: 950px)": {
                    fontSize: "1rem",
                  },
                }}
              />
            </a>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
