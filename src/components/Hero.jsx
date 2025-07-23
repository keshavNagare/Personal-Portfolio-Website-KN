import React from "react";
import { motion } from "framer-motion";
import { FaRegFileLines } from "react-icons/fa6";
import { styles } from "../style";
import { SectionWrapper } from '../hoc';
import { Link } from "react-router-dom";
import YoungProg from '../assets/youngprog1.png';
import Insta from '../assets/instagramlogo.png';
import Linkdin from '../assets/linkedinlogo.png';
import Github from '../assets/githublogo.png';
import Email from '../assets/e1.png'
const Hero = () => {
  return (
    
    <section className="py-[1px] xs:relative w-full mx-auto xs:pb-[16px] pt-[60px] lg:py-[80px]   bg-bottom">
      <div class="flex justify-content-center align-items-center flex-col lg:flex-row flex-col p-[0px]  ">
      <div className="prog max-w-[100%] pt-[1px] xs:pt-[1px] md:top-[128px] px-[10px] md:pt-[50px]  lg:pl-[50px] flex justify-content-center align-items-center flex-col lg:flex-row flex-col pt-[50px]">
        <div className="bgmain colbg">
          <img
            className="bouncing hidden lg:block"
            src={YoungProg}
            alt="programmer"
          />
        </div>
        <img
            className="bouncing self-center w-[340px] h-[362px]  sm:w-[311px] sm:h-[336px] md:w-[325px] md:h-[450px] lg:hidden "
            src={YoungProg}
            alt="programmer"
        />
        <div className="pl-0 xs:w-full xl:w-[60%] sm:pl-[8%]">
          <h1 className={`${styles.heroHeadText} text-white flex flex-col `}>
            {" "}
            Hi , I'm{" "}
            <span className="tcolr text-transparent">Keshav Nagare</span>
          </h1>
          <p className={`${styles.sectionSubText}`}>Full stack Developer</p>

          <div className="resume mt-[28px]">
            <div className="flex flex-col gap-2 sm:flex-row">
            
              <button className=" border-[1px] rounded-[8px] p-[10px] xs:btnsize flex justify-center items-center"><FaRegFileLines className="mr-[2px]" size={20}/>Resume</button>
            
            <Link
                  className="font-NavTitle font-[400]"
                  to={`/contact`}
            >
              <button className="w-full border-[1px] rounded-[8px] p-[10px] xs:btnsize resume bg-[#07bae2d9] hover:bg-[#01bde7b2]">Contact me</button>
            </Link>

            </div>
          </div>

          <div className="medialinks flex mt-[42px] gap-[14px]">
            <a href="https://www.instagram.com/keshav.3539/" target="_blank"><img className="w-[52px]" src={Insta} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/keshav-nagare/" target="_blank"><img className="w-[52px]" src={Linkdin}alt="linkedin" /></a>
            <a href="https://github.com/keshavNagare/" target="_blank"><img className="w-[52px]" src={Github} alt="github"/></a>
            <a href="mailto:keshavnagare102@gmail.com"><img className="w-[52px] contrast-[120%]" src={Email} alt="email" /></a>
          </div>
          
        </div>
      </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero,"home");;