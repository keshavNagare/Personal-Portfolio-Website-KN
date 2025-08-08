import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import KMNImage from "../assets/keshav_about.jpeg";

const About = () => {
  return (
    <div className="About pb-[0px] sm:pb-[60px]">
      <div className="text-center pt-[60px] pb-[65px] xs:pt-[56px] md:pt-[82px]">
        <p className={`${styles.sectionHeadText}`}>About</p>
      </div>

      <div className="flex flex-col xl:flex-col overflow-hidden">
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
              I am a highly motivated Information Technology engineer with
              strong analytical skills and a passion for innovation. I am a
              Full-Stack Developer skilled in the MERN stack. Currently pursuing
              my degree in Information Technology from SPPU, I am committed to
              enhancing my programming skills and building efficient web
              applications. My goal is continuous learning and growth, creating
              impactful solutions and designing excellent user experiences with
              modern technologies.
            </p>
            {/* <button className="btnsize mt-[2rem] flex justify-center items-center lg:block ">
            Certificates
          </button> */}
          </div>

          <div className=" flex items-center justify-center sm:flex lg:flex-row justify-center">
            <div className="kimg h-[100%]">
              <img className="h-[100%]" src={KMNImage} alt="" />
            </div>
          </div>
        </div>

        <div className="cerbtn ml-[10px] xs:ml-[18px] mt-5 ml-1 md:mt-0 md:ml-[50px]">
        <Link
                  className="font-NavTitle font-[400]"
                  to={`/certificates`}
            >
          <button className="btnsize flex justify-center items-center block ">
            Certificates
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
