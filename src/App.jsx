import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import './App.css';
import { useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';

const App = () => {
  const fsRef = useRef(null);
  const elemRef = useRef(null);

  useEffect(() => {
    const fs = fsRef.current;
    const elem = elemRef.current;

    const tl = gsap.timeline();
    tl.to(fs, {
      height: 0,
      duration: 2,
      ease: Expo.easeInOut,
    })
      .to(elem, {
        height: 0,
        duration: 2.5,
        delay: -2,
        ease: Expo.easeInOut,
      })
  }, []);
  
  return (
  <div>
    <div className="bg-[#06031a]">
      <Navbar></Navbar>
      <div id="main">
      <div id="fs" ref={fsRef}></div>
      <div id="elem" ref={elemRef}></div>
      <Home></Home>
      </div>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  </div>
  );
};

export default App;