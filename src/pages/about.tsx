import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";

const About: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-10 md:px-20 -mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
            About Us
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-500">G3 Blog Post Management</span> —
            your one-stop platform for creating, organizing, and sharing blog content with ease.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            Whether you're a seasoned blogger or just starting out, our tools make it simple to
            publish your thoughts, connect with others, and manage your content efficiently.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clean and intuitive user interface</li>
            <li>Mobile-responsive and accessible design</li>
            <li>Secure authentication system</li>
            <li>Dark mode for better readability</li>
            <li>Powerful blog post management tools</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="/src/assets/Picture.webp"
            alt="Team working together"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
