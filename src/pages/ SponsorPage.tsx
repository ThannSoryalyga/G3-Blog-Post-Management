// src/pages/SponsorPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const SponsorPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Sponsors</h1>

      <p className="mb-6 text-lg">
        We're proud to be supported by these amazing companies!
      </p>

      <ul className="list-disc list-inside space-y-2 text-lg pl-5">
        <li>TechFusion Inc.</li>
        <li>DevTools Pro</li>
        <li>CloudScale Solutions</li>
      </ul>

      <div className="mt-8">
        <Link to="/blogs" className="text-blue-600 hover:underline text-lg">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default SponsorPage;