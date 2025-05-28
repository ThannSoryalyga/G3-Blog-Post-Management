import React from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer"; // Import Footer

const Blogs: React.FC = () => {
   const blogs = [
    {
      id: 1,
      title: "Why I Started Blogging",
      description: "A deep dive into my journey into content creation.",
      imageUrl: "https://picsum.photos/id/1015/600/400 ",
    },
    {
      id: 2,
      title: "How to Stay Productive",
      description:
        "Tips and tricks for staying focused and getting things done.",
      imageUrl: "https://picsum.photos/id/1016/600/400 ",
    },
    {
      id: 3,
      title: "Mastering React Hooks",
      description: "Understanding useEffect, useState, and more.",
      imageUrl: "https://picsum.photos/id/1019/600/400 ",
    },

  ];

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Our Blogs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link to="/sponsor" className="text-blue-600 hover:underline text-lg">
            View Our Sponsors →
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
