import { useState } from "react";


export const Header = () => {

  const [navMenu, setNavMenu] = useState(false)
  const mobileScreen = window.innerWidth <= 768 ? true : false;

  return (
    <div className="header">
       <nav>
       <img src="logo.png" alt="" id="header-logo"/>

       {(mobileScreen === true && navMenu === false) ? 
      <div>
        <img src="bars.png" alt="" className="nav-bar" onClick={() => setNavMenu(true)}/>
      </div> : 
       <ul id="nav-link">
          <h1 onClick={() => setNavMenu(false)} className="close-btn">X</h1>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>COURSES</li>
          <li>BLOG</li>
          <li>CONTACT</li>
       </ul>
}
    </nav>
     
    
    <div id="text-box">
      <h1>{`World's Biggest University`}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit? Sunt vel quibusdam cupiditate sint blanditiis? Asperiores assumenda optio repellat, quos eaque saepe illum dolor, incidunt debitis accusantium ipsa inventore?</p>
      <div id="box-btn">
      <a href="#">Visit to know more</a>
      </div>
    </div>

    </div>
  )
}
