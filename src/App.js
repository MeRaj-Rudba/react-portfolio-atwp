import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from 'react';
import Home from './Components/Home';



function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${toggle ? "nav-open" : ""}`}>
      <Header
        toggle={toggle}
        setToggle={setToggle}
      />
      <Home />
      <Footer />
    </div>
  );
}

/**
 * <div className={`${toggle ? "nav-open" : ""}`}>
        <Header
          toggle={toggle}
          setToggle={setToggle}
        />
        <Body/>
        <Footer />
      </div>
 */
export default App;
