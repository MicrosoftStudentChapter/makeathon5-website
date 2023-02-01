import React from "react";
import styles from "./Styles/speakers.module.css";
import Card from "./speakercard";
import { display } from "@mui/system";

import { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";

function Speakers() {
    const [index1, setIndex1] = useState(1);
    const [index2, setIndex2] = useState(1);
    const [index3, setIndex3] = useState(1);
    const [index4, setIndex4] = useState(1);
    const [index5, setIndex5] = useState(1);
    
    function shownone() {
        console.log('hi1')
        setIndex1(1)
        setIndex2(1)
        setIndex3(1)
        setIndex4(1)
        setIndex5(1)
    }
    function showone() {
        console.log('hi1')
        setIndex1(1)
        setIndex2(0)
        setIndex3(0)
        setIndex4(0)
        setIndex5(0)
    }
    function showtwo() {
        console.log('hi2')
        setIndex1(0)
        setIndex2(1)
        setIndex3(0)
        setIndex4(0)
        setIndex5(0)
    }
    function showthree() {
        console.log('hi3')
        setIndex1(0)
        setIndex2(0)
        setIndex3(1)
        setIndex4(0)
        setIndex5(0)
    }
    function showfour() {
        console.log('hi4')
        setIndex1(0)
        setIndex2(0)
        setIndex3(0)
        setIndex4(1)
        setIndex5(0)
    }
    function showfive() {
        console.log('hi5')
        setIndex1(0)
        setIndex2(0)
        setIndex3(0)
        setIndex4(0)
        setIndex5(1)
    }
    const cardivstyle1 = {
        transform: "Translate(0,0%)",
        zIndex:2,
    };
    const cardivstyle2 = {
        transform: "Translate(0,25%)",
        zIndex:3,
    };
    const cardivstyle3 = {
        transform: "Translate(0,50%)",
        zIndex:4,
    };
    const cardivstyle4 = {
        transform: "Translate(0,25%)",
        zIndex:3,
    };
    const cardivstyle5 = {
        transform: "Translate(0,0%)",
        zIndex:2,
    };
    
    return (
        <div className={styles.speakerspage}>
            <div className={styles.speakerspagewrapper}>
                <h1 className={styles.speakersheader}>SPEAKERS</h1>
                {/* <div className={styles.speakercard}>

                </div> */}
                <div className={styles.cardwrap}>
                    <div style={cardivstyle1} className={styles.carddiv} onMouseOver={showone} onMouseLeave={shownone}>
                        <Card value="0%" zvalue="2" opaque={index1} />
                    </div>
                    <div style={cardivstyle2} className={styles.carddiv} onMouseOver={showtwo} onMouseLeave={shownone}>
                        <Card value="0%" zvalue="3" opaque={index2} />
                    </div>

                    <div style={cardivstyle3} className={styles.carddiv} onMouseOver={showthree} onMouseLeave={shownone}>
                        <Card value="0%" zvalue="4" opaque={index3} />
                    </div>
                    <div style={cardivstyle4} className={styles.carddiv} onMouseOver={showfour} onMouseLeave={shownone}>
                        <Card value="0%" zvalue="3" opaque={index4} />
                    </div>
                    <div style={cardivstyle5} className={styles.carddiv} onMouseOver={showfive} onMouseLeave={shownone}>
                        <Card value="0%" zvalue="2" opaque={index5} />   
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Speakers;
