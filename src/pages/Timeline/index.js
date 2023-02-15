import React, { useState, useEffect } from "react";
// import HorizontalScroll from "react-scroll-horizontal";
import style from  "./timeline.module.scss"
import {ScrollCarousel} from '../../components/ScrollCarousel';
import {TimelineEvent} from '../../components/TimelineEvent';
import styles from './timeline.module.scss'
import background from './assets/wall1.svg'

const data = {
  "content" : {
    "dystopia":[
      {
        date: "19 Feb, 6:00 PM",
        position: "up",
        content: "ONLINE session by Shridhar Manker, the founder of Youtube channel 5 minute engineering"
      },
      {
        date: "20 Feb",
        position: "down",
        content: "OFFLINE Cybersecurity session by Ajinkya Lohakare, CTO and founder of Ditto Security in LP101"
      },
      {
        date: "21 Feb",
        position: "up",
        content: "Session from Postman"
      },
      {
        date: "22 Feb",
        position: "down",
        content: "OFFLINE session on Three.Js by Pritish Sehzpaul, Head of Technology at Ikarus 3D in LP101"
      },
      {
        date: "23 Feb",
        position: "up",
        content: "Session from Three Way studio"
      },
      {
        date: "24 Feb",
        position: "down",
        content: "Technical Talk by the Father of OpenSource RICHARD STALLMAN"
      }, 
    ],
    "utopia" : [
      {
        date: "25 Feb 10:30",
        position: "up",
        content: "Opening Ceremony and Speaker Session by Hackathon Expert"
      },
      {
        date: "25 Feb 14:00",
        position: "down",
        content: "Hacking Period Begins"
      },
      {
        date: "25 Feb 18:30",
        position: "up",
        content: "Entry Ends For Offline Participants"
      },
      {
        date: "25 Feb 19:00-22:00",
        position: "down",
        content: "Checkpoint 1: Mentoring Round 1"
      },
      {
        date: "26 Feb 02:00-5:00",
        position: "up",
        content: "Checkpoint 2 : Mentoring Round 2"
      },
      {
        date: "26 Feb 11:00-1:00",
        position: "down",
        content: "Checkpoint 3 : Idea Submission"
      },
      {
        date: "26 Feb 02:00-5:00",
        position: "up",
        content: "Hack Ends!"
      },
      {
        date: "26 Feb 16:00",
        position: "down",
        content: "Pitching Round Begins"
      },
      {
        date: "26 Feb 19:00",
        position: "up",
        content: "Awards Cermony"
      }
    ]
  }
}

export const Timeline = () => {
  return(
      <ScrollCarousel>
        <div
          className={styles.box}
        >
          {data["content"]["dystopia"].map((item)=>{ 
            return(
              <TimelineEvent
                position={item.position}
                content={item.content}
                date={item.date}
              />
            )
          })}
        </div>
        <div
          className={styles.box2}
        >
          {data["content"]["utopia"].map((item)=>{ 
            return(
              <TimelineEvent
                position={item.position}
                content={item.content}
                date={item.date}
              />
            )
          })}
        </div>
      </ScrollCarousel>
  )
}
