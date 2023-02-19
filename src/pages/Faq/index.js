import React, {useState} from "react";
import styles from './faq.module.css';
import Question from './Question'

import Data from './faqdata.json'

export const Faq = () => {
  // const [count,setCount] = useState(0)

  return (
    <div className={styles.main}>
    
        <h1 className={styles.heading}>Frequently asked questions</h1>

        <div className={styles.wrapper}>
          <div  className={styles.box1}>

            {Data["data1"].map((item) => (
              <div className={styles.card}>
                <Question ques={item.question} ans={item.answer} exp={item.open}  />
                <br></br>
              </div>
            )
            )}
          </div>
          <div className={styles.box2}>
            {Data["data2"].map((item) => (
              <div>
                <Question ques={item.question} ans={item.answer}  exp={item.open}/>
                <br></br>
              </div>
            )
            )}

          </div>
        </div>
        
    </div>
  )
};

