import { Footer } from "../component/Footer"
import { Course } from "../component/Course"
import { Facilities } from "../component/Facilities"
export const Courses = () => {
  return (
    <div>
      <h1 id="text-box">Our Courses</h1>

      <Course />

      <Facilities />
      
      <Footer />
    </div>
  )
}
