
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Mail, Briefcase, BookOpen, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Logo / Home link for mobile */}
          <div className="flex items-center md:hidden">
            <Link to="/" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600" onClick={closeMenu}>
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <User size={20} />
              <span className="font-medium">About</span>
            </Link>
            <Link to="/work-experience" className="flex items-center space-x-2 text-gray-900 hover:text-purple-600">
              <Briefcase size={20} />
              <span className="font-medium">Work Experience</span>
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
          
          {/* Empty div to balance the mobile layout */}
          <div className="md:hidden w-10"></div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link 
              to="/" 
              className="block py-2 px-3 rounded-md text-gray-900 hover:bg-purple-50 hover:text-purple-600 flex items-center space-x-2"
              onClick={closeMenu}
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-3 rounded-md text-gray-900 hover:bg-purple-50 hover:text-purple-600 flex items-center space-x-2"
              onClick={closeMenu}
            >
              <User size={20} />
              <span className="font-medium">About</span>
            </Link>
            <Link 
              to="/work-experience" 
              className="block py-2 px-3 rounded-md text-gray-900 hover:bg-purple-50 hover:text-purple-600 flex items-center space-x-2"
              onClick={closeMenu}
            >
              <Briefcase size={20} />
              <span className="font-medium">Work Experience</span>
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 px-3 rounded-md text-gray-900 hover:bg-purple-50 hover:text-purple-600 flex items-center space-x-2"
              onClick={closeMenu}
            >
              <BookOpen size={20} />
              <span className="font-medium">Blog</span>
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-3 rounded-md text-gray-900 hover:bg-purple-50 hover:text-purple-600 flex items-center space-x-2"
              onClick={closeMenu}
            >
              <Mail size={20} />
              <span className="font-medium">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
