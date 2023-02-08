import React, { useState, useEffect } from "react";
// import HorizontalScroll from "react-scroll-horizontal";
import style from  "./timeline.module.scss"
import {ScrollCarousel} from '../../components/ScrollCarousel';
import {TimelineEvent} from '../../components/TimelineEvent';
import styles from './timeline.module.scss'
import background from './assets/wall1.svg'

const data = {
  "content" : [
    {
      date: "19 Feb",
      position: "up",
      content: "Speaker Session by Shridhar Mankar on XYZ"
    },
    {
      date: "20 Feb",
      position: "down",
      content: "Workshop on XYZ XYZ ABC by Ajinkya Lohakre from WERR"
    },
    {
      date: "21 Feb",
      position: "up",
      content: "Session on YTEWEWEWEWEEWEWEWe by wetwerwyeWEWEWEWEEWewe"
    },
    {
      date: "22 Feb",
      position: "down",
      content: "Technical Session on YZERWWEWEWE by Pritish Sehzpaul from sdsdsdsd"
    },
    {
      date: "23 Feb",
      position: "up",
      content: "Session on YTEWEWEWEWEEWEWEWe by wetwerwyeWEWEWEWEEWewe"
    },
    {
      date: "24 Feb",
      position: "down",
      content: "Technical Talk by the Father of OpenSource RICHARD STALLMAN"
    },
    {
      date: "25 Feb 10:30",
      position: "up",
      content: "Opening Ceremony for Makeathon5"
    },
    {
      date: "25 Feb 12:00",
      position: "down",
      content: "Hacking Period Begins"
    },
    {
      date: "25 Feb 15:30",
      position: "up",
      content: "Checkpoint 0 : Idea Submission on Devfolio"
    },
    {
      date: "26 Feb 02:00",
      position: "down",
      content: "Checkpoint 2 : Mentoring Round 2"
    },
    {
      date: "26 Feb 14:00",
      position: "up",
      content: "Pitching Round"
    }
  ]
}

export const Timeline = () => {
  return(
      <ScrollCarousel>
        <div
          className={styles.box}
        >
          {data["content"].map((item)=>{ 
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