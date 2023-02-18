import React from "react";
import styles from "./Styles/speakers.module.css";
import SpeakerCard from "./speakercard";
import { display } from "@mui/system";

import { useState } from "react";
import data from "./speaker.json";
import Speakerdesc from "./Speakerdesc";
import Swipeelement from "./Swipeelement";

function Speakers() {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);
    const [visible4, setVisible4] = useState(true);
    const [visible5, setVisible5] = useState(true);
    const [visible7, setVisible7] = useState(true);
    const [visible8, setVisible8] = useState(true);
    const [visible9, setVisible9] = useState(true);
    const [visible10, setVisible10] = useState(true);
    const [visible11, setVisible11] = useState(true);
    const [card1, showcard1]=useState(false);
    const [card2, showcard2]=useState(false);
    const [card3, showcard3]=useState(false);
    const [card4, showcard4]=useState(false);
    const [card5, showcard5]=useState(false);
    const [card7, showcard7]=useState(false);
    const [card8, showcard8]=useState(false);
    const [card9, showcard9]=useState(false);
    const [card10, showcard10]=useState(false);
    const [card11, showcard11]=useState(false);
    function shownone() {
        setVisible1(true);
        setVisible2(true);
        setVisible3(true);
        setVisible4(true);
        setVisible5(true);
        setVisible7(true);
        setVisible8(true);
        setVisible9(true);
        setVisible10(true);
        setVisible11(true);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function showone() {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        setVisible5(false);
        setVisible7(false);
        setVisible8(false);
        setVisible9(false);
        setVisible10(false);
        setVisible11(false);
        showcard1(true);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function showtwo() {
        setVisible1(false);
        setVisible2(true);
        setVisible3(false);
        setVisible4(false);
        setVisible5(false);
        setVisible7(false);
        setVisible8(false);
        setVisible9(false);
        setVisible10(false);
        setVisible11(false);
        showcard1(false);
        showcard2(true);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function showthree() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(true);
        setVisible4(false);
        setVisible5(false);
        setVisible7(false);
        setVisible8(false);
        setVisible9(false);
        setVisible10(false);
        setVisible11(false);
        showcard1(false);
        showcard2(false);
        showcard3(true);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function showfour() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(true);
        setVisible5(false);
        setVisible7(false);
        setVisible8(false);
        setVisible9(false);
        setVisible10(false);
        setVisible11(false);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(true);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function showfive() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        setVisible5(true);
        setVisible7(false);
        setVisible8(false);
        setVisible9(false);
        setVisible10(false);
        setVisible11(false);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(true);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function showseven() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        setVisible5(false);
        setVisible7(true);
        setVisible8(false);
        setVisible9(false);
        setVisible10(false);
        setVisible11(false);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(true);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function showeight() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        setVisible5(false);
        setVisible7(false);
        setVisible8(true);
        setVisible9(false);
        setVisible10(false);
        setVisible11(false);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(true);
        showcard9(false);
        showcard10(false);
        showcard11(false);
    }
    function shownine() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        setVisible5(false);
        setVisible7(false);
        setVisible8(false);
        setVisible9(true);
        setVisible10(false);
        setVisible11(false);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(true);
        showcard10(false);
        showcard11(false);
    }
    function showten() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        setVisible5(false);
        setVisible7(false);
        setVisible8(false);
        setVisible9(false);
        setVisible10(true);
        setVisible11(false);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(true);
        showcard11(false);
    }
    function showeleven() {
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        setVisible5(false);
        setVisible7(false);
        setVisible8(false);
        setVisible9(false);
        setVisible10(false);
        setVisible11(true);
        showcard1(false);
        showcard2(false);
        showcard3(false);
        showcard4(false);
        showcard5(false);
        showcard7(false);
        showcard8(false);
        showcard9(false);
        showcard10(false);
        showcard11(true);
    }
    const cardivstyle1 = {
        transform: "Translate(40%,15%)",
        // margin: "10% 0 0% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle2 = {
        transform: "Translate(-40%,15%)",
        // margin: "10% 0 0% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle3 = {
        transform: "Translate(0,0%)",
        // margin: "10% 0 0% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle4 = {
        transform: "Translate(0,0%)",
        // margin: "10% 0 0% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle5 = {
        transform: "Translate(0,0%)",
        // margin: "10% 0 0% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle6 = {
        transform: "Translate(0,0%)",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };

    const cardivstyle7 = {
        transform: "Translate(40%,-15%)",
        // margin: "0% 0 10% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle8 = {
        transform: "Translate(-40%,-10%)",
        // margin: "0% 0 10% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle9 = {
        transform: "Translate(0,0%)",
        // margin: "0% 0 10% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle10 = {
        transform: "Translate(0,0%)",
        // margin: "0% 0 10% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle11 = {
        transform: "Translate(0,0%)",
        // margin: "0% 0 10% 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    const cardivstyle12 = {
        transform: "Translate(0,0%)",
        // margin: "20 0 0 0",
        zIndex: 2,
        display: "flex",
        // width: "100%",
        transition: "all 0.5s",
    };
    
    return (
        <>
        <div className={styles.speakerspage}>
            <div className={styles.bgoverlay}>
                <div className={styles.pageheader}>
                    <h1>SPEAKERS</h1>
                </div>
                <div className={styles.respswipe}>
                    <Swipeelement/> 
                </div>
                <div className={styles.speakerswrapper}>
                    <div className={styles.photoswrapper}>
                    <div onMouseOver={showone} onMouseLeave={shownone} style={cardivstyle1}>
                            <SpeakerCard
                                see={visible1}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1676688246/Makeathon%205%20website/Speakers/Ali_Mustufa-Shaikh-removebg-preview_t0qq3g.png"
                                naam="Ali Mustafa"
                            />
                            <Speakerdesc spk="speaker1" see={card1} move="70%"/>
                        </div>
                        <div onMouseOver={showtwo} onMouseLeave={shownone} style={cardivstyle2}>
                            <SpeakerCard
                                see={visible2}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675797998/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.42.33_kb1xs7-removebg-preview_wtiskc.png"
                                naam="Shridhar Mankar"
                            />
                            <Speakerdesc spk="speaker2" see={card2} move="-110%"/>
                        </div>
                    </div>
                    <div className={styles.photoswrapper}>
                        <div onMouseOver={showthree} onMouseLeave={shownone} style={cardivstyle3}>
                            <SpeakerCard
                                see={visible3}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                                naam="Pritish Sehzpaul"  
                            />
                            <Speakerdesc spk="speaker3" see={card3} move="70%"/>
                        </div>
                        <div onMouseOver={showfour} onMouseLeave={shownone} style={cardivstyle4}>
                            <SpeakerCard
                                see={visible4}
                                stallman="true"
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794854/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.44.47_g9pcfz-removebg-preview_vpmhjn.png"
                                naam="Richard Stallman"
                            />
                            <Speakerdesc spk="speaker4" see={card4} move="-100%"/>
                        </div>
                        <div onMouseOver={showfive} onMouseLeave={shownone} style={cardivstyle5}>
                            <SpeakerCard
                                see={visible5}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675797928/Makeathon%205%20website/Speakers/IMG_4351-removebg-preview_dhi8pg.png"
                                naam="ajinkya lohakare"
                            />
                            <Speakerdesc spk="speaker5" see={card5} move="-100%"/>
                        </div>
                        {/* <div style={cardivstyle6}>
                            <SpeakerCard
                                see={visible5}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                                naam="Jason Derulo"
                            />
                        </div> */}
                    </div>
                    <div className={styles.photoswrapper}>
                        <div onMouseOver={showseven} onMouseLeave={shownone} style={cardivstyle7}>
                            <SpeakerCard
                                onMouseOver={showone}
                                see={visible7}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1676689462/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-17_at_1.43.01_AM__1_-removebg-preview_1_clo56j.png"
                                naam="Utkarsh Shrivastava"
                            />
                            <Speakerdesc spk="speaker6" see={card7} move="70%"/>
                        </div>
                        <div onMouseOver={showeight} onMouseLeave={shownone} style={cardivstyle8}>
                            <SpeakerCard
                                see={visible8}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1676689823/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-17_at_1.43.01_AM-removebg-preview_wphim7.png"
                                naam="Prashul Saxena"
                            />
                            <Speakerdesc spk="speaker7" see={card8} move="-110%"/>
                        </div>
                        {/* 
                        <div onMouseOver={shownine} onMouseLeave={shownone} style={cardivstyle9}>
                            <SpeakerCard
                                see={visible9}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794854/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.44.47_g9pcfz-removebg-preview_vpmhjn.png"
                                naam="Dave Grohl"
                            />
                            <Speakerdesc see={card9} move="70%"/>
                        </div>
                        <div onMouseOver={showten} onMouseLeave={shownone} style={cardivstyle10}>
                            <SpeakerCard
                                see={visible10}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675797928/Makeathon%205%20website/Speakers/IMG_4351-removebg-preview_dhi8pg.png"
                                naam="komedian"
                            />
                            <Speakerdesc see={card10} move="-100%"/>
                        </div>
                        <div onMouseOver={showeleven} onMouseLeave={shownone} style={cardivstyle11}>
                            <SpeakerCard
                                see={visible11}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                                naam="Jason Derulo"
                            />
                            <Speakerdesc see={card11} move="-100%"/>
                        </div> */}
                        {/* <div style={cardivstyle12}>
                            <SpeakerCard
                                see={visible5}
                                pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                                naam="Jason Derulo"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Speakers;
