import Landing from './pages/Landing';
import './index.css';
import {Navbar} from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import { useRef } from 'react';
// import {black} from '@mui/material/colors';

function App() {
  const ref = useRef(null)
  let options = {
    smooth : true
  }
  return (
    <>
    {/* <LocomotiveScroll */}
    {/*   option={options} */}
    {/* > */}
      <Navbar />
      <main
        data-scroll-conatiner
        ref={ref}
      >
        <section 
          id="landing"
        
        >
          <Landing />
        </section>
      </main>
    </>
  );
}

export default App;
