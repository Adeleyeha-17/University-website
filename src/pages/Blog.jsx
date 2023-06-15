import {Footer} from "../component/Footer"

export const Blog = () => {
   return (
      <div className="blog">

         <h1 id="text-box">Our Ceritifcate & Online Programs for 2023</h1>

         <div className="blog-content">
            <div className="row">
               <div className="blog-left">
                  <img src="certificate.jpg" alt=""/>
                  <h2>Our Ceritifcate & Online Programs for 2023</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus a delectus, corrupti nemo accusamus alias repellat totam, distinctio similique praesentium ratione! Quam dolore sequi earum culpa temporibus ipsa exercitationem?</p>
                  <br/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, distinctio iusto! At beatae fuga magnam commodi animi, esse molestias, eius nisi natus amet blanditiis eum, ipsa id et deserunt assumenda.</p>
                  <br/>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae laborum facere mollitia reiciendis tempore rerum doloremque id assumenda aliquam saepe corrupti itaque rem totam quaerat, voluptatem asperiores repudiandae? Nobis, necessitatibus.</p>
                  <br/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, blanditiis nesciunt? Nesciunt, adipisci quidem aliquid reprehenderit suscipit cum error praesentium vitae ratione voluptatum doloribus culpa quia eos perspiciatis illum dolor.</p>
                  <br/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore similique, laudantium architecto numquam quod accusantium molestias eligendi. Aperiam beatae magni commodi asperiores inventore in sit itaque odio expedita, neque ab.</p>
                  <br/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, incidunt minima quas molestias fugit reiciendis temporibus voluptas odio dolorem voluptates molestiae nihil praesentium illum tenetur ut consequuntur illo nesciunt omnis.</p>
                  <br/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, incidunt minima quas molestias fugit reiciendis temporibus voluptas odio dolorem voluptates molestiae nihil praesentium illum tenetur ut consequuntur illo nesciunt omnis.</p>
                  <br/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, incidunt minima quas molestias fugit reiciendis temporibus voluptas odio dolorem voluptates molestiae nihil praesentium illum tenetur ut consequuntur illo nesciunt omnis.</p>

                  <div className="comment-box">
                    <h3>Leave a comment</h3>

                    <form className="comment-form">
                      <input type="text" placeholder="Enter Name" />
                      <input type="email"  placeholder="Enter Email"/>
                      <textarea  rows="5" placeholder="Your comment"></textarea>
                      <button type="submit">
                        POST COMMENT
                      </button>
                    </form>
                  </div>
               </div>
               <div className="blog-right">
                  <h3>Post Categories</h3>
                  <div>
                     <span>Business Analytics</span>
                     <span>21</span>
                  </div>
                  <div>
                     <span>Data Science</span>
                     <span>15</span>
                  </div>
                  <div>
                     <span>Machine Learning</span>
                     <span>21</span>
                  </div>
                  <div>
                     <span>Computer Science</span>
                     <span>17</span>
                  </div> 
                  <div>
                     <span>Journalism</span>
                     <span>14</span>
                  </div>
                  <div>
                     <span>Commerce</span>
                     <span>21</span>
                  </div> 
                  <div>
                     <span>AutoCAD</span>
                     <span>21</span>
                  </div>
               </div>
            </div>
         </div>
         <Footer/>
      </div>
   )
}
