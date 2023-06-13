import { Link } from "react-router-dom"
export const CallToAction = () => {
  return (
    <div>
      <div className="cta">
         <h1>Enroll for our various online courses anywhere around the globe</h1>

         <div id="box-btn">
         <a href="#"><Link to="/contact">CONTACT US</Link></a>
         </div>
         
      </div>
    </div>
  )
}
