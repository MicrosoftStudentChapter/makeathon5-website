import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import data from "./data.json";
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
    <ParentBox>
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
              <div className={styles.title}>Bug Collector</div>
              <div className={styles.pic}>
                <img src="https://rafaelavlucas.github.io/assets/images/img-1.jpeg" />
              </div>
              <div className={styles.desc}>
                Elijah has collected bugs since they were six years old and now
                has many dozen bugs but none in their pants.
              </div>
            </article>
            <div className={styles.actions}>
              <button className={styles.btn}>
                <span>like</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"
                />
              </button>
              <button className={styles.btn}>
                <span>trade</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>@nd Best Hack</h2>
              <div className={styles.title}>Ant Collector</div>
              <div className={styles.pic}>
                <img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
              </div>
              <div className={styles.desc}>
                Morgan has collected ants since they were six years old and now
                has many dozen ants but none in their pants.
              </div>
            </article>
            <div className={styles.actions}>
              <button className={styles.btn}>
                <span>like</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"
                />
              </button>
              <button className={styles.btn}>
                <span>trade</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>3rd Best Hack</h2>
              <div className={styles.title}>Fly Collector</div>
              <div className={styles.pic}>
                <img src="https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" />
              </div>
              <div className={styles.desc}>
                Adrian has collected flies since they were six years old and now
                has many dozen flies but none in their pants.
              </div>
            </article>
            <div className={styles.actions}>
              <button className={styles.btn}>
                <span>like</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"
                />
              </button>
              <button className={styles.btn}>
                <span>trade</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>3rd Best Hack</h2>
              <div className={styles.title}>Fly Collector</div>
              <div className={styles.pic}>
                <img src="https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" />
              </div>
              <div className={styles.desc}>
                Adrian has collected flies since they were six years old and now
                has many dozen flies but none in their pants.
              </div>
            </article>
            <div className={styles.actions}>
              <button className={styles.btn}>
                <span>like</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"
                />
              </button>
              <button className={styles.btn}>
                <span>trade</span>
                <img
                  className={styles.icon}
                  src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </Box>
    </ParentBox>
  );
};
