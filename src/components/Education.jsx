import React from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

import clg from "../assets/PREC.png";
import Jclg from "../assets/SSCC.jpg";
import shala from "../assets/Ncamp.jpeg";


const Education = () => {
  return (
    <div>
      <div className="text-center md:py-[25px]">
        <p className={`${styles.sectionHeadText}`}>Education</p>{" "}
      </div>

      <div className="w-full px-4 py-4">
        <div className="flex flex-col md:flex-row  rounded-2xl shadow-md overflow-hidden border border-gray-600 ">
          {/* College Logo */}
          <div className="md:w-1/3 w-full flex justify-center items-center bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(45,45,45,0.9)] p-4 backdrop-blur-[11px]">
            <img
              src={clg}
              alt="PREC"
              className="w-full h-full object-contain filter [filter:brightness(1)_contrast(1.2)_drop-shadow(1px_1px_2px_white)_saturate(1.4)] rounded-[18px]"
            />
          </div>

          {/* College Info */}
          <div className="md:w-2/3 w-full flex flex-col justify-start gap-[4px] px-6 py-8 bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(45,45,45,0.9)]">
            <h2 className="leading-[38px] text-[1.4rem] sm:text-[1.6rem] md:text-[1.85rem] mb-[18px] font-semibold text-gray-800 dark:text-white">
              Pravara Rural Engineering College, Loni
            </h2>
            <h4 className="leading-[32px] text-[1.25rem] sm:text-[1.4rem] font-[500] md:text-[1.55rem] text-gray-600 dark:text-gray-300">
              B.E. in Information Technology
              <br />
            </h4>
            <p className="leading-[24px] text-[1.1rem] md:text-[1.1rem] font-[500] text-gray-600 dark:text-gray-300">
              Savitribai Phule Pune University
            </p>
            <p className="leading-[24px]text-sm md:text-base text-gray-600 dark:text-gray-300">Academic Year: 2022 - 2026</p>
            <p className="leading-[24px]text-sm md:text-base text-gray-600 dark:text-gray-300">
              Grade : 9.05 GPA
            </p>
            <p className="leading-[24px] text-[1.1rem] font-[600] md:text-[1.1rem] text-gray-600 dark:text-gray-300 pt-6 text-green-600">
             <ul className="list-disc pl-5"><li className="text-green-600">Pursuing</li></ul>
            </p>
          </div>
        </div>
      </div>

    {/* JTSB */}

      <div className="w-full px-4 py-4">
        <div className="flex flex-col md:flex-row  rounded-2xl shadow-md overflow-hidden border border-gray-600 ">
          {/* College Logo */}
          <div className="md:w-1/3 w-full flex justify-center items-center bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(45,45,45,0.9)] p-4 backdrop-blur-[11px]">
            <img
              src={Jclg}
              alt="JTS"
              className="w-full h-full object-contain filter [filter:brightness(1)_contrast(1.2)_drop-shadow(1px_1px_2px_white)_saturate(1.4)] rounded-[18px]"
            />
          </div>

          {/* College Info */}
          <div className="md:w-2/3 w-full flex flex-col justify-start gap-[4px] px-6 py-8 bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(45,45,45,0.9)]">
            <h2 className="leading-[38px] text-[1.4rem] sm:text-[1.6rem] md:text-[1.85rem] mb-[18px] font-semibold text-gray-800 dark:text-white">
            J.T.S.Highschool & Junior College, Belapur 
            </h2>
            <h4 className="leading-[32px] text-[1.25rem] sm:text-[1.4rem] font-[500] md:text-[1.55rem] text-gray-600 dark:text-gray-300">
            Higher Secondary Schooling (HSC)
              <br />
            </h4>
            <p className="leading-[24px] text-[1.1rem] md:text-[1.1rem] font-[500] text-gray-600 dark:text-gray-300">
            Maharashtra State Board
            </p>
            <p className="leading-[24px]text-sm md:text-base text-gray-600 dark:text-gray-300">Academic Year: 2020 - 2022</p>
            <p className="leading-[24px]text-sm md:text-base text-gray-600 dark:text-gray-300">
            Grade : 63.33 %
            </p>
            <p className="leading-[24px] text-[1.1rem] font-[600] md:text-[1.1rem] text-gray-600 dark:text-gray-300 pt-6 text-green-600">
             <ul className="list-disc pl-5"><li className="text-yellow-400">Completed</li></ul>
            </p>
          </div>
        </div>
      </div>

    {/* NESU */}
    
    <div className="w-full px-4 py-4">
        <div className="flex flex-col md:flex-row  rounded-2xl shadow-md overflow-hidden border border-gray-600 ">
          {/* College Logo */}
          <div className="md:w-1/3 w-full flex justify-center items-center bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(45,45,45,0.9)] p-4 backdrop-blur-[11px]">
            <img
              src={shala}
              alt="JTS"
              className="w-full h-full object-contain filter [filter:brightness(1)_contrast(1.2)_drop-shadow(1px_1px_2px_white)_saturate(1.4)] rounded-[18px]"
            />
          </div>

          {/* College Info */}
          <div className="md:w-2/3 w-full flex flex-col justify-start gap-[4px] px-6 py-8 bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(45,45,45,0.9)]">
            <h2 className="leading-[38px] text-[1.4rem] sm:text-[1.6rem] md:text-[1.85rem] mb-[18px] font-semibold text-gray-800 dark:text-white">
            New English School, Ukkalgaon
            </h2>
            <h4 className="leading-[32px] text-[1.25rem] sm:text-[1.4rem] font-[500] md:text-[1.55rem] text-gray-600 dark:text-gray-300">
            Secondary Schooling (SSC)
              <br />
            </h4>
            <p className="leading-[24px] text-[1.1rem] md:text-[1.1rem] font-[500] text-gray-600 dark:text-gray-300">
            Maharashtra State Board
            </p>
            <p className="leading-[24px]text-sm md:text-base text-gray-600 dark:text-gray-300">Academic Year: 2018 - 2020 </p>
            <p className="leading-[24px]text-sm md:text-base text-gray-600 dark:text-gray-300">
            Grade : 83.60 %
            </p>
            <p className="leading-[24px] text-[1.1rem] font-[600] md:text-[1.1rem] text-gray-600 dark:text-gray-300 pt-6 text-green-600">
             <ul className="list-disc pl-5"><li className="text-yellow-400">Completed</li></ul>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Education, "education");
