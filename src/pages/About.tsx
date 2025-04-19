
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Camera, Book, Dumbbell } from "lucide-react";

const About = () => {
  const interests = [
    {
      title: "Traveling",
      icon: <Plane className="w-6 h-6 text-purple-600" />,
      description: "Exploring new places and experiencing different cultures"
    },
    {
      title: "Photography",
      icon: <Camera className="w-6 h-6 text-purple-600" />,
      description: "Capturing moments and telling stories through images"
    },
    {
      title: "History & Reading",
      icon: <Book className="w-6 h-6 text-purple-600" />,
      description: "Delving into ancient histories and expanding knowledge through books"
    },
    {
      title: "Workout",
      icon: <Dumbbell className="w-6 h-6 text-purple-600" />,
      description: "Maintaining a healthy lifestyle through regular exercise"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          <div className="space-y-8">
            <div className="prose max-w-none space-y-6">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {interests.map((interest, index) => (
                <Card key={index} className="transform transition-all hover:scale-105">
                  <CardHeader className="space-y-1 flex items-center justify-center pb-4">
                    <div className="bg-purple-50 p-3 rounded-full mb-4">
                      {interest.icon}
                    </div>
                    <CardTitle className="text-xl text-center">{interest.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
