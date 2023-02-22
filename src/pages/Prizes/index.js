import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import styles from "./prizes.module.css";
const ParentBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

const TitleText = styled(Typography)({
  fontSize: "6rem",
  paddingTop: "1rem",
  fontWeight: "bold",
  color: "white",
});

const Prizecard1 = styled(Box)({
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
        
        <div>
          <a className={styles.card} href="#!">
            <div
              className={styles.front}
              style={{
                backgroundImage: "url(//source.unsplash.com/300x401)",
              }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
            </div>
            <div className={styles.back}>
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className={styles.button}>Click Here</button>
              </div>
            </div>
          </a>
          <a className={styles.card} href="#!">
            <div
              className={styles.front}
              style={{
                backgroundImage: "url(//source.unsplash.com/300x402)",
              }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
            </div>
            <div className={styles.back}>
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className={styles.button}>Click Here</button>
              </div>
            </div>
          </a>
          <a className={styles.card} href="#!">
            <div
              className={styles.front}
              style={{
                backgroundImage: "url(//source.unsplash.com/300x403)",
              }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
            </div>
            <div className={styles.back}>
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className={styles.button}>Click Here</button>
              </div>
            </div>
          </a>
          <a className={styles.card} href="#!">
            <div
              className={styles.front}
              style={{
                backgroundImage: "url(//source.unsplash.com/300x404)",
              }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
            </div>
            <div className={styles.back}>
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className={styles.button}>Click Here</button>
              </div>
            </div>
          </a>
          <a className={styles.card} href="#!">
            <div
              className={styles.front}
              style={{
                backgroundImage: "url(//source.unsplash.com/300x405)",
              }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
            </div>
            <div className={styles.back}>
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className={styles.button}>Click Here</button>
              </div>
            </div>
          </a>
          <a className={styles.card} href="#!">
            <div
              className={styles.front}
              style={{
                backgroundImage: "url(//source.unsplash.com/300x406)",
              }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
            </div>
            <div className={styles.back}>
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className={styles.button}>Click Here</button>
              </div>
            </div>
          </a>
        </div>
      </Box>
    </ParentBox>
  );
};
