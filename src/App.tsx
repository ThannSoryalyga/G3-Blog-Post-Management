import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/blogs" element={<div>Blogs</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
          
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;