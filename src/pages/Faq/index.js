import React from 'react'
import styles from './faq.module.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F7FAFC',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container 
      rowSpacing={3}
      columnSpacing={{ xs: 5, sm: 5, md: 5 }}
      spacing={5}>

        <Grid sx={{
          marginLeft:"5rem",
        }} item xs={4}>
          <Item className={styles.text} sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",
            
          }}>+ What is Makeathon?</Item>
        </Grid>

        <Grid sx={{
          marginLeft:"7rem",
        }} item xs={4}>
          <Item className={styles.text} sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",

          }}>+ Who all can participate?</Item>
        </Grid>

        <Grid sx={{
          marginLeft:"5rem",
        }} item xs={4}>
          <Item  className={styles.text}sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",
          }}>+ What if I’ve never been to a 
   hackathon before?</Item>
        </Grid>

        <Grid  sx={{
          marginLeft:"7rem",
        }}item xs={4}>
          <Item className={styles.text} sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",
          }}>+ What if I’ve never been to a 
   hackathon before?</Item>
        </Grid>

        <Grid sx={{
          marginLeft:"5rem",
        }} item xs={4}>
          <Item className={styles.text} sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",
            
          }}>+ What is Makeathon?</Item>
        </Grid>

        <Grid sx={{
          marginLeft:"7rem",
        }} item xs={4}>
          <Item className={styles.text} sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",

          }}>+ Who all can participate?</Item>
        </Grid>

        <Grid sx={{
          marginLeft:"5rem",
        }} item xs={4}>
          <Item  className={styles.text}sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",
          }}>+ What if I’ve never been to a 
   hackathon before?</Item>
        </Grid>

        <Grid  sx={{
          marginLeft:"7rem",
        }}item xs={4}>
          <Item className={styles.text} sx={{
            textAlign:"left",
            backgroundColor:"#4a183c",
            boxShadow:"2px 2px black",
            color:"white",
          }}>+ What if I’ve never been to a 
   hackathon before?</Item>
        </Grid>

        

      </Grid>
    </Box>
  );
}

export const Faq = () => {
  return (
    <div>
    <div className={styles.home}>
      <div className={styles.heading}>
        <h1 className={styles.header}>F.A.Q's</h1>
      </div>
    </div>
    
    <BasicGrid></BasicGrid>
    </div>
  )
};
