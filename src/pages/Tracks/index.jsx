import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
// Custom Styles
import styles from "./track.module.scss";
import background1 from "./assets/t1.png";
import background2 from "./assets/t2.png";
import background3 from "./assets/t3.png";
import background4 from "./assets/t4.png";
import background5 from "./assets/t5.png";
// MUI components
import {
  Box,
  IconButton,
  ListItem,
  Typography
}
from "@mui/material";
import styled from "@emotion/styled";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export const Tracks = () => {
  const font = "'Lexend Exa', sans-serif";
  const headFont = "'Titillium Web', sans-serif";
  const data = {
    "HealthCare" : {
      image: background1,
      content: [
        "Healthcare technology refers to using technologies developed to improve some aspects of the healthcare system. From telehealth to robotic-assisted surgery, our guide will walk you through what it is and how it’s used."
      ],
      prbs: [
        "Create an interface to generate recipes of common meals and help people with food allergies find viable substitutes for mentioned allergens. You can have various filters, including the country of origin, history, culture, etc., of the dish.",
        "Studies have concluded that in 2006 well over $30 billion was spent on unnecessary hospital admissions. Is there a better way? Can we identify those most at risk earlier and ensure they get the treatment they need? To achieve its goal of developing a breakthrough algorithm that uses available patient data to predict and prevent unnecessary hospitalizations. ",
        "Open Innovation"
      ],
      links: ["https://drive.google.com/drive/folders/1_IdVIjBFWzugWerfVlEVnqJOkswdHGwf?usp=sharing"]
    },
    "Smart City" : {
      image: background2,
      content: [
        "A smart city uses information and communication technology to improve operational efficiency, share information with the public, and provide better government service and citizen welfare. The main goal of a smart city is to optimize city functions and promote economic growth while also improving the quality of life for citizens by using intelligent technologies and data analysis. The value lies in how this technology is used rather than simply how much technology is available."
      ],
      prbs: [
        "When the dustbin location is unknown, people throw garbage anywhere. Using maps or SMS functionality, citizens can use a Dustbin locator to find dustbins nearby.",
        "World Hunger is one of the biggest problems in the 21st Century; find an Implementation for Businesses to connect with NGOs and low-income families for cheap and free food going to waste.",
        "Assignment of a Digital Address Code (DAC) comprising geo-coordinates of the house (Latitude/Longitude) will ease locating addresses for the delivery of government services and other purposes. Digital Address is a unique, standard, and permanent identification of a physical address on a digital map having some sense of directionality and intuitiveness. The address needs to be differentiated from the addresses. DAC will also allow the authentication of addresses and the elimination of fake addresses, aiming to create a central database of addresses. The Hackathon team should design and implement the most efficient design, creation, and use of the DAC for the abovementioned purposes. Teams must take care of speed, accuracy, storage complexity, security, the DAC's flexibility, excluding sensitive locations, etc.",
        "Design solutions for improving emergency response systems, including technology for early warning and rapid response. / Develop solutions for improving emergency response in urban areas, including using technology for disaster management and emergency services.",
        "Open Innovation"
      ],
      links: []
    },
    "Heritage" : {
      image: background3,
      content: [
        "Heritage, encompasses tangible and intangible, natural and cultural, movable and immovable and documentary assets inherited from the past and transmitted to future generations by virtue of their irreplaceable value. The term ‘heritage’ has evolved considerably over time. Initially referring exclusively to the monumental remains of cultures, the concept of heritage has gradually been expanded to embrace living culture and contemporary expressions. As a source of identity, heritage is a valuable factor for empowering local communities and enabling vulnerable groups to participate fully in social and cultural life. It can also provide time-tested solutions for conflict prevention and reconciliation."
      ],
      prbs: [
        "The water's color results from solar radiation's interaction with water constituents and their concentration. The changing watercolor directly indicates changing water parameters and its suitability for usage. Measurement of water leaving radiance in the visible region and its transformation to hue angle provide necessary water parameters. Development of an App for the measurement of Water Quality using a smartphone. ",
        "Create a game or app that makes learning about Indian history and culture more engaging and interactive.",
        "Open Innovation"
      ],
      links : []
    },
    "Miscellaneous" : {
      image: background4,
      content: [
        "Welcome to the year 2912, where a cosmic riddle needs to be solved via data science. Things weren't looking good when we received a communication from a star system four lightyears away. A month ago, the Spaceship Titanic, an intergalactic passenger liner, was launched. The ship left on its maiden mission carrying emigrants from our solar system to three newly habitable exoplanets orbiting nearby stars with approximately 13,000 passengers on board. The unsuspecting Starship Titanic collided with a spacetime anomaly concealed beneath a dust cloud as it rounded Alpha Centauri on its way to its first destination—the scorching 55 CancriE. Tragically, it experienced the same demise as its namesake from 1000 years before. The ship was unharmed, but approximately half of the people were taken to another dimension."
      ],
      prbs: [
        "To help rescue crews retrieve lost passengers, you are challenged to predict which passengers were transported by the anomaly using records recovered from the spaceship’s damaged computer system. Help save them and change history!  "
      ],
      links: [
        "https://drive.google.com/drive/folders/1hl2kEv5sxE8isUlfpZOlrxOn3XFgEs-w?usp=sharing"
      ]
    },
    "TRACKS" : {
      image : ""
    }
  }
  const [title, setTitle] = useState("TRACKS")
  const [showSingleTrack, setShowSingleTrack] = useState(false)
  const ParentBox = styled(Box)({
    width: "100vw",
    height: "120vh",
    display: "flex",
    position: "relative",
    flexDirection: "row",
    "@media (max-width: 800px)" : {
      flexDirection: "column",
      height: "250vh",
    }
  });
  const Slide1 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100%",
    diplay:"flex",
    backgroundImage: `url(${background1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25%",
      "&:hover":{
        width: "100vw",
        height: "40%"
      }
    },
    "&:hover":{
      width: "40vw",
      "@media (max-width: 800px)":{
        width: "100vw",
        height: "40%"
      }
    },
  });
  const Slide2 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100%",
    diplay:"flex",
    backgroundImage: `url(${background2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25%",
      "&:hover":{
        width: "100vw",
        height: "40%"
      }
    },
    "&:hover":{
      width: "40vw",
      "@media (max-width: 800px)":{
        width: "100vw",
        height: "40%"
      }
    },
  });
  const Slide3 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100%",
    diplay:"flex",
    backgroundImage: `url(${background4})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25%",
    },
    "&:hover":{
      width: "40vw",
      "@media (max-width: 800px)":{
        width: "100vw",
        height: "40%"
      }
    },
  });
  const Slide4 = styled(Box)({
    width: "25vw",
    position: "relative",
    height: "100%",
    diplay:"flex",
    backgroundImage: `url(${background5})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25%",
    },
    "&:hover":{
      width: "40vw",
      "@media (max-width: 800px)":{
        width: "100vw",
        height: "40%"
      }
    },
  });
  const Slide5 = styled(Box)({
    width: "25%",
    position: "relative",
    height: "100%",
    diplay:"flex",
    backgroundImage: `url(${background5})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "0.8s",
    "@media (max-width: 800px)" : {
      width: "100vw",
      height: "25%",
    },
    "&:hover":{
      width: "40vw",
      "@media (max-width: 800px)":{
        width: "100vw",
        height: "40%"
      }
    },
  });
  const TitleBox = styled(Box)({
    position: "absolute",
    display: "flex",
    top: "2%",
    left: 44 - title.length + "%",
    zIndex: 2,
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
    fontWeight: "bold",
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
      fontSize: "2.6rem"
    },
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
    fontSize: "180%",
    "@media (max-width: 950px)" : {
      fontSize: "150%",
    }
    
  })
  const FullBox = styled(Box)({
    width: "100vw",
    height: "100%",
    backgroundImage: `url(${data[title].image})`,
    animation: "fadeIn 0.5s ease-in 1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: "1",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: "center",
    "@keyframes fadeIn" : {
      "0%" : {
        opacity : "0.4"
      },
      "100%" : {
        opacity: "1"
      }
    },
    "@media (max-width: 950px)" : {
      paddingBottom: "4%",
      justifyContent: "flex-start",
    }
  })
  const ProblemStatement = styled(Typography)({
    "margin": "1rem",
    "color": "#fefefa",
    fontFamily: headFont,
    fontSize: "1.2rem",
    wordWrap: "break-word",
    marginRight:"2rem",
    fontWeight: "600",
    "@media (max-width: 800px)":{
      fontSize: "1rem",
      margin: "0",
      marginBottom: "0.5rem"
    }
  })
  const reset = () => {
    setTitle("TRACKS")
    setShowSingleTrack(false)
  }
  useEffect(()=>{
    document.querySelector("body").addEventListener("keydown", (e) =>{
      if(e.key == "Escape"){
        reset()
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
          {/* <Slide5> */}
          {/*   <TrackTitle */}
          {/*     onClick={() => {handleClick(Object.keys(data)[4])}} */}
          {/*   > */}
          {/*     {Object.keys(data)[4]} */}
          {/*   </TrackTitle> */}
          {/* </Slide5> */}
        </>
        ) : (
          <FullBox>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#ffffff22",
                  backdropFilter: "blur(7px)",
                  width: "90vw",
                  marginTop: "6rem",
                  borderRadius: "10px",
                  padding: "2rem",
                  "@media (max-width: 800px)":{
                    width: "80vw",
                    height: "fit-content",
                    paddingBottom: "1rem",
                    marginTop: "10rem"
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    marginBottom: "0.5rem",
                    fontFamily: headFont,
                    fontWeight: "600",
                  }}
                >
                  Brief:
                </Typography>
                {
                  data[title].content.map((stuff)=>(
                    <Typography
                      variant="h6"
                      sx={{
                      color: "white",
                      fontFamily: headFont,
                      fontWeight: "600",
                    }}
                    >
                      {stuff}
                    </Typography>
                  ))
                }
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    marginTop: "0.7rem",
                    marginBottom: "0.5rem",
                    fontFamily: headFont,
                    fontWeight: "600",
                  }}
                >
                  Problem Statements:
                </Typography>
                <ul
                >
                  {data[title].prbs.map((stuff)=>(
                    <li
                      style={{color: "white"}}
                    >
                      <ProblemStatement>
                        {stuff}
                      </ProblemStatement>
                    </li>
                  ))}
                </ul>

                {
                  data[title].links.length != 0 ? (
                    <>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "white",
                          marginTop: "0.7rem",
                          marginBottom: "0.5rem",
                          fontFamily: headFont
                        }}
                      >
                        Related Resources (datasets, guides etc..):
                      </Typography>

                      {
                        data[title].links.map((stuff) => (
                          <li style={{color: "white"}}>
                            <a href={stuff} target="_blank" style={{color:"#00a0ff", fontSize: "1rem", wordWrap:"break-word"}}>{stuff}</a>
                          </li>
                        ))
                      }
                    </>
                  ) : (
                    <>

                    </>
                  )
                }
              </Box>
            </Box>
            <IconButton 
              aria-label="cross"
              onClick = {reset}
            >
              <CloseSharpIcon
                sx={{
                  color: "#ffffee",
                  width: "3rem",
                  height: "3rem",
                  marginTop: "2rem"
                }}
              />
            </IconButton>
          </FullBox>
        )
      }
    </ParentBox>
  )
}

