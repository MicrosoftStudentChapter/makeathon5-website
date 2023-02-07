import React, { useState, useEffect } from "react";
// import HorizontalScroll from "react-scroll-horizontal";
import style from  "./timeline.module.scss"
import {ScrollCarousel} from '../../components/ScrollCarousel';
import {TimelineEvent} from '../../components/TimelineEvent';
import styles from './timeline.module.scss'

const data = {
  "content" : [
    {
      date: "19 Feb",
      position: "up",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    },
    {
      date: "20 Feb",
      position: "down",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    },
    {
      date: "21 Feb",
      position: "up",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    },
    {
      date: "22 Feb",
      position: "down",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    },
    {
      date: "23 Feb",
      position: "up",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    },
    {
      date: "24 Feb",
      position: "down",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    },
    {
      date: "25 Feb",
      position: "up",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    },
    {
      date: "26 Feb",
      position: "down",
      content: "qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
    }
  ]
}

export const Timeline = () => {
  return(
      <ScrollCarousel>
        <div
          className={styles.box}
          style={{backgroundColor: "transparent"}}
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
