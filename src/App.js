import Landing from './pages/Landing';
import './index.css';
import './App.css';
import {Navbar} from './components/Navbar'
import {Faq} from './pages/Faq'

import { useRef } from 'react';

// import {black} from '@mui/material/colors';

function App() {
  const ref = useRef()
  return (
    <>
      <Navbar />
      <section
        id="landing" 
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
    </>
  );
}

export default App;
