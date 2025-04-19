
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Camera, Book, Dumbbell } from "lucide-react";
import { useEffect } from "react";
import updateMetaTags from "@/utils/metaTags";

const About = () => {
  useEffect(() => {
    document.title = "About Me | Hossam Kandel Mohamed";
    updateMetaTags(
      "About Me",
      "Personal Website",
      "/about"
    );
  }, []);

  const interests = [
    {
      title: "Traveling",
      icon: <Plane className="w-6 h-6 text-purple-600" />,
      description: "Traveling is my ultimate passion. Exploring new destinations, immersing myself in different cultures, and meeting people from all walks of life fuel my sense of adventure and curiosity."
    },
    {
      title: "Photography",
      icon: <Camera className="w-6 h-6 text-purple-600" />,
      description: "Capturing moments through photography is my way of preserving memories and sharing the beauty of the world with others. From landscapes to portraits, I'm constantly honing my skills behind the lens."
    },
    {
      title: "History & Reading",
      icon: <Book className="w-6 h-6 text-purple-600" />,
      description: "My passion for reading spans historical narratives of ancient nations and epic battles, alongside inspiring biographies and transformative self-development books. Each page is a journey through time, wisdom, and human experience."
    },
    {
      title: "Workout",
      icon: <Dumbbell className="w-6 h-6 text-purple-600" />,
      description: "Maintaining a healthy lifestyle is important to me. I enjoy staying active through various workouts and fitness activities. Whether it's hitting the gym or going for a run, I prioritize my physical well-being."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">About Me</h1>
          <div className="space-y-8">
            <div className="prose max-w-none space-y-6">
              {[
                {
                  text: "Hey there! I'm a passionate explorer with an insatiable thirst for adventure and discovery.",
                  highlight: true
                },
                {
                  text: "Whether I'm wandering through the corridors of ancient history or delving into the latest technological innovations, I'm always seeking out new experiences.",
                  highlight: false
                },
                {
                  text: "As a software developer, I thrive on the intricacies of code and the marvels of architecture, constantly pushing the boundaries of what's possible in the digital realm.",
                  highlight: false
                },
                {
                  text: "When I'm not immersed in pixels and lines of code, you can find me lost in the pages of captivating books or maintaining a healthy balance through workouts and a nourishing lifestyle.",
                  highlight: false
                },
                {
                  text: "Football matches offer a thrilling escape, but my true passion lies in capturing the essence of my travels through the lens of travel photography.",
                  highlight: false
                },
                {
                  text: "Beyond my personal interests, I'm dedicated to honing my leadership skills and fostering cohesive teams, driven by a relentless curiosity to discover new technologies and forge innovative pathways into the future.",
                  highlight: false
                }
              ].map((paragraph, index) => (
                <p 
                  key={index} 
                  className={`
                    text-lg 
                    ${paragraph.highlight ? 'text-primary font-semibold' : 'text-gray-600'}
                    leading-relaxed 
                    tracking-wide 
                    transition-colors 
                    duration-300 
                    hover:text-primary/80
                  `}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {interests.map((interest, index) => (
                <Card key={index} className="transform transition-all hover:scale-105">
                  <CardHeader className="space-y-1 flex items-center justify-center pb-4">
                    <div className="bg-purple-50 p-3 rounded-full mb-4">
                      {interest.icon}
                    </div>
                    <CardTitle className="text-xl text-center">{interest.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">{interest.description}</p>
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
