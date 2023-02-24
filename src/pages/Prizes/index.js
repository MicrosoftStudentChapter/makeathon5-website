import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import styles from "./prizes.module.css";
const ParentBox = styled(Box)({
  width: "100vw",
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
              <span className={styles.bold}>₹ 20,000/- Cash</span>
                <br />
                Official MLSC Merch
                <br />
                Devkits from Ikarus3D
                <br />
                CodeChef Pro Subscription
                <br />
                and more!
              </div>
            </article>
            <div className={styles.actions}>
              <a className={styles.btn} href="https://makeathon5.devfolio.co/prizes" target="blank">
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </a>
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
              <span className={styles.bold}> ₹ 15,000/- Cash</span>
                <br />
                Official MLSC Merch
                <br />
                Devkits from Ikarus3D
                <br />
                CodeChef Pro Subscription
                <br />
                and more!
              </div>
            </article>
            <div className={styles.actions}>
              <a className={styles.btn}href="https://makeathon5.devfolio.co/prizes" target="blank">
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </a>
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
                <span className={styles.bold}>₹ 10,000/- Cash</span>
                <br />
                Official MLSC Merch
                <br />
                Devkits from Ikarus3D
                <br />
                CodeChef Pro Subscription
                <br />
                and more!
              </div>
            </article>
            <div className={styles.actions}>
              <a className={styles.btn} href="https://makeathon5.devfolio.co/prizes" target="blank">
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </a>
            </div>
          </div>  
        </div>
      </Box>
    </ParentBox>
  );
};
