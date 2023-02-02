import React from 'react';
import styles from './shakle.module.css';
import Avatar from '@mui/material/Avatar';

export function Shakle(prop) {
    return (
        <div className={styles.wrapper}>        
            <Avatar sx={{
                width: '4rem',
                height:'4rem',
                borderRadius:'50%',
                borderStyle:'solid',
                borderColor:'white',
                margin:'0 0.7rem'      

            }} alt="Remy Sharp" src={prop.image} />
        </div>
    );
  }