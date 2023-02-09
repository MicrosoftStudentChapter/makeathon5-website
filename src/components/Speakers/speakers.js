import React from "react";
import styles from "./Styles/speakers.module.css";
import SpeakerCard from "./speakercard";
import { display } from "@mui/system";

import { useState } from "react";
import data from "./speaker.json";

function Speakers() {
    return (
        <div className={styles.speakerspage}>
            <div className={styles.pageheader}>
                <h1>SPEAKERS</h1>
            </div>
            <div className={styles.speakerswrapper}>
                <div className={styles.photoswrapper}>
                    <SpeakerCard pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                    displace="-25%"
                    naam="Jason Derulo"
                     />
                    <SpeakerCard pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675797998/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.42.33_kb1xs7-removebg-preview_wtiskc.png" 
                    displace="0%"
                    naam="Network chuck"
                    />
                    <SpeakerCard pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794854/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.44.47_g9pcfz-removebg-preview_vpmhjn.png" 
                    displace="25%"
                    naam="Dave Grohl"
                    />
                    <SpeakerCard pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675797928/Makeathon%205%20website/Speakers/IMG_4351-removebg-preview_dhi8pg.png"
                    displace="0%"
                    naam="komedian"
                    />
                    <SpeakerCard pic="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                    displace="-25%"
                    naam="Jason Derulo"
                     />
                </div>
            </div>
        </div>
    );
}

export default Speakers;
