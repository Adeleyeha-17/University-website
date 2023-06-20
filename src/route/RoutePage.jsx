import {Home} from "../pages/Home"
import { About } from "../pages/About";
import { Courses } from "../pages/Courses";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/courses",
    element: <Courses />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/contact",
    element: <Contact />
  }
];

