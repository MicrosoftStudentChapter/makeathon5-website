import React from 'react'
import styles from './footer.module.css';
import King from './assets/King.png';
import Mail from './assets/mail.png';
import Location from './assets/location.png';
import Phone from './assets/phone.png';

import LD from './assets/linkedin.png'
import Yt from './assets/yt.png'
import Ig from './assets/insta.png'
import Fb from './assets/fb.png'

// import Mail from './assets/mail.png'

export const Footer = () => {
  return (
    <>
    <div className={styles.line}>
`     `
    </div>
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <img className={styles.sheild} src="https://res.cloudinary.com/damjdcgak/image/upload/v1675798256/Makeathon%205%20website/Chu%20Logo/mlsc_shield_new_2_vq7q49.png"/>

            <div className={styles.text}>
                <h2 className={styles.legacy}>Legacy of</h2>
                <h2 className={styles.innovations}>INNOVATIONS</h2>
                <div className={styles.socials}>
                <a href='https://www.linkedin.com/company/microsoft-learn-student-chapter'>
                <img className={styles.imager} src={LD}/> 
                </a>
                <a href='https://www.youtube.com/c/microsoftlearnstudentchaptertietpatiala'>
                <img className={styles.imager} src={Yt}/> 
                </a>
                <a href='https://www.facebook.com/mlsctiet'>
                <img className={styles.imager} src={Fb}/> 
                </a>
                <a href='https://www.instagram.com/mlsc_tiet/'>
                <img className={styles.imager} src={Ig}/> 

                </a>
                </div>
            </div>
        </div>

        <div className={styles.right}>

          <h2 className={styles.contact}>CONTACT US</h2>
          <div className={styles.boxer}>
            <div className={styles.rightL}>

              <a href='mailto: msc@thapar.edu' target='_blank'>
                <div className={styles.bleh}>
                  <img className={styles.image} src={Mail}/> <text className={styles.side}>msc@thapar.edu</text>
                </div>
              </a>

              <a href='https://goo.gl/maps/bMSfh8uoYCVuLEjD6' target='_blank'> 
                <div className={styles.bleh}>
                  <img className={styles.image} src={Location}/> <text className={styles.side}>TIET Patiala</text>
                </div>
              </a>

            </div>
            
              <div className={styles.rightR}>
              <a href='tel:+918872331055' target='_blank'>
                <div className={styles.bleh}>
                  <img className={styles.image} src={Phone}/> <text className={styles.side}>+91 8872331055</text>
                </div>
              </a>

              <div className={styles.bleh}>
                <img className={styles.image} src={King}/> <text className={styles.side}>Adamay Mann</text><br></br> <text className={styles.gen}>(General Secretary)</text>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
};