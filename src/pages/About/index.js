import React from 'react'
import styles from './styles/about.module.css'

import backg from './assets/header.png'

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
          fontFamily: 'Lexend Exa, sans-serif',
          // backgroundImage: `url(${backg})`,
          backgroundColor:'#72d7be',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          // backgroundBlendMode: 'color-burn',
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
            <p className={styles.aboutText}>At the Microsoft Learn Student Chapter, we believe that young people with the right technology have the potential to revolutionise the world as we know it today. And through several events held over the years, we have made fair progress. Microsoft Learn Student Chapter was institutionalised to provide students with a systematic platform to develop technical skills and team spirit. Our vision is to create a community of computer enthusiasts with a development spirit.</p>
          </aboutCircle>
          <div className={styles.flexInnerContainer}>
            <circleRight className={styles.right} style={{marginTop:'0'}}><div className={styles.inner}>100+ Projects</div></circleRight>
            <circleLeft className={styles.left}><div className={styles.inner}>1000+ Applications</div></circleLeft>
            <circleRight className={styles.right}><div className={styles.inner}>10+ Workshops</div></circleRight>
          </div>
        </div>
      </div>
  )
}

