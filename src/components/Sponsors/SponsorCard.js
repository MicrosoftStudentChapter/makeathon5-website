import React from 'react'
import { easeInOut, motion } from "framer-motion"
import styles from './sponcercard.module.css';

export default function SponsorCard({ src, alt = "" }) {
    return (
        <>
            <motion.div
                // whileHover={{ scale: 1.2 ,  }}
                // whileTap={{ scale: 0.9 }}
                // style={{ transition: easeInOut }} 
                viewport={{ once: true }}

                className={styles.cardhoverbox}
            >
                <center>
                    <img className={styles.sponcercard} src={src} alt={alt} />
                </center>
            </motion.div>
        </>
    )
}
