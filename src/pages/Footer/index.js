import React from 'react'
import styles from './footer.module.css';
import King from './assets/King.png';
import Mail from './assets/mail.png';
import Location from './assets/location.png';
import Phone from './assets/phone.png';
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
            </div>
        </div>

        <div className={styles.right}>

          <h2 className={styles.contact}>CONTACT US</h2>
          <div className={styles.bleh}>
            <img className={styles.image} src={Mail}/> <text className={styles.side}>msc@thapar.edu</text>
          </div>

          <div className={styles.bleh}>
            <img className={styles.image} src={Location}/> <text className={styles.side}>TIET Patiala -147004</text>
          </div>

          <div className={styles.bleh}>
            <img className={styles.image} src={Phone}/> <text className={styles.side}>+91 8872331055</text>
          </div>

          <div className={styles.bleh}>
            <img className={styles.image} src={King}/> <text className={styles.side}>Adamay Mann</text>
          </div>

        </div>
        
      </div>
    </div>
    </>
  )
};