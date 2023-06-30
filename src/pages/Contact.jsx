import { Footer } from "../component/Footer"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact = () => {

   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_fnlyk4i', 'template_fn6hk1h', form.current, 'zACzMzsFyBJCvFwsk')
       e.target.reset()
   };

   return (
      <div>
         <h1 id="text-box">Contact Us</h1>

         <div className="location">Google Map React</div>

         <div className="contact-us">
            <div className="row">
               <div className="contact-col">
                  <div>
                   <img src="home.png" className="icons"/>
                     <span>
                        <h5>XYZ Road, FUY Building</h5>
                        <p>Berlin, Germany</p>
                     </span>
                  </div>
               
                  <div>
                  <img src="phone.png" className="icons"/>
                     <span>
                        <h5>+1 5673949573</h5>
                        <p>Monday to Thursday, 10AM to 4PM</p>
                     </span>
                  </div>
               
                  <div>
                  <img src="envelope.png" className="icons"/>
                     <span>
                        <h5>info@eduford.edu.ng</h5>
                        <p>Email us</p>
                     </span>
                  </div>
               </div>
               <div className="contact-col">
      <form ref={form} onSubmit={sendEmail}>

        <input type="text" placeholder="Enter your name" name="fullname"  required/>

        <input type="email" placeholder="Enter your email" name="email"  required/>
        
        <input type="text" placeholder="Enter your subject" name="subject" required/>

        <textarea rows="8" placeholder="Message" name="message" ></textarea>

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

