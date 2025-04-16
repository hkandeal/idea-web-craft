
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Hello! I'm a passionate professional with expertise in my field. I love creating
                meaningful experiences and solving complex problems.
              </p>
              <p className="text-lg text-gray-600">
                With years of experience in the industry, I've developed a keen eye for detail
                and a commitment to excellence in everything I do.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not working, you can find me exploring new technologies, reading, or
                enjoying outdoor activities.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Skill 1</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Skill 2</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Skill 3</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
