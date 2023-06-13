import { CallToAction } from "./component/CallToAction";
import { Campus } from "./component/Campus";
import { Course } from "./component/Course";
import { Facilities } from "./component/Facilities";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Testimonials } from "./component/Testimonials";


function App() {
  return (
    <div className="app">
   
      <Header />
      
      <Course />

      <Campus />

      <Facilities />

      <Testimonials />

      <CallToAction />

      <Footer />
    </div>
  );
}

export default App;
