import Landing from "./pages/Landing";
import "./index.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ChuLo } from "./components/ChuLo";
import { Faq } from "./pages/Faq";
import { Loader } from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import { Footer } from "./pages/Footer";
import Speakers from "./components/Speakers/speakers.js";

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

          <section id="faq">
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
