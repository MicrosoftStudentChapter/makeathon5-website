import React, { useState } from "react";
import "./Loader.css";
import { motion } from "framer-motion";

export const Loader = () => {
  const [date, setDate] = useState(25);
  const dateCurrent = new Date();
  const timeLeft = date - dateCurrent.getDate();
  const nums = timeLeft.toString().split("");

  return (
    <motion.div
      initial={{ opacity: 0.0 }}
      animate={{ opacity: 1.0 }}
      exit={{ opacity: 0.0 }}
      transition={{ duration: 1 }}
    >
      <div className="background">
        <div className="container">
          <div className="loader-box">
            <div className="shine"></div>
            <div className="loader">
              <span className="char c1 g1">{nums[0]}</span>
              <span className="char c2u g1">{nums[1]}</span>
              {/* <span className="char c3 g1"> </span> */}
              <span className="char c4 g2">D</span>
              <span className="char c5 g2">A</span>
              <span className="char c6 g2">Y</span>
              <span className="char c7 g2">S</span>
              <span className="char c8 g2"> </span>
              <span className="char c9 g3">L</span>
              <span className="char c10 g3">E</span>
              <span className="char c11 g3">F</span>
              <span className="char c12 g3">T</span>
              <span className="char c13 g3"> </span>
            </div>
            <div className="water-box"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
