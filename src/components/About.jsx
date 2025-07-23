import React from "react";
import { styles } from "../style";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import KMNImage from '../assets/keshav_about.jpeg'

const About = () => {
  return (
    <div className="About pb-[60px]">
      <div className="text-center pt-[25px] pb-[65px]">
        <p className={`${styles.sectionHeadText}`}>About</p>
      </div>

      <div className='flex flex-col xl:flex-col overflow-hidden'>
      <div className="flex justify-content-center align-items-center flex-col lg:flex-row flex-col-reverse p-[0px] md:p-[20px] ">
          {/* <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto h-[350px]"
          >
        <div className="h-full">
            <div className="kimg w-[100%] flex justify-center block  pb-[28px]">
              <img src="src/assets/keshav_about.jpeg" alt="" />
            </div>
        </div>
          </motion.div> */}

        <div className="desc mt-[2rem] w-[100%] flex flex-col gap-[25px] sm:px-[25px] lg:m-[0] xl:m-[0]">
        
          <p className="text-justify font-[monospace] text-[18px] lg:text-[21px]">
            I'm a Self-motivated information technology engineer with excellent
            problem- solving skills and ability to perform well in a team. I am
            a Full-Stack developer based in Pune, India. I am an Information
            Technology undergraduate from SPPU. I am very passionate about
            improving my coding skills & developing applications & websites. I
            build WebApps and Websites using MERN Stack. Working for myself to
            improve my skills. Love to build Full-Stack Websites.
          </p>
          {/* <button className="btnsize mt-[2rem] flex justify-center items-center lg:block ">
            Certificates
          </button> */}
        </div>

        <div className=" flex items-center justify-center sm:flex lg:flex-row justify-center">
   
          <div className="kimg h-[100%]">
          <img  className="h-[100%]" src={KMNImage} alt="" />
          </div>
        </div>
      </div>


      <div className="cerbtn ml-[50px] mt-5 ml-1 md:mt-0">
        <button className="btnsize flex justify-center items-center block ">
          Certificates
        </button>
      </div>
    </div>
    </div>
  );
};

export default SectionWrapper(About,"about");