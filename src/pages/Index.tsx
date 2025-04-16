
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
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
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage 
                src="/placeholder.svg" 
                alt="Your Profile" 
                className="object-cover"
              />
              <AvatarFallback>
                <User className="w-16 h-16 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to My Website
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm a passionate professional dedicated to creating amazing experiences.
            Explore my work and get in touch!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              View My Work
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
