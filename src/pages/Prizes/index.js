import { Box } from "@mui/system";
import React from "react";
import { Prize } from "./Prize";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import style from "./prizes.module.scss";
import background1 from './asssets/bg1.png';

export const Prizes = () => {
  // fonts
  const font = "'Lexend Exa', sans-serif";
  const headFont = "'Titillium Web', sans-serif";
  
  // styled components
  const ParentBox = styled(Box)({
    width: "100vw",
    height: "fit-content",
    paddingBottom: "5vw",
    // backgroundColor: "black",
    backgroundImage: `url(${background1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column"
  })

  const PrizeBox = styled(Box)({
    width: "100vw",
    height: "130vh",
    marginBottom: "5rem",
    marginTop: "3rem",
    display: "flex",
    flexDirection : "row",
    flexWrap: "wrap",
    justifyContent : "center",
    alignContent: "space-between",
    overflow: "auto"
  })

  const TitleBox = styled(Box)({
    width: "100vw",
    height: "20vh",
    display: "flex",
    flexDirection : "row",
    flexWrap: "wrap",
    justifyContent : "center",
    alignContent: "space-around",
  })

  // data
  const prizes = {
    "prizes":[
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
      {
        title: "First Prize",
        content: "200000"
      },
    ]
  }
  return(
    <ParentBox>
      <TitleBox>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontFamily: headFont,
            letterSpacing: "0.5rem",
            "&:hover":{
              "text-shadow" : "-1.2px 1.2px #ffff00aa"
            }
          }}
        >
          PRIZES
        </Typography>
      </TitleBox>
      <PrizeBox>
        {prizes["prizes"].map((stuff) => (
          <Prize title={stuff.title} content={stuff.content} />
        ))}
      </PrizeBox>
    </ParentBox>
  )
}
