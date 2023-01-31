import Landing from './pages/Landing';
import './index.css';
import './App.css';
import {Navbar} from './components/Navbar'
import {Faq} from './pages/Faq'

import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
import { useRef } from 'react';
// import {black} from '@mui/material/colors';

function App() {
  const ref = useRef(null)
  let options = {
    smooth : true
  }
  return (
    <LocomotiveScrollProvider
      option={options}
      containerRef={ref}
    >
      <Navbar />
      <main
        data-scroll-conatiner
        ref={ref}
      >
        <section 
          id="landing" 
          data-scroll
          data-scroll-section
        >
          <Landing />
        </section>

        <section 
          id="faq" 
          data-scroll
          data-scroll-section
        >
          <Faq />
        </section>
      </main>
    </LocomotiveScrollProvider>  
  );
}

export default App;
