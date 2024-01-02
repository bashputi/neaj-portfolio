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
  const textRef = useRef(null);

  useEffect(() => {
    const fs = fsRef.current;
    const elem = elemRef.current;
    const text = textRef.current;

    const tl = gsap.timeline();
    tl.to(fs, {
      height: 0,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(text, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: -1.5, 
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
      <div id="fs" ref={fsRef}>
        <div ref={textRef} className="text-center text-[#06031a] pt-56 ">
        <h1 className="inline font-bold text-4xl text-white" >NEAJ</h1>
        <h1 className="inline font-bold text-4xl text-[#9acd32]"> MORSHED</h1>
       <br />
       <br />
            <h3 className=" inline font-bold text-2xl text-white pl-32 ">is</h3>
            <h3 className=" inline font-bold text-2xl text-white"> a</h3>
            </div>
      </div>
      <div id="elem" ref={elemRef}></div>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      </div>
    
    </div>
  </div>
  );
};

export default App;