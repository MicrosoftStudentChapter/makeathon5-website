import React from 'react'
import { easeInOut, motion } from "framer-motion"
import styles from './sponcercard.module.css';
import Box from '@mui/material/Box';

export default function SponsorCard({ src, alt = "", bacc= "rgba(255,255,255,0)", scl = ""}) {
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
                    <Box
                    sx={{
                        background: `${bacc}`,
                        scale: `${scl}`,
                        "@media(max-width: 800px)": {
                            scale: "1",
                          },
                    }}
                    >
                    <img className={styles.sponcercard} src={src} alt={alt} />
                    </Box>
                </center>
            </motion.div>
        </>
    )
}
