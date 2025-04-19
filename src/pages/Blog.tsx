
import { motion } from "framer-motion";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Hossam Kandel";
  }, []);

  const posts = [
    {
      title: "First Blog Post",
      excerpt: "This is a brief excerpt from the first blog post...",
      date: "April 16, 2025",
    },
    {
      title: "Second Blog Post",
      excerpt: "This is a brief excerpt from the second blog post...",
      date: "April 15, 2025",
    },
    {
      title: "Third Blog Post",
      excerpt: "This is a brief excerpt from the third blog post...",
      date: "April 14, 2025",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-600">{post.excerpt}</p>
                <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium">
                  Read More →
                </button>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
