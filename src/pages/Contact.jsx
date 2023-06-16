import { useState } from "react"
import { Footer } from "../component/Footer"
export const Contact = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  })

  const { fullname, email, subject, message } = formData;

  const onChange = (e) => {
   const {name, value} = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name] : value
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

   return (
      <div>
         <h1 id="text-box">Contact Us</h1>

         <div className="location">Google Map React</div>

         <div className="contact-us">
            <div className="row">
               <div className="contact-col">
                  <div>
                   <i className="icons">icon home</i>
                     <span>
                        <h5>XYZ Road, FUY Building</h5>
                        <p>Berlin, Germany</p>
                     </span>
                  </div>
               
                  <div>
                  <i className="icons">icon phone</i>
                     <span>
                        <h5>+1 5673949573</h5>
                        <p>Monday to Thursday, 10AM to 4PM</p>
                     </span>
                  </div>
               
                  <div>
                  <i className="icons">icon envelope</i>
                     <span>
                        <h5>info@eduford.edu.ng</h5>
                        <p>Email us</p>
                     </span>
                  </div>
               </div>
               <div className="contact-col">
      <form onSubmit={onSubmit}>

        <input type="text" placeholder="Enter your name" name="fullname" value={fullname} onChange={onChange} required/>

        <input type="email" placeholder="Enter your email" name="email" value={email} onChange={onChange} required/>
        
        <input type="text" placeholder="Enter your subject" name="subject" value={subject} onChange={onChange} required/>

        <textarea rows="8" placeholder="Message" name="message" value={message} onChange={onChange}></textarea>

        <div className="box-btn">
        <button type="submit" className="submit-btn">Send Message</button>
        </div>
        
      </form>
            </div>
            </div>
            
         </div>

         <Footer />
      </div>
   )
}
