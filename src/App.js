import Landing from "./pages/Landing";
import "./index.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ChuLo } from "./components/ChuLo";
import { Faq } from "./pages/Faq";
import { Loader } from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import { Timeline } from "./pages/Timeline";
import { Footer } from "./pages/Footer";
import Speakers from "./pages/Speakers/speakers.js";
import { Tracks } from "./pages/Tracks";
import Sponsors from "./pages/Sponsors";
import {Prizes} from "./pages/Prizes"
import { SponsorTracks } from "./pages/SponsorTracks";
import Aboutnew  from "./pages/Aboutnew/index"
// import {black} from '@mui/material/colors';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);


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
          <section id="aboutnew">
            <Aboutnew />
          </section>
          <section id="sponsors">
             <Sponsors />
          </section>
          <section id="faqs">
            <Faq />
          </section>
          <section id="chulo">
            <ChuLo />
          </section>         
          <section id="footer">
            <Footer />
          </section>
        </>
      )}
    </>

  );
}

export default App;
