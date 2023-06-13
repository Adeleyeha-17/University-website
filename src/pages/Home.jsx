import { CallToAction } from "../component/CallToAction"
import { Campus } from "../component/Campus"
import { Course } from "../component/Course"
import { Facilities } from "../component/Facilities"
import { Footer } from "../component/Footer"
import { Hero } from "../component/Hero"
import { Testimonials } from "../component/Testimonials"

export const Home = () => {
  return (
    <div className="home">
      <Hero />

      <Course />

      <Campus />

      <Facilities />

      <Testimonials />

      <CallToAction />

      <Footer />
    </div>
  )
}
