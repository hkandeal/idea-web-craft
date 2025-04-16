
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
                Hey there! I'm a passionate explorer with an insatiable thirst for adventure and discovery.
              </p>
              <p className="text-lg text-gray-600">
                Whether I'm wandering through the corridors of ancient history or delving into the latest technological innovations, I'm always seeking out new experiences.
              </p>
              <p className="text-lg text-gray-600">
                As a software developer, I thrive on the intricacies of code and the marvels of architecture, constantly pushing the boundaries of what's possible in the digital realm.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not immersed in pixels and lines of code, you can find me lost in the pages of captivating books or maintaining a healthy balance through workouts and a nourishing lifestyle.
              </p>
              <p className="text-lg text-gray-600">
                Football matches offer a thrilling escape, but my true passion lies in capturing the essence of my travels through the lens of travel photography.
              </p>
              <p className="text-lg text-gray-600">
                Beyond my personal interests, I'm dedicated to honing my leadership skills and fostering cohesive teams, driven by a relentless curiosity to discover new technologies and forge innovative pathways into the future.
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
