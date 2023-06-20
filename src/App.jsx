import {HashRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./component/Header";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="app">
   
   <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </HashRouter>
      
    </div>
  );
}

export default App;
