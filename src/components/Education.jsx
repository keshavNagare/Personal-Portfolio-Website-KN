import React from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div>
      <div className="text-center md:py-[25px]">
        <p className={`${styles.sectionHeadText}`}>Education</p>{" "}
      </div>

      {/* Card Part */}

    
    </div>
  );
};

export default SectionWrapper(Education, "education");
