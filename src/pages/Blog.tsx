
import { motion } from "framer-motion";
import { useEffect } from "react";
import updateMetaTags from "@/utils/metaTags";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Hossam Kandel Mohamed";
    updateMetaTags(
      "Blog",
      "Personal Website",
      "/blog"
    );
  }, []);

  const post = {
    title: "Software Architecture — Things That No One Has Told You",
    excerpt: 'My first "official" architecture role was a learning experience — in the truest sense of that expression. I started learning what to do and what not to do. This led me to many conversations with other architects, developers, business stakeholders, and others about their expectation from this role.',
    date: "April 16, 2025",
    link: "https://levelup.gitconnected.com/software-architecture-things-that-no-one-has-told-you-c098bbb70a61",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  };

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
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
