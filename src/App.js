import Landing from './pages/Landing';
import './index.css';
import {Navbar} from './components/Navbar'
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
          data-scroll-speed="4"
          data-scroll-section
        >
          <Landing />
        </section>
        <section 
          id="landing2" 
          data-scroll-section
        >
          <Landing />
        </section>
      </main>
    </LocomotiveScrollProvider>  
  );
}

export default App;
