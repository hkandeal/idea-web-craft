
import { Link } from "react-router-dom";
import { Home, User, Mail, Briefcase, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <User size={20} />
              <span className="font-medium">About</span>
            </Link>
            <Link to="/portfolio" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <Briefcase size={20} />
              <span className="font-medium">Portfolio</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <BookOpen size={20} />
              <span className="font-medium">Blog</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <Mail size={20} />
              <span className="font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
