import React from "react";
import { ComputersCanvas } from "./canvas";
import { div } from "framer-motion/client";
import { styles } from "../style";
import { SectionWrapper } from '../hoc';
import {slideIn} from '../utils/motion';
import {motion} from 'framer-motion';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png' ;
import JS from '../assets/js.png' ;
import REACT from '../assets/react.png' ; 
import NODEJS from '../assets/node.png' ; 
import EXPRESSJS from '../assets/express.png' ; 
import MONGODB from '../assets/mongo.png' ; 
import CPP from '../assets/c++.png' ; 
import GIT from '../assets/git.png' ; 
import GITHUB from '../assets/github.png' ; 
import POSTMAN from '../assets/postman.png' ; 
import VSCODE from '../assets/vs.png' ; 


const Skills = () => {
  return (

 <> <div className="text-center md:py-[25px]"><p className={`${styles.sectionHeadText}`}>Skills</p> </div> 

<div className='flex flex-col xl:flex-row gap-10 overflow-hidden'>

<motion.div 
  variants={slideIn('left',"tween",0.2,1)}
  className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]" 
>
  <div className="h-full"> 
    <div className="h-full contrast-[1.4] drop-shadow-[0px_0px_4px_white]">
      <ComputersCanvas />
    </div>
  </div>
</motion.div>


<motion.div
variants={slideIn("right", "tween", 0.2, 1)}
  className='xl:flex-1 xl:h-auto md:h-[550px] xs:mt-4 md:h-[350px]'
>
<div className="flex flex-wrap justify-center gap-6 mt-6">
    <div className="grid gap-[4px] grid-cols-4 justify-items-center align-content-center col-span-2 p-[20px] md:pl-[18px] relative top-[-141px] lg:top-[0px]">
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={HTML} alt="HTML" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">HTML</p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={CSS} alt="CSS" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">CSS</p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={JS} alt="JS" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">JS</p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px] reactroll" src={REACT} alt="REACT" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">REACT</p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={NODEJS} alt="NODEJS" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">
              NODE JS
            </p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={EXPRESSJS} alt="EXPRESSJS" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">
              EXPRESSJS
            </p>
          </div>
          <div className="logo sm:p-[10px] sm:p-[10px]">
            <img className="p-[8px]" src={MONGODB} alt="MONGODB" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">
              MONGODB
            </p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={CPP} alt="CPP" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">C++</p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={GIT} alt="GIT" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">GIT</p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={GITHUB} alt="GITHUB" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">GITHUB</p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={POSTMAN} alt="POSTMAN" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">
              POSTMAN
            </p>
          </div>
          <div className="logo sm:p-[10px]">
            <img className="p-[8px]" src={VSCODE} alt="VS CODE" />
            <p className="text-[11px] sm:text-[14px] md:text-[11px] lg:text-[16px] font-[600] py-[8px]">
              VS CODE
            </p>
          </div>
        </div>
        </div>
</motion.div>

</div> 
</>
  );
};

export default SectionWrapper(Skills,"skills");