import React from 'react'
import { easeInOut, motion } from "framer-motion"
import styles from './sponcercard.module.css';
import Box from '@mui/material/Box';

export default function SponsorCard({ src, alt = "", bacc= "rgba(255,255,255,0)", scl = "", title, spcname}) {
    if(title){
    return (
        <>
            <motion.div
                // whileHover={{ scale: 1.2 ,  }}
                // whileTap={{ scale: 0.9 }}
                // style={{ transition: easeInOut }} 
                viewport={{ once: true }}

                className={styles.tcardhoverbox}
            >
                <center>
                    <Box
                    sx={{
                        background: `${bacc}`,
                        zIndex: "3",
                        scale: `${scl}`,
                        
                        "@media(max-width: 900px)": {
                            scale: "0.9",
                          },
                    }}
                    >
                    <img className={styles.sponcercard} src={src} alt={alt} />
                    </Box>
                    <h3>`${spcname}`</h3>
                </center>
            </motion.div>
        </>
    
    )
    }
    else{
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
                            zIndex: "3",
                            scale: `${scl}`,
                            
                            "@media(max-width: 900px)": {
                                scale: "0.9",
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
    
}
