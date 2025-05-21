const DetailBlog = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 -mt-8">
    <div className="bg-white  border  justify-center tweet-border max-w-xl w-full rounded-lg  sm:rounded-lg  shadow-sm -mt-10 ">
      <article className="p-4 flex space-x-3">
       
        <div className="flex-shrink-0">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
            alt="User Avatar"
          />
        </div>
        
        <div className="flex-1 min-w-0">

          <div className="flex justify-between items-center mb-1">
            <div className="flex items-baseline space-x-1 text-sm min-w-0">
              <span className="font-bold text-black  truncate hover:underline cursor-pointer">
                Full Name
              </span>
              <span className="text-black  truncate">
                @username
              </span>
              <span className="text-black">·</span>
              <span className="text-black hover:underline cursor-pointer whitespace-nowrap">
                3h
              </span>
            </div>
            <button
              aria-label="More options"
              className="text-gray-500 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-900 dark:hover:bg-opacity-50 rounded-full p-1.5 -mr-1.5"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </div>
          {/* Tweet Content */}
          <p className="text-black text-sm sm:text-base leading-normal mb-2">
          A deep dive into my journey into content creation.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              #webdev
            </a>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              #tailwindcss
            </a>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              @tailwindcss
            </a>
          </p>
          {/* Media (Optional) */}
          <div className="mt-3 rounded-xl border tweet-border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Tweet media content"
              className="w-full object-cover aspect-video"
            />
          </div>        
        </div>
      </article>
    </div>
    </div>
  );
};

export default DetailBlog;
