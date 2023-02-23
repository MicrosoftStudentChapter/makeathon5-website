import {
  Box, Typography,
  Accordion, AccordionSummary, AccordionActions, AccordionDetails,
} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled'

import Back from '../Timeline/assets/wall1.svg';

export const SponsorTracks = () => {
  
  const headFont = "'Titillium Web', sans-serif";
  const font = "'Lexend Exa', sans-serif";

  const ParentBox = styled(Box)({
    width: "100vw",
    height: "fit-content",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    backgroundImage: `url(${Back})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover"
  });

  const Title = styled(Box)({
    width: "100vw",
    height: "15vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  })

  const SponsBox = styled(Box)({
    width: "100vw",
    height: "100vh",
    paddingBottom: "10%",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })

  const SponsTrack = styled(Box)({
    width: "90vw",
    height: "25vh",
    backgroundColor: "#ffffff11",
    backdropFilter: "blur(10px)",
    margin: "2rem",
    padding: "1rem",
    borderRadius: "10px",
    transition: "0.6s height ease-in",
 })

  const CompanyText = styled(Typography)({
    fontFamily: headFont,
    color: "white",
  })

  return(
    <ParentBox>
      <Title>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontFamily: headFont,
            fontWeight: "bold"
          }}
        >
          SPONSOR TRACKS
        </Typography>
      </Title>
      <SponsBox>
        <Accordion
          sx={{
            backgroundColor: "#ffffff11",
            backdropFilter: "10px",
            width: "90%",
            marginBottom: "10px"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="white" sx={{fontFamily: headFont}} variant="h4">Polygon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="white"
              variant="p"
              sx={{fontFamily: headFont}}
            >
              Polygon is a protocols and a framework for building and connecting Etherium-compatable blockchain networks.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#ffffff11",
            backdropFilter: "10px",
            width: "90%"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="white" sx={{fontFamily: headFont}} variant="h4">Polygon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="white"
              variant="p"
              sx={{fontFamily: headFont}}
            >
              Polygon is a protocols and a framework for building and connecting Etherium-compatable blockchain networks.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#ffffff11",
            backdropFilter: "10px",
            width: "90%"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="white" sx={{fontFamily: headFont}} variant="h4">Polygon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="white"
              variant="p"
              sx={{fontFamily: headFont}}
            >
              Polygon is a protocols and a framework for building and connecting Etherium-compatable blockchain networks.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </SponsBox>
    </ParentBox>
  )
}
