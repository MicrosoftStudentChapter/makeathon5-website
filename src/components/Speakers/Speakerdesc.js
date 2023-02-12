import React from 'react'
import { Card } from '@mui/material';
import { Translate } from '@mui/icons-material';


function Speakerdesc(props) {
    return (
        <Card
            sx={{
                borderRadius: 2,
                position: "absolute",
                display: `${props.see? "": "none"}`,
                zIndex: 1,
                opacity: `${props.see?1:0}`, 
                background: "rgba(255,207,156,1)",
                height: "300px",
                width: "400px",
                transform: `Translate(${props.move}, 0)`,
                transition: "opacity 0.2s",
            }} 
        >  
        <h1>hi kids</h1>
        </Card>
    )
}

export default Speakerdesc
