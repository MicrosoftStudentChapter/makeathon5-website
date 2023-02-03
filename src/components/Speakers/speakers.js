import React from "react";
import styles from "./Styles/speakers.module.css";
import SpeakerCard from "./speakercard";
import { display } from "@mui/system";

import { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";
import Speakerdesc from "./Speakerdesc";

function Speakers() {
    const [index1, setIndex1] = useState(1);
    const [index2, setIndex2] = useState(1);
    const [index3, setIndex3] = useState(1);
    const [index4, setIndex4] = useState(1);
    const [index5, setIndex5] = useState(1);

    const [card1, setCard1] = useState(0);
    const [card2, setCard2] = useState(0);
    const [card3, setCard3] = useState(0);
    const [card4, setCard4] = useState(0);
    const [card5, setCard5] = useState(0);
    
    const [disp1, setDisp1] = useState("none");
    const [disp2, setDisp2] = useState("none");
    const [disp3, setDisp3] = useState("none");
    const [disp4, setDisp4] = useState("none");
    const [disp5, setDisp5] = useState("none");
    
    function shownone() {
        console.log('hi1')
        setIndex1(1)
        setIndex2(1)
        setIndex3(1)
        setIndex4(1)
        setIndex5(1)
        setCard1(0)
        setCard2(0)
        setCard3(0)
        setCard4(0)
        setCard5(0)
        setDisp1("none")
        setDisp2("none")
        setDisp3("none")
        setDisp4("none")
        setDisp5("none")
    }
    function showone() {
        console.log('hi1')
        setIndex1(1)
        setIndex2(0)
        setIndex3(0)
        setIndex4(0)
        setIndex5(0)
        setCard1(1)
        setCard2(0)
        setCard3(0)
        setCard4(0)
        setCard5(0)
        setDisp1("")
        setDisp2("none")
        setDisp3("none")
        setDisp4("none")
        setDisp5("none")
    }
    function showtwo() {
        console.log('hi2')
        setIndex1(0)
        setIndex2(1)
        setIndex3(0)
        setIndex4(0)
        setIndex5(0)
        setCard1(0)
        setCard2(1)
        setCard3(0)
        setCard4(0)
        setCard5(0)
        setDisp1("none")
        setDisp2("")
        setDisp3("none")
        setDisp4("none")
        setDisp5("none")
    }
    function showthree() {
        console.log('hi3')
        setIndex1(0)
        setIndex2(0)
        setIndex3(1)
        setIndex4(0)
        setIndex5(0)
        setCard1(0)
        setCard2(0)
        setCard3(1)
        setCard4(0)
        setCard5(0)
        setDisp1("none")
        setDisp2("none")
        setDisp3("")
        setDisp4("none")
        setDisp5("none")
    }
    function showfour() {
        console.log('hi4')
        setIndex1(0)
        setIndex2(0)
        setIndex3(0)
        setIndex4(1)
        setIndex5(0)
        setCard1(0)
        setCard2(0)
        setCard3(0)
        setCard4(1)
        setCard5(0)
        setDisp1("none")
        setDisp2("none")
        setDisp3("none")
        setDisp4("")
        setDisp5("none")
    }
    function showfive() {
        console.log('hi5')
        setIndex1(0)
        setIndex2(0)
        setIndex3(0)
        setIndex4(0)
        setIndex5(1)
        setCard1(0)
        setCard2(0)
        setCard3(0)
        setCard4(0)
        setCard5(1)
        setDisp1("none")
        setDisp2("none")
        setDisp3("none")
        setDisp4("none")
        setDisp5("")
    }
    const cardivstyle1 = {
        transform: "Translate(0,0%)",
        // zIndex:2,
        display: "flex",
        width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle2 = {
        transform: "Translate(0,25%)",
        // zIndex:3,
        display: "flex",
        width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle3 = {
        transform: "Translate(0,50%)",
        // zIndex:4,
        display: "flex",
        width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle4 = {
        transform: "Translate(0,25%)",
        // zIndex:3,
        display: "flex",
        width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle5 = {
        transform: "Translate(0,0%)",
        // zIndex:2,
        display: "flex",
        width: "100%",
        transition: "all 0.5s",
    };
    
    return (
        <div className={styles.speakerspage}>
            <div className={styles.speakerspagewrapper}>
                <h1 className={styles.speakersheader}>SPEAKERS</h1>
                {/* <div className={styles.speakercard}>

                </div> */}
                <div className={styles.cardwrap}>
                    <div style={cardivstyle1} className={styles.carddiv} onMouseOver={showone} onMouseLeave={shownone}>
                        <SpeakerCard value="0%" zvalue="2" opaque={index1} />
                        <Speakerdesc see={card1} move="60%" present={disp1}/>
                    </div>
                    <div style={cardivstyle2} className={styles.carddiv} onMouseOver={showtwo} onMouseLeave={shownone}>
                        <SpeakerCard value="0%" zvalue="2" opaque={index2} />
                        <Speakerdesc see={card2} move="60%" present={disp2}/>
                    </div>

                    <div style={cardivstyle3} className={styles.carddiv} onMouseOver={showthree} onMouseLeave={shownone}>
                        <SpeakerCard value="0%" zvalue="2" opaque={index3} />
                        <Speakerdesc see={card3} move="60%" present={disp3}/>
                    </div>
                    <div style={cardivstyle4} className={styles.carddiv} onMouseOver={showfour} onMouseLeave={shownone}>
                        <SpeakerCard value="0%" zvalue="2" opaque={index4} />
                        <Speakerdesc see={card4} move="-105%" present={disp4}/>
                    </div>
                    <div style={cardivstyle5} className={styles.carddiv} onMouseOver={showfive} onMouseLeave={shownone}>
                        <SpeakerCard value="0%" zvalue="2" opaque={index5} />   
                        <Speakerdesc see={card5} move="-105%" present={disp5}/>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Speakers;
