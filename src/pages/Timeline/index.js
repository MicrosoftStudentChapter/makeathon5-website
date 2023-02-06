import React, { useState, useEffect } from "react";
// import HorizontalScroll from "react-scroll-horizontal";
import style from  "./timeline.module.scss"
import {ScrollCarousel} from '../../components/ScrollCarousel';
import {TimelineEvent} from '../../components/TimelineEvent';
import styles from './timeline.module.scss'

export const Timeline = () => {
  return(
      <ScrollCarousel>
        <div
          className={styles.box}
          style={{backgroundColor: "transparent"}}
        >
          <TimelineEvent
            position="up"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="down"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="up"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="down"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
        </div>
        <div
          className={styles.box}
          style={{backgroundColor: "transparent"}}
        >
          <TimelineEvent
            position="up"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="down"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="down"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="up"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />

        </div>
        <div
          className={styles.box}
          style={{backgroundColor: "transparent"}}
        >
          <TimelineEvent
            position="up"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="down"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="up"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />
          <TimelineEvent
            position="down"
            content="qwqwgquwguqwguqgwuqwguqgwuqgwuqgwuqgwuqgwugquwgqwguqwg"
          />

        </div>
      </ScrollCarousel>
  )
}
