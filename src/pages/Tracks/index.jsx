import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
// Custom Styles
import styles from "./track.module.scss";
import background1 from "./assets/t1.png";
import background2 from "./assets/t2.png";
import background3 from "./assets/t3.png";
import background4 from "./assets/t4.png";
// MUI components
import {
  Box,
  Typography
}
from "@mui/material";
import styled from "@emotion/styled";

export const Tracks = () => {
  const font = "'Lexend Exa', sans-serif";
  const headFont = "'Titillium Web', sans-serif";
  const data = {
    "Health" : {
      image: background1
    },
    "Smart City" : {
      image: background2
    },
    "Open Innovation" : {
      image: background3
    },
    "Heritage" : {
      image: background4
    },
    "TRACKS" : {
      image : ""
    }
  }
  const [title, setTitle] = useState("TRACKS")
  const [showSingleTrack, setShowSingleTrack] = useState(false)
  const ParentBox = styled(Box)({
    width: "100vw",
    height: "100vh",
    display: "flex",
    position: "relative",
    flexDirection: "row",
    "@media (max-width: 800px)" : {
      flexDirection: "column"
    }
  });
  const Slide1 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100vh",
    diplay:"flex",
    backgroundImage: `url(${background1})`,
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25vh",
      "&:hover":{
        width: "100vw",
        height: "40vh"
      }
    },
    "&:hover":{
      width: "40vw",
    }
  });
  const Slide2 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100vh",
    diplay:"flex",
    backgroundImage: `url(${background2})`,
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25vh",
      "&:hover":{
        width: "100vw",
        height: "40vh"
      }
    },
    "&:hover":{
      width: "40vw"
    }
  });
  const Slide3 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100vh",
    diplay:"flex",
    backgroundImage: `url(${background3})`,
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25vh",
      "&:hover":{
        width: "100vw",
        height: "40vh"
      }
    },
    "&:hover":{
      width: "40vw"
    }
  });
  const Slide4 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100vh",
    diplay:"flex",
    backgroundImage: `url(${background4})`,
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25vh",
      "&:hover":{
        width: "100vw",
        height: "25vh"
      }
    },
    "&:hover":{
      width: "40vw"
    }
  });
  const TitleBox = styled(Box)({
    position: "absolute",
    display: "flex",
    top: "2%",
    left: 44 - title.length + "%",
    zIndex: 1,
    "@media (max-width: 800px)":{
      left: title.length < 7 ? 25 - title.length + "%" : "7%",
      top: "0%"
    } 
  })
  const Title = styled(Typography)({
    position: "relative",
    letterSpacing: "0.5rem",
    color: "white",
    fontFamily: headFont,
    textAlign: "center",
    animation: "fade 1s ease-in 1",
    "@keyframes fade" : {
      "0%" : {
        opacity: "0.1"
      },
      "100%":{
        opacity: "1"
      }
    },
    "@media (max-width: 800px)" : {
      fontSize: "3.5rem"
    }
  });
  const TrackTitle = styled(Typography)({
    letterSpacing: "0.2",
    color: "white",
    fontFamily: font,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "55%",
    left: "10%",
    fontSize: "3rem",
    "@media (max-width: 800px)" : {
      fontSize: "1.5rem"
    }
  })
  const FullBox = styled(Box)({
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${data[title].image})`,
    animation: "fadeIn 0.5s ease-in 1",
    "@keyframes fadeIn" : {
      "0%" : {
        opacity : "0.4"
      },
      "100%" : {
        opacity: "1"
      }
    }
  })
  const ProblemStatement = styled(Box)({
  })
  useEffect(()=>{
    document.querySelector("body").addEventListener("keydown", (e) =>{
      if(e.key == "Escape"){
        setTitle("TRACKS")
        setShowSingleTrack(false)
      }
    })
  },[])
  // Handler Functions
  const handleClick = (newTitle) => {
    console.log(newTitle)
    setTitle(newTitle)
    setShowSingleTrack(true)
  } 

  return(
    <ParentBox>
      <TitleBox>
        <Title
          variant="h1"
        >
          {title}
        </Title>
      </TitleBox>
      {!showSingleTrack ? (  
        <>
          <Slide1>
            <TrackTitle
              onClick={()=>{handleClick(Object.keys(data)[0])}}
            >
              {Object.keys(data)[0]}
            </TrackTitle>
          </Slide1>
          <Slide2>
            <TrackTitle
              onClick={() => {handleClick(Object.keys(data)[1])}}
            >
              {Object.keys(data)[1]}
            </TrackTitle>
          </Slide2>
          <Slide3>
            <TrackTitle
              onClick={() => {handleClick(Object.keys(data)[2])}}
            >
              {Object.keys(data)[2]}
            </TrackTitle>
          </Slide3>
          <Slide4>
            <TrackTitle
              onClick={() => {handleClick(Object.keys(data)[3])}}
            >
              {Object.keys(data)[3]}
            </TrackTitle>
          </Slide4>
        </>
        ) : (
          <FullBox>
          </FullBox>
        )
      }
    </ParentBox>
  )
}

