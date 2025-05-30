import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import axios from "axios";
import parse from "html-react-parser";
import Footer from "../components/footer";

const STRAPI_URL = "http://localhost:1337";

interface Author {
  id: number;
  username: string;
  avatar?: { url: string };
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
  title: string;
  content: string;
  author: Author | null;
  category: Category | null;
  image: Image | null;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const userId = localStorage.getItem("userId");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [commet, setComment] = useState<string>("");
  const [listComment, setListComment] = useState<any[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          ` ${STRAPI_URL}/api/comments?filters[blog][documentId][$eq]=${id}&populate=*`
        );
        const commentsData = response.data.data;
        setListComment(commentsData);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }
    };

    fetchComments();
  }, [listComment]);

  console.log(listComment);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${STRAPI_URL}/api/blogs/${id}?populate=*`
        );

        // Strapi response in data.data
        const data = response.data.data;
        setPost(data);
      } catch (err) {
        setError("Failed to fetch blog post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading)
    return <p className="py-50 px-150 font-m text-2xl">Loading...</p>;
  // if (error) return <p style={{ color: "red" }}>{error}</p>;
  // if (!post) return <p>No blog post found.</p>;

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = axios.post(`${STRAPI_URL}/api/comments`, {
      data: {
        content: commet,
        users: userId,
        blog: post?.id,
      },
    });
    setComment("");
    console.log(data);
  };

  return (
    <>
      <Header />
      <button
        onClick={() => window.history.back()}
        className="ml-8 mt-5 font-bold font-2xl text-blue-400"
      >
        {" "}
        ⬅️Back
      </button>
      <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
        <img
          src={post?.image?.formats?.thumbnail?.url}
          // alt={post.title}
          style={{
            width: "70%",
            borderRadius: 8,
            marginBottom: "1rem",
            justifyContent: "center",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p>
          <strong className="text-amber-500">Author:</strong>{" "}
          {post?.author?.username}
        </p>

        {/* <p>
        <strong className="text-amber-500">Category:</strong> {post?.categary?.title}
      </p> */}
        <h1
          className="font-bold"
          style={{ fontSize: "2rem", marginBottom: "1rem" }}
        >
          {post?.title}
        </h1>

        <div>{parse(post?.Content)}</div>
        {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}

        <div>
          <div className="max-w-3xl mx-auto mt-10 px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              💬 Comments
            </h2>
            <ul className="space-y-6">
              {listComment.map((comment) => (
                <li
                  key={comment.id}
                  className="bg-white rounded-xl shadow-md p-4 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                      {/* {comment.attributes?.author?.username?.[0] || "U"} */}
                    </div>
                    <div>
                      {/* <p className="text-sm text-gray-600">
                        {new Date(
                          comment.attributes.createdAt
                        ).toLocaleString()}
                      </p> */}
                      <p className="mt-1 text-gray-800">{comment?.content}</p>
                    </div>
                  </div>
                </li>
              ))}

              {listComment.length === 0 && (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmitComment}>
          <input
            onChange={handleChangeComment}
            value={commet}
            type="text"
            placeholder="Leave a comment..."
            className="w-full p-2 border border-gray-300 rounded-lg mt-4"
          />
          <button type="submit">
            <span className="text-blue-500">Submit</span>
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetail;
