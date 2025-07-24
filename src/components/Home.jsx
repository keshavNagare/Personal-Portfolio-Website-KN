import Skills from './Skills';
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Works from './Works'
import { SectionWrapper } from '../hoc';
import React from "react";
import { color } from "framer-motion";
import Education from './Education';

const Home = () =>{

    return (
      <>
      <Hero />
      <About />
      <Skills /> 
      {/* <Works /> */}
      <Education />
      <Contact />
    </>
      );
}

export default SectionWrapper(Home,"home");
