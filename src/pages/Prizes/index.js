import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import styles from "./prizes.module.css";
const ParentBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
});

const TitleText = styled(Typography)({
  fontSize: "6rem",
  paddingTop: "1rem",
  fontWeight: "bold",
  color: "white",
});

const PrizeCard = styled(Box)({
  width: "30vw",
  height: "30vh",
  backgroundColor: "#ffffff",
  backdropFilter: "blur(10px)",
});

export const Prizes = () => {
  return (
    <ParentBox className={styles.prize}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "fit-content",
        }}
      >
        <TitleText variant="h1">Prizes</TitleText>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>Best Hack</h2>
              <div className={styles.pic}>
                <img src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677078787/1_yocxfh.png" />
              </div>
              <div className={styles.desc}>
                Elijah has collected bugs since they were six years old and now
                has many dozen bugs but none in their pants.
              </div>
            </article>
            <div className={styles.actions}>
              <button className={styles.btn}>
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>2nd Best Hack</h2>
              <div className={styles.pic}>
                <img src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677078788/3_mwkuoq.png" />
              </div>
              <div className={styles.desc}>
                Morgan has collected ants since they were six years old and now
                has many dozen ants but none in their pants.
              </div>
            </article>
            <div className={styles.actions}>
              <button className={styles.btn}>
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>3rd Best Hack</h2>
              
              <div className={styles.pic}>
                <img src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677078788/2_f0hzt6.png" />
              </div>
              <div className={styles.desc}>
                Adrian has collected flies since they were six years old and now
                has many dozen flies but none in their pants.
              </div>
            </article>
            <div className={styles.actions}>
              <button className={styles.btn}>
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </button>
            </div>
          </div>  
        </div>
      </Box>
    </ParentBox>
  );
};
