import {
  Box
} from "@mui/material"

export const SponsorTracks = () => {
  
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

  return(
    <ParentBox>
    </ParentBox>
  )
}
