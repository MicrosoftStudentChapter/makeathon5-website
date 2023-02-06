import React,{useState,useEffect} from 'react';

import styles from './withlove.module.css';
import data from '../data.json'

export const Withlove = () => {
  const [onhover, setonhover] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text} onhover={() => {setonhover(true)}} onAbort={() => {setonhover(false)}}>
        {onhover ? "Ikshan Bhardwaj" :"Made With 💛 By MLSC"} 
      </p>
    </div>
  )
}
