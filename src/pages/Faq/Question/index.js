import React ,{useEffect, useState} from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StylesContext } from "@mui/styles";

import styles from './question.module.css'

export default function Question({ques, ans}) {

  const [sign,setSign] = useState(true)

  return (
    <div className={styles.wrapper}>
      <Accordion sx={{backgroundColor:'#ffffff5A',color:'white', backdropFilter:'blur(10px)'}}>
        <AccordionSummary
        onClick={() => {setSign(!sign)}}
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{fontFamily:'Lexend Exa',fontStyle:'normal',fontWeight:'700',fontSize:'1rem'}}>{sign ? "+"  : "-"} {ques}</Typography>
        </AccordionSummary>
        <AccordionDetails
        onClose = {() => {setSign(true); console.log("ok")}}
        >
          <Typography sx={{fontFamily:'Lexend Exa',fontStyle:'normal',fontSize:'1rem'}}>
            {ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}