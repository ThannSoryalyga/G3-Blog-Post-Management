
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} G3 Blog Post Management. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;