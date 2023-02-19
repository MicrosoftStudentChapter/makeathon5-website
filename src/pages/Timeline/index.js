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
        date: "18 Feb, 6:00 PM",
        position: "up",
        content: "API-101 : Online session by Mr Ali Mustufa, Senior Developer Advocate at Postman"
      },
      {
        date: "19 Feb, 6:00 PM",
        position: "down",
        content: "Data Science And Blockchain : Online session By Mr Shridhar Mankar, founder of the YouTube channel 5 Minutes Engineering"
      },
      {
        date: "21 Feb, 6:00 PM",
        position: "up",
        content: "Workshop On Three.JS: Offline Workshop By Mr Pritish Shezpaul, CTO at Ikarus 3D"
      },
      {
        date: "22 Feb, 6:00 PM",
        position: "down",
        content: "Cyber Arms Race and Blockchain Future: Offline Session By Ajinkya Lohakare, CTO & Founder of Ditto Security"
      },
      {
        date: "23 Feb, 11:00AM - 1:00PM",
        position: "up",
        content: "WEB3 Simplified: Offline Session By Pranshul Saxena and Utkarsh Shrivastava, Co-Founders of Threeway Studio"
      },
      {
        date: "24 Feb",
        position: "down",
        content: "Free Software and your Freedom: Online Session by Richard Stallman the Father of OpenSource"
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
        
      </ScrollCarousel>
  )
}

const extra = () => {
  return(
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
  )
}
