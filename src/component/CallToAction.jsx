import { Link } from "react-router-dom"
export const CallToAction = () => {
  return (
    <div>
      <div className="cta">
         <h1>Enroll for our various online courses anywhere around the globe</h1>

         <div id="box-btn">
         <Link to="/contact">CONTACT US</Link>
         </div>
         
      </div>
    </div>
  )
}
