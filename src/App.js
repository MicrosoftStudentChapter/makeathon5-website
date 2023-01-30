import Landing from './pages/Landing';
import './index.css';
import {Navbar} from './components/Navbar'
// import {black} from '@mui/material/colors';

function App() {
  return (
    <>
      <Navbar />
      <section id="landing">
        <Landing />
      </section>
    </>
  );
}

export default App;
