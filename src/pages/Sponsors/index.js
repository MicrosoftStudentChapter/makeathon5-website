import styles from "./sponsor.module.css";

import Data from "./data.json";
import React from "react";
import { Grid } from "@mui/material";
import { Container, style } from "@mui/system";
import SponsorCard from "../../components/Sponsors/SponsorCard";

export default function Sponsors() {
    return (
        <>
            <center>
                <div className={styles.sponsors}>
                    <div className={styles.sponsorsOverlay}>
                        <Container
                        sx={{
                            width:"100vw",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        >
                            <span className={styles.heading}> Previous Sponsors</span>

                            <div className={styles.titleSponsors}>
                                <span className={styles.subheading}>
                                    Title Sponsors
                                </span>

                                <Grid
                                    container
                                    spacing={1}
                                    className={styles.grid_justify}
                                    sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems: "center"
                                    }}
                                >
                                    {Data["data"]["title"].map((item) => (
                                        <Grid item xs={12} lg={5} md={6}
                                        sx={{
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems: "center",
                                            background:"rgba(255,255,255,1)",
                                            width:"100px",
                                            height:"175px",
                                            margin:"10px",
                                            scale: "0.9"
                                        }}
                                        >
                                            <a href={item.link}>
                                            <SponsorCard
                                                src={item.src}
                                                alt={item.name}
                                                bacc={item.bg}
                                                scl={item.scl}
                                                title={true}
                                                spcname={item.spcname}
                                            />
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>

                            <div className={styles.sponsors_section}>
                                <span className={styles.subheading}>
                                    Power Sponsors
                                </span>

                                <Grid
                                    container
                                    spacing={2}
                                    className={styles.grid_justify}
                                    sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems: "center"
                                    }}
                                >
                                    {Data["data"]["power"].map((item) => (
                                        <Grid item xs={12} lg={3} md={6}
                                        // sx={{
                                        //     display:"flex",
                                        //     justifyContent:"center",
                                        //     alignItems: "center",
                                        //     background:"rgba(255,255,255,1)",
                                        //     width:"300px",
                                        //     height:"300px",
                                        //     margin:"1px"
                                        // }}
                                        >
                                            <a href={item.link}>
                                            <SponsorCard
                                                src={item.src}
                                                alt={item.name}
                                                bacc={item.bg}
                                            />
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>

                            <div className={styles.sponsors_section}>
                                <span className={styles.subheading}>
                                    Associate Sponsors
                                </span>

                                <Grid
                                    container
                                    spacing={2}
                                    className={styles.grid_justify}
                                    sx={{
                                        
                                    }}
                                >
                                    {Data["data"]["associate"].map((item) => (
                                        <Grid item xs={12} lg={2} md={6}
                                        sx={{
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems: "center",
                                            // background:"rgba(255,255,255,1)",
                                            // width:"300px",
                                            // height:"300px",
                                            // margin:"1px"
                                        }}
                                        >
                                            <a href={item.link}>
                                            <SponsorCard
                                                src={item.src}
                                                alt={item.name}
                                                bacc={item.bg}
                                            />
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                            <div className={styles.sponsors_section}>
                                <span className={styles.subheading}>
                                    Other Sponsors
                                </span>

                                <Grid
                                    container
                                    spacing={2}
                                    className={styles.grid_justify}
                                    sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems: "center"
                                    }}
                                >
                                    {Data["data"]["OtherSponsors"].map((item) => (
                                        <Grid item xs={12} lg={2} md={6}
                                        // sx={{
                                        //     display:"flex",
                                        //     justifyContent:"center",
                                        //     alignItems: "center",
                                        //     background:"rgba(255,255,255,1)",
                                        //     width:"300px",
                                        //     height:"300px",
                                        //     margin:"1px"
                                        // }}
                                        >
                                            <a href={item.link}>
                                            <SponsorCard
                                                src={item.src}
                                                alt={item.name}
                                                bacc={item.bg}
                                            />
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                            <div className={styles.sponsors_section}>
                                <span className={styles.subheading}>
                                    Community Outreach
                                </span>

                                <Grid
                                    container
                                    spacing={2}
                                    className={styles.grid_justify}
                                    sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems: "center"
                                    }}
                                >
                                    {Data["data"]["CommunityOutreach"].map((item) => (
                                        <Grid item xs={12} lg={2} md={5}
                                        
                                        >
                                            <a href={item.link}>
                                            <SponsorCard
                                                src={item.src}
                                                alt={item.name}
                                                bacc={item.bg}
                                            />
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </div>
            </center>
        </>
    );
}
