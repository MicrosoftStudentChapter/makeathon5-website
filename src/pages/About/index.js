import React from 'react'
import styles from './styles/about.module.css'

import backg from './assets/header.png'
import { margin, padding, width } from '@mui/system'

export const About = () => {
  const data = {
    "bgImage" : {
      image: backg,
      content: ['lorem']
    }
  }
  return (
    <div className={styles.main} style={
        {
          // height: '100%',
          fontFamily: 'Lexend Exa, sans-serif',
          // backgroundImage: `url(${backg})`,
          backgroundColor:'#72d7be',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          // backgroundBlendMode: 'color-burn',
          height: '100%'
        }
      }>
        <div className={styles.imageContainer}>
          <div style={{
          backgroundImage: `url(${backg})`,
          backgroundRepeatX: 'repeat',
          backgroundRepeatY: 'no-repeat',
          backgroundPositionX:'center',
          backgroundSize: 'contain',
          backgroundBlendMode: 'color-burn',
          height:'100%',
          }}>
          </div>
        </div>
        <div className={styles.flexMainContainer}>
          <aboutCircle className={styles.flexAbout}>
            <div className={styles.aboutHeading}>About</div>
            <p className={styles.aboutText}>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          </aboutCircle>
          <div className={styles.flexInnerContainer}>
            <circleRight className={styles.right} style={{marginTop:'0'}}><div className={styles.inner}>100k+</div></circleRight>
            <circleLeft className={styles.left}><div className={styles.inner}>150+</div></circleLeft>
            <circleRight className={styles.right}><div className={styles.inner}>500+</div></circleRight>
          </div>
        </div>
      </div>
  )
}

