import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

interface Author {
  id: number;
  username: string;
  email: string;
  avatar?: {
    url: string;
  };
}

interface Category {
  id: number;
  title: string;
}

interface Image {
  url: string;
}

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  content: string;
  author: Author | null;
  category: Category | null;
  image: Image | null;
}

function BlogPostList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image"
      );
      const rawPosts = response.data.data;
      const formattedPosts: BlogPost[] = rawPosts.map((item: any) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title ?? "Untitled",
        content: item.Content ?? "",
        author: item.author ?? null,
        category: item.category ?? null,
        image: item.image ? { url: item.image.url } : null,
      }));
      setPosts(formattedPosts);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/categaries?populate=*"
      );
      const rawCategories = response.data.data;
      const formattedCategories: Category[] = rawCategories.map((item: any) => ({
        id: item.id,
        title: item.title ?? "Uncategorized",
      }));
      setCategories(formattedCategories);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchPosts(), fetchCategories()]);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <h2 className="text-center text-2xl">Loading...</h2>;
  if (error) return <h2 className="text-center text-2xl text-red-500">Error: {error}</h2>;

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-4 justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
        {/* Categories Section */}
        <div className="mb-8">
  <div className="flex flex-wrap justify-center gap-3 p-4 bg-gray-50 rounded-lg shadow-md">
    {categories.map((category) => (
      <Link
        key={category.id}
        to={`/category/${category.id}`}
        className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300"
      >
        {category.title}
      </Link>
    ))}
  </div>
