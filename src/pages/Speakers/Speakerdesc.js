import React from 'react'
import { Card } from '@mui/material';
import { Translate } from '@mui/icons-material';
import styles from "./Styles/speakers.module.css";
import data from "./speaker.json"
console.log(data)
function Speakerdesc(props) {
    return (
        <Card
            sx={{
                borderRadius: 2,
                padding: "1px 10px",
                position: "absolute",
                display: `${props.see? "": "none"}`,
                zIndex: 1,
                opacity: `${props.see?1:0}`, 
                background: "rgba(255,207,156,1)",
                height: "260px",
                width: "400px",
                transform: `Translate(${props.move}, -10%)`,
                transition: "opacity 0.2s",
            }} 
        >  
        <div className={styles.descheader}>
            <h1 >{data[props.spk].date}</h1>
            <p className={styles.descsubhead}><b>{data[props.spk].description}</b></p>
        </div>
        <div className={styles.descpara}>
            <p>{data[props.spk].writeup}</p>
        </div>
        </Card>
    )
}

export default Speakerdesc
