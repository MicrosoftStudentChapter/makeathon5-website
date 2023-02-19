// import React, { useState } from "react";

import styles from './sponsor.module.css';

import Data from './data.json'
import React from 'react'
import { Grid } from '@mui/material';
import { Container, style } from '@mui/system';
import SponsorCard from '../../components/Sponsors/SponsorCard';

export default function Sponsors() {
    return (

        <>                    <center>


            <div className={styles.sponsors}>
                <Container>
                    <span className={styles.heading}>Our Partners</span>

                    <div className={styles.sponsors_section}>
                        <span className={styles.subheading}>Title Sponsors</span>

                        <Grid container spacing={2} className={styles.grid_justify}>
                            {Data["data"]["title"].map((item) => (

                                <Grid item xs={12} lg={5} md={6} >
                                    <SponsorCard src={item.src} alt={item.name} />
                                </Grid>

                            )
                            )}
                        </Grid>

                    </div>

                    <div className={styles.sponsors_section}>
                        <span className={styles.subheading}>Power Sponsors</span><br><br></br></br>

                        <Grid container spacing={2} className={styles.grid_justify}>
                            {Data["data"]["power"].map((item) => (

                                <Grid item xs={12} lg={3} md={6} >
                                    <SponsorCard src={item.src} alt={item.name} />

                                </Grid>

                            )
                            )}
                        </Grid>
                    </div>

                    <div className={styles.sponsors_section}>
                        <span className={styles.subheading}>Associate Sponsors</span>

                        <Grid container spacing={2} className={styles.grid_justify}>
                            {Data["data"]["associate"].slice(0, -2).map((item) => (

                                <Grid item xs={12} lg={2} md={6} >
                                    <SponsorCard src={item.src} alt={item.name} />

                                </Grid>

                            )
                            )}

                            {Data["data"]["associate"].slice(-2).map((item) => (

                                <Grid item xs={12} lg={2} md={4} className={styles.grid_justify}>
                                    <SponsorCard src={item.src} alt={item.name} />

                                </Grid>

                            )
                            )}
                        </Grid>


                    </div>

                </Container>
            </div>
        
        </center>

        </>
    )
}
