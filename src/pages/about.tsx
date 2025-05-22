import Header from "../components/header";
const About = () => {
    return (
      <>  
       <Header />
  
      <div className="p-8 font-sans">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to our platform! We aim to provide the best tools for managing
          and sharing blogs.
        </p>
      </div>
      </>
    );
  };
  
  export default About;