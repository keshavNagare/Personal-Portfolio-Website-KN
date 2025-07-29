import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import KNlogo from "../assets/KNkn.png";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="main-nav flex items-center justify-center">
      <nav
        className={`${styles.bg} ${styles.dark}
        px-4 flex items-center justify-evenly py-4 fixed top-2 z-20 rounded-[50px] backdrop-blur-[11px] border-bcolor border-bwidth w-[80%]`}
      >
        <div className="w-full flex justify-between item-center max-w-7xl mx-auto gap-5 md:gap-11">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={KNlogo} alt="logo" className="w-11 h-11 object-contain" />
            <p className="text-white xs:text-nowrap text-[22px] xs:text-[25px] font-title font-[900] cursor-pointer flex lg:flex-row md:flex-col sm:flex-col">
              Keshav Nagare
            </p>
          </Link>

          <ul className="list-none w-[60%] font-NavTitle hidden md:flex flex-row justify-around items-center">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link
                  className="Link font-NavTitle font-[400]"
                  to={`/${nav.id}`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          

          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="max-w-6 h-6 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

        </div>
      </nav>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } ${styles.bg} ${styles.dark} p-6 backdrop-blur-[11px] border-bcolor border-bwidth fixed top-[6rem] min-w-[80%] z-10 rounded-xl m-[auto] md:hidden` }
          >
           <div className="w-[100%]">
           <ul className="list-none flex justify-end items-start flex-col gap-4 md:hidden">
           {navLinks.map((nav) => (
              <li className="w-[100%]" key={nav.id}>
                <Link onClick={() => setToggle(!toggle)}
                  className="Link font-NavTitle font-[800] inline-flex justify-center w-[100%] text-center"
                  to={`/${nav.id}`}
                >
                  {nav.title}
                  <hr className="border-neutral-600/60 backdrop-blur-inherited"></hr> 
                </Link>
              </li>
            ))}
            </ul>
           </div>
          </div>
    </div>
  );
};

export default Navbar;