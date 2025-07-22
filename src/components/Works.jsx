import React from 'react'
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <>
      <div className="text-center md:py-[25px]"><p className={`${styles.sectionHeadText}`}>Work</p> </div>
    </>
  )
}

export default SectionWrapper(Works,"works");