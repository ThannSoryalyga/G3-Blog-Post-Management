import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
     <>
    <Router>
   
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
     
    </Router>
    </>
  );
};

export default App;