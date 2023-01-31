import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StylesContext } from "@mui/styles";

import styles from './question.module.css'

export default function Question({ques, ans}) {
  return (
    <div className={styles.wrapper}>
      <Accordion sx={{backgroundColor:'#ffffff5A',color:'white', backdropFilter:'blur(10px)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>{ques}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}