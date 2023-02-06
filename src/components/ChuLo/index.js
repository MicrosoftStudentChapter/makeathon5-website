import React from 'react';
import styles from './chulo.module.css';

import { Shakle } from './Shakle/index.js';
// import { Withlove } from './Withlove';

import Marquee from "react-fast-marquee";

import Stack from '@mui/material/Stack';

import data from "./data.json"

export const ChuLo = (image) => {
  return (
    <div className={styles.wrapper}>
      {/* <Withlove/> */}
        <div className={styles.slider}>
         
        <Marquee  pauseOnHover = "true" gradientWidth={0} speed={45}>
            <Stack direction="row" >
                {data["secretaries"].map((index) => (
                    <Shakle image={index.img} />
                ))}
                {data["heads"].map((index) => (
                    <Shakle image={index.img} />
                ))}
                {data["coordinators"].map((index) => (
                    <Shakle image={index.img} />
                ))}
            </Stack>
        </Marquee>
        
        </div>
        
    </div>
  )
}
