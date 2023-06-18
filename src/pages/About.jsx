import { Footer } from "../component/Footer"
import { Link } from "react-router-dom"
export const About = () => {
  return (
    <div>
      <h1 id="text-box">About Us</h1>
      
      <div className="about-us">
        <div className="row about-row">
          <div className="about-col">
            <h1>{`We are the world's largest university`}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint similique sequi aspernatur necessitatibus perspiciatis non accusantium, vel doloribus dolorem sit saepe minus qui, sapiente assumenda quia vitae nesciunt! Consequuntur, praesentium!</p>
            <div id="box-btn">
         <a><Link to="/courses" className="explore-btn">Explore Now</Link></a>
         </div>

          </div>
          <div className="about-col">
            <img src="about.jpeg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
