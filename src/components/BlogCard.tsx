// src/components/BlogCard.tsx
import { Link } from "react-router-dom";

type BlogCardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-block text-blue-600 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;