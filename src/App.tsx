import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Detailblog from "./pages/detail-blog";
import Contact from "./pages/contact";
import Card from "./components/card";
import Home from "./pages/home";
import SponsorPage from "./pages/ SponsorPage";
import Register from "./pages/register";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <Detailblog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/card"
          element={
            <ProtectedRoute>
              <Card />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/SponsorPage"
          element={
            <ProtectedRoute>
              <SponsorPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Header from "./components/header";
// // import Footer from "./components/footer";
// import About from "./pages/about";
// import Blogs from "./pages/blogs";
// import Detailblog from "./pages/detail-blog";
// import Contact from "./pages/contact";
// import Card from "./components/card";
// import Home from "./pages/home";
// import SponsorPage from "./pages/ SponsorPage";
// import Register from "./pages/register";
// import Login from "./pages/login";
// // import CategoryPage from "./pages/CategoryPage"; // ✅ New import for category page

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/blog/:id" element={<Detailblog />} />
//         <Route path="/category/:categoryId" element={<CategoryPage />} />{" "}
//         {/* ✅ New route */}
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/card" element={<Card />} />
//         <Route path="/sponsor" element={<SponsorPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
