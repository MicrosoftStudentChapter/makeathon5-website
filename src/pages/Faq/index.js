import React, {useState} from "react";
import styles from './faq.module.css';
import Question from './Question'

import Data from './faqdata.json'

export const Faq = () => {
  return (
    <div className={styles.main}>
    
        <h1 className={styles.heading}>F.A.Q's</h1>

        <div className={styles.wrapper}>
          <div className={styles.box1}>

            {Data["data"].map((item) => (
              <div>
                <Question ques={item.question} ans={item.answer}/>
                <br></br>
              </div>
            )
            )}
          </div>
          <div className={styles.box2}>
            {Data["data"].map((item) => (
              <div>
                <Question ques={item.question} ans={item.answer}/>
                <br></br>
              </div>
            )
            )}

          </div>
        </div>
        
    </div>
  )
};