</div>

        {/* Blog Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              {post.image ? (
                <img
                  src={post.image.url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                  No Image
                </div>
              )}
              <div className="p-4">
                <p className="font-bold text-2xl mb-2">{post.title}</p>
                {/* <p dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-700"></p> */}
                {post.author && (
                  <p className="text-gray-800">
                    <b>Author:</b> {post.author.username}
                  </p>
                )}
                {post.category && (
                  <p className="text-gray-800">
                    <b>Category:</b>{" "}
                    <Link
                      to={`/category/${post.category.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {post.category.title}
                    </Link>
                  </p>
                )}
              </div>
              <div className="p-4 flex items-center space-x-4">
                {post.author && post.author.avatar ? (
                  <img
                    src={post.author.avatar.url}
                    alt="Author avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-400" />
                )}
              </div>
              <Link to={`/blog/${post.documentId}`}>
                <button  className=" m-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 transition duration-300 ">
                  Read More
                  
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPostList;

// import { useEffect, useState } from "react";

// const BlogFilterByCategary = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [blogs, setBlogs] = useState([]);

//   // Fetch all categories
//   useEffect(() => {
//     fetch("http://localhost:1337/api/categaries?populate=*")
//       .then((res) => res.json())
//       .then((data) => setCategories(data.data))
//       .catch((err) => console.error("Failed to fetch categories:", err));
//   }, []);

//   // Fetch blogs when selectedCategory changes
//   useEffect(() => {
//     let url = "http://localhost:1337/api/blogs?populate=*";
//     if (selectedCategory) {
//       url += `&filters[categary][title][$eq]=${selectedCategory}`;
//     }

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setBlogs(data.data))
//       .catch((err) => console.error("Failed to fetch blogs:", err));
//   }, [selectedCategory]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Filter Blogs by Categary</h1>

//       {/* Category Buttons */}
//       <div className="mb-4">
//         {categories.map((cat) => (
//           <button
//             key={cat.id}
//             onClick={() => setSelectedCategory(cat.title)}
//             className={`px-4 py-2 m-1 rounded ${
//               selectedCategory === cat.title
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             {cat.title}
//           </button>
//         ))}
//         {/* Clear filter button */}
//         <button
//           onClick={() => setSelectedCategory(null)}
//           className="px-4 py-2 m-1 rounded bg-red-400 text-white"
//         >
//           Show All
//         </button>
//       </div>

//       {/* Blog List */}
//       <div className="grid gap-4">
//         {blogs.length > 0 ? (
//           blogs.map((blog) => (
//             <div key={blog.id} className="border p-4 rounded shadow bg-white">
//               <h2 className="text-xl font-semibold">{blog.title}</h2>
//               <p>{blog.content}</p>
//               <p className="text-sm text-gray-500 mt-2">
//                 Category: {blog.categary?.data?.title}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No blogs found for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };
// export default BlogFilterByCategary;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import Header from "../components/header";
// import { Link } from "react-router-dom";

// interface Author {
//   id: number;
//   username: string;
//   email: string;
//   avatar?: {
//     url: string;
//   };
// }

// interface Category {
//   id: number;
//   title: string;
// }

// interface Image {
//   url: string;
// }

// interface BlogPost {
//   id: number;
//   documentId: string;
//   title: string;
//   content: string;
//   author: Author | null;
//   categary: Category | null;
//   image: Image | null;
// }

// function BlogPostList() {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchPosts = async () => {
//     try {
//       const url = selectedCategory
//         ? `http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&populate=categary&filters[categary][id][$eq]=${selectedCategory}`
//         : `http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&populate=categary`;

//       const response = await axios.get(url);
//       const rawPosts = response.data.data;

//       // const formattedPosts: BlogPost[] = rawPosts.map((item: any) => ({
//       //   id: item.id,
//       //   documentId: item.documentId,
//       //   title: item.title ?? "Untitled",
//       //   content: item.content ?? "",
//       //   author: item.author ?? null,
//       //   categary: item.categary ?? null,
//       //   image: item.image ? { url: item.image.url } : null,
//       // }));
//       console.log(rawPosts);
//       setPosts(rawPosts);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unknown error occurred");
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:1337/api/categaries");
//       const rawCategories = response.data.data;

//       const formattedCategories: Category[] = rawCategories.map(
//         (item: any) => ({
//           id: item.id,
//           title: item.title ?? "Uncategorized",
//         })
//       );

//       setCategories(formattedCategories);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unknown error occurred");
//     }
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       await Promise.all([fetchPosts(), fetchCategories()]);
//       setLoading(false);
//     };
//     loadData();
//   }, [selectedCategory]);

//   if (loading) return <h2 className="text-center text-2xl">Loading...</h2>;
//   if (error)
//     return (
//       <h2 className="text-center text-2xl text-red-500">Error: {error}</h2>
//     );

//   return (
//     <>
//       <Header />
//       <div className="max-w-6xl mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>

//         {/* Category Filter */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
//           <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-lg shadow-md">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() =>
//                   setSelectedCategory(
//                     selectedCategory === category.id ? null : category.id
//                   )
//                 }
//                 className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//                   selectedCategory === category.id
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 {category.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
//             >
//               {post.image ? (
//                 <img
//                   src={post.thumbnail?.url}
//                   alt={post.title}
//                   className="w-full h-48 object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600">
//                   No Image
//                 </div>
//               )}
//               <div className="p-4">
//                 <p className="font-bold text-2xl mb-2">{post.title}</p>
//                 <p
//                   dangerouslySetInnerHTML={{ __html: post.content }}
//                   className="text-gray-700 mb-2"
//                 ></p>
//                 {post.author && (
//                   <p className="text-gray-800">
//                     <b>Author:</b> {post.author.username}
//                   </p>
//                 )}
//                 {post.categary && (
//                   <p className="text-gray-800">
//                     <b>Category:</b> {post.categary.title}
//                   </p>
//                 )}
//               </div>
//               <div className="p-4 flex items-center space-x-4">
//                 {post.author?.avatar ? (
//                   <img
//                     src={post.author.avatar.url}
//                     alt="Author avatar"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-10 h-10 rounded-full bg-gray-400" />
//                 )}
//               </div>
//               <Link to={`/blog/${post.documentId}`}>
//                 <button className="m-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 transition duration-300">
//                   Read More
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlogPostList;
