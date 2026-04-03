import { createBrowserRouter } from "react-router-dom";

import Layout   from "./layout";
import Home     from "./pages/Home";
import Blog     from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Courses  from "./pages/Courses";
import About    from "./pages/About";
import Contact  from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true,      element: <Home />     },
      { path: "courses",  element: <Courses />  },
      { path: "blog",     element: <Blog />     },
      { path: "blog/:id", element: <BlogPost /> },
      { path: "about",    element: <About />    },
      { path: "contact",  element: <Contact />  },
      { path: "*",        element: <NotFound /> },
    ],
  },
]);

export default router;
