import React from "react";
import { Link } from "react-router-dom";

// Sponsor list with real logo URLs (from SimpleIcons or official sources)
const sponsors = [
  { name: "Amazon", logo: "https://cdn.simpleicons.org/amazon " },
  { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook " },
  { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube " },
  { name: "Google", logo: "https://cdn.simpleicons.org/google " },
  { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft " },
  { name: "Apple", logo: "https://cdn.simpleicons.org/apple " },
  { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix " },
  { name: "Twitter", logo: "https://cdn.simpleicons.org/twitter " },
  { name: "LinkedIn", logo: "https://cdn.simpleicons.org/linkedin " },
  { name: "Airbnb", logo: "https://cdn.simpleicons.org/airbnb " },
  { name: "Uber", logo: "https://cdn.simpleicons.org/uber " },
  { name: "Spotify", logo: "https://cdn.simpleicons.org/spotify " },
  { name: "Adobe", logo: "https://cdn.simpleicons.org/adobe " },
  { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce " },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack " },
  { name: "Dropbox", logo: "https://cdn.simpleicons.org/dropbox " },
  { name: "Zoom", logo: "https://cdn.simpleicons.org/zoom " },
  { name: "Twitch", logo: "https://cdn.simpleicons.org/twitch " },
  { name: "Pinterest", logo: "https://cdn.simpleicons.org/pinterest " },
  { name: "Snapchat", logo: "https://cdn.simpleicons.org/snapchat " },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify " },
  { name: "GitLab", logo: "https://cdn.simpleicons.org/gitlab " },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker " },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe " },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github " },
];

const SponsorPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Sponsors</h1>

      <p className="mb-8 text-lg text-center">
        We're proud to be supported by these amazing companies!
      </p>

      {/* Sponsor Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex items-center justify-center border rounded-lg p-4 bg-white shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} Logo`}
              className="max-h-12 w-auto object-contain"
              onError={({ currentTarget }) => {
                currentTarget.src = "https://via.placeholder.com/100?text=Logo ";
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/blogs" className="text-blue-600 hover:underline text-lg">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default SponsorPage;