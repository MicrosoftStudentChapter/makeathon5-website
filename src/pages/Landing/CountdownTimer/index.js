import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import './count.css';

export const CountdownTimer = () => {
  const countDownDate = new Date("February 25, 2023 00:00:00").getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  )
  const [days, setDays] = useState(Math.floor(countDown / (1000*3600*24)));
  const [hours, setHours] = useState(Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor(countDown % (1000 * 60 * 60) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor(countDown % (1000 * 60) / 1000));

  setInterval(()=>{
    const ct = countDownDate - new Date().getTime();
    setDays(Math.floor(ct / (1000*3600*24)))
  }, 1000*3600*24);

  setInterval(() => {
    const ct = countDownDate - new Date().getTime();
    setHours(Math.floor((ct % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))))
  }, 1000*3600)

  setInterval(()=>{
    const ct = countDownDate - new Date().getTime();
    setMinutes(Math.floor(ct % (1000 * 60 * 60) / (1000 * 60)));
  }, 1000*60)

  setInterval(() => {
    const ct = countDownDate - new Date().getTime();
    setSeconds(Math.floor(ct % (1000 * 60) / 1000))
  }, 1000)

  return(
    <Box
      sx={{
        width: "100vw",
        height: "50vh",
        marginTop: "15rem",
        display: "flex",
        flexDirection: "row",
        "@media (max-width:800px)" : {
          flexDirection: "column"
        }
        // justifyContent: "space-around"
      }}
      container
    >
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 800px)" : {
            width : "100vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "25vw",
            height: "inherit",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            textAlign: "center",
            "@media (max-width: 800px)":{
              width: "50vw"
            }
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff21",
              backdropFilter: "blur(10px)",
              width: "14vw",
              height: "28vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 800px)" : {
                width: "45vw"
              }
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color:"white",
                textAlignt: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "7.2rem"
              }}
            >
              {days}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontFamily: "'Lexend Exa', sans-serif"
            }}
          >
            days
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "25vw",
            height: "inherit",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            "@media (max-width: 800px)":{
              width: "50vw"
            }
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff21",
              backdropFilter: "blur(10px)",
              // width: "15vw",
              width: "14vw",
              height: "28vh",
              // height: "30vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 800px)" : {
                width: "45vw"
              }

            }}
          >
            <Typography
              variant="h6"
              sx={{
                color:"white",
                textAlignt: "center",
                fontSize: "7.2rem"
              }}
            >
              {hours}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
                color: "white",
                fontFamily: "'Lexend Exa', sans-serif"
              }}
            >
              hours
            </Typography>
          </Box>
        </Box>
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 800px)" : {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "25vw",
            height: "inherit",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            "@media (max-width: 800px)":{
              width: "50vw"
            }
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff21",
              backdropFilter: "blur(10px)",
              // width: "15vw",
              width: "14vw",
              height: "28vh",
              // height: "30vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 800px)" : {
                width: "45vw"
              }

            }}
          >
            <Typography
              variant="h6"
              sx={{
                color:"white",
                textAlignt: "center",
                fontSize: "7.2rem"
              }}
            >
              {minutes}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontFamily: "'Lexend Exa', sans-serif"
            }}
          >
            minutes
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "25vw",
            height: "inherit",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            "@media (max-width: 800px)":{
              width: "50vw"
            }
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff21",
              backdropFilter: "blur(10px)",
              width: "14vw",
              height: "28vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 800px)" : {
                width: "45vw"
              }

            }}
          >
            <Typography
              variant="h6"
              sx={{
                color:"white",
                textAlignt: "center",
                fontSize: "7.2rem"
              }}
            >
              {seconds}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontFamily: "'Lexend Exa', sans-serif"
            }}
          >
            seconds
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
