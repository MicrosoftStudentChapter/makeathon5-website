import Landing from "./pages/Landing";
import "./index.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ChuLo } from "./components/ChuLo";
import { Faq } from "./pages/Faq";
import { Loader } from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import Speakers from './components/Speakers/speakers.js';
import { Timeline } from "./pages/Timeline";

// import {black} from '@mui/material/colors';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  const font = "'Lexend Exa', sans-serif";

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <section id="landing">
            <Landing />
          </section>
          <section id="timeline">
            <div
              style={{
                fontSize: "5rem",
                backgroundColor: "#450834 ",
                fontFamily: font,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color:"white",
                boxShadow: "2px 2px #000"
              }}
            >
              TIMELINE
            </div>
            <Timeline />
          </section>
          <section id="speakers">
            <Speakers />
          </section>
          <section id="faq">
            <Faq />
          </section>

          
        </>
      )}
    </>
  );
}

export default App;
