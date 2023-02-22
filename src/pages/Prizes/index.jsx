import styled from "@emotion/styled"
import {
  Box, Typography
} from "@mui/material"
import data from './data.json'

const ParentBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black"
})

const TitleText = styled(Typography)({
  fontSize: "6rem",
  paddingTop: "1rem",
  fontWeight: "bold",
  color: "white"
})

const PrizeCard = styled(Box)({
  width: "30vw",
  height: "30vh",
  backgroundColor: "#ffffff11",
  backdropFilter: "blur(10px)"
})

export const Prizes = () => {
  return(
    <ParentBox>
      <Box
        sx={{
          display:"flex",
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%",
          height: "fit-content"
        }}
      >
        <TitleText variant="h1">
          Prizes
        </TitleText>
        {
          data["big"].map(()=>(<PrizeCard/>))
        }
      </Box>
    </ParentBox>
  )
}
