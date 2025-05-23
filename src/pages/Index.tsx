
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect } from "react";
import updateMetaTags from "@/utils/metaTags";

const Index = () => {
  useEffect(() => {
    document.title = "Home | Hossam Kandel Mohamed";
    updateMetaTags(
      "Home",
      "Personal Website",
      "/"
    );
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-col items-center mb-6">
            <Avatar className="w-48 h-48 mb-4">
              <AvatarImage 
                src="/lovable-uploads/2ee19d8d-e73b-49ac-ad56-443ddd758647.png" 
                alt="Profile Picture" 
                className="object-cover"
              />
              <AvatarFallback>
                <User className="w-24 h-24 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to My Website
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Dive into the captivating journey of discovering who I am and where my career takes flight. Explore my work and get in touch!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/work-experience"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              View My Experience
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
