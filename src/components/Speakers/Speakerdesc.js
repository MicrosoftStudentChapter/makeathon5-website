import React from 'react'
import { Card } from '@mui/material';
import { Translate } from '@mui/icons-material';
import data from "./speaker.json"
console.log(data)
function Speakerdesc(props) {
    return (
        <Card
            sx={{
                borderRadius: 2,
                padding: "2px",
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
        <h1>{data[props.spk].date}</h1>
        <p>{data[props.spk].description}</p>

        </Card>
    )
}

export default Speakerdesc
