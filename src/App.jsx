import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./component/Header";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="app">
   
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </Router>
      
    </div>
  );
}

export default App;
