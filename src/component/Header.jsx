import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
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
      <nav >
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
                <li onClick={() => navigate("/")}>HOME</li>
                <li onClick={() => navigate("/about")}>ABOUT</li>
                <li onClick={() => navigate("/courses")}>COURSES</li>
                <li onClick={() => navigate("/blog")}>BLOG</li>
                <li onClick={() => navigate("/contact")}>CONTACT</li>
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
                <li onClick={() => setNavMenu(false)}><NavLink to="/" className="link">HOME</NavLink></li>
                <li onClick={() => setNavMenu(false)}><NavLink to="/about" className="link">ABOUT</NavLink></li>
                <li onClick={() => setNavMenu(false)}><NavLink to="/courses" className="link">COURSES</NavLink></li>
                <li onClick={() => setNavMenu(false)}><NavLink to="/blog" className="link">BLOG</NavLink></li>
                <li onClick={() => setNavMenu(false)}><NavLink to="/contact" className="link">CONTACT</NavLink></li>
              </motion.ul>
            )}
          </AnimatePresence>
        )}
      </nav>
    </div>
   
  );
};
