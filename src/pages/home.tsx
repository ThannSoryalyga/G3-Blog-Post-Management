<<<<<<< HEAD
=======
import feature1 from '../assets/images/feature1.png';
import feature2 from '../assets/images/feature2.png';
import feature3 from '../assets/images/feature3.png';
import heroImage from '../assets/images/hero-image.png'; 
>>>>>>> main
const Home = () => {
  return (
    
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900 text-white py-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold mb-6 hover:scale-105 transition-transform duration-300">
            Welcome to G3 Blog Post Management
          </h1>
          <p className="text-lg mb-8">
            Effortlessly manage and share your blogs with our powerful platform.
          </p>
          <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 hover:text-blue-500 transition-colors duration-300">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src={feature1}
                  alt="Feature 1"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy Blog Management</h3>
              <p>
                Create, edit, and organize your blogs with an intuitive interface.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src={feature2}
                  alt="Feature 2"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customizable Themes</h3>
              <p>
                Choose from a variety of themes to make your blogs stand out.
              </p>
            </div>
          
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src={feature3}
                  alt="Feature 3"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics Dashboard</h3>
              <p>
                Track your blog performance with detailed analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 hover:text-blue-500 transition-colors duration-300">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <p className="italic mb-4">
                "This platform has completely transformed the way I manage my
                blogs. Highly recommended!"
              </p>
              <h4 className="font-bold">- John Doe</h4>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <p className="italic mb-4">
                "The customizable themes are amazing. My blogs have never looked
                better!"
              </p>
              <h4 className="font-bold">- Jane Smith</h4>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <p className="italic mb-4">
                "The analytics dashboard gives me all the insights I need to grow
                my audience."
              </p>
              <h4 className="font-bold">- Alice Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of bloggers who trust G3 Blog Post Management.
          </p>
          <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
