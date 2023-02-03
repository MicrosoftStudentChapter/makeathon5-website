import React from 'react';
import styles from './shakle.module.css';
import Avatar from '@mui/material/Avatar';


import { Filter } from '@mui/icons-material';

export function Shakle(prop) {
    return (
        <div className={styles.wrapper}>     
            <div className={styles.wrapperInner}>   
            <Avatar sx={{
                width: '4rem',
                height:'4rem',
                borderRadius:'50%',
                borderStyle:'solid',
                borderColor:'white',
                margin:'0 0.7rem',

                
                "&:hover": {
                    opacity: 1,
                    transition: "opacity 250ms ease-in-out",
                    Filter:"grayscale(0%)",
                    WebkitFilter:"grayscale(0%)",
                    borderColor:'#FFCF9C'
                },

                opacity: 0.7,
                Filter:"grayscale(100%)",
                WebkitFilter:"grayscale(100%)"               

            }} alt="Card Photo" src={prop.image} />

            </div>
        </div>
    );
  }