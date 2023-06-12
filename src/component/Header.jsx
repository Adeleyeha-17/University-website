import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [navMenu, setNavMenu] = useState(false);
  const mobileScreen = window.innerWidth <= 768;

  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const transition = {
    type: "spring",
    damping: 15,
    stiffness: 1000,
  };

  return (
    <div className="header">
      <nav>
        <img src="logo.png" alt="" id="header-logo" />

        {(mobileScreen && !navMenu) || !mobileScreen ? (
          <div>
            {mobileScreen && (
              <img
                src="menu.png"
                alt=""
                className="nav-bar"
                onClick={() => setNavMenu(true)}
              />
            )}
            {!mobileScreen && (
              <motion.ul
                id="nav-link"
                transition={transition}
              >
                <li>HOME</li>
                <li>ABOUT</li>
                <li>COURSES</li>
                <li>BLOG</li>
                <li>CONTACT</li>
              </motion.ul>
            )}
          </div>
        ) : (
          <AnimatePresence>
            {navMenu && (
              <motion.ul
                id="nav-link"
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
                transition={transition}
              >
                <img
                  src="close.png"
                  alt=""
                  className="close-btn"
                  onClick={() => setNavMenu(false)}
                />
                <li>HOME</li>
                <li>ABOUT</li>
                <li>COURSES</li>
                <li>BLOG</li>
                <li>CONTACT</li>
              </motion.ul>
            )}
          </AnimatePresence>
        )}
      </nav>

      <div id="text-box">
        <h1>{`World's Biggest University`}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit?
          Sunt vel quibusdam cupiditate sint blanditiis? Asperiores assumenda
          optio repellat, quos eaque saepe illum dolor, incidunt debitis
          accusantium ipsa inventore?
        </p>
        <div id="box-btn">
          <a href="#">Visit to know more</a>
        </div>
      </div>
    </div>
  );
};
