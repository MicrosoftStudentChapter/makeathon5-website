import Landing from './pages/Landing';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/system';
// import {black} from '@mui/material/colors';

function App() {
  const theme = createTheme({
    backgrounds: {
      navbarBack: "#000"
    }
  })
  return (
    <>
      <section id="landing">
        <Landing />
      </section>
    </>
  );
}

export default App;
