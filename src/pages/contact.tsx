const Contact = () => {
    return (
      <div className="p-8 font-sans">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          Have questions? Reach out to us at{' '}
          <a
            href="mailto:support@c3blogs.com"
            className="text-blue-500 hover:underline"
          >
            support@c3blogs.com
          </a>.
        </p>
      </div>
    );
  };
  
  export default Contact;