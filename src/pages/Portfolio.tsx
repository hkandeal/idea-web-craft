import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2022 - Present",
      description: "Leading development of cutting-edge web applications, focusing on React and modern frontend technologies. Implemented scalable solutions and mentored junior developers."
    },
    {
      title: "Junior Frontend Engineer",
      company: "Digital Solutions LLC",
      period: "Jun 2020 - Dec 2021",
      description: "Developed responsive web interfaces and collaborated with cross-functional teams to deliver high-quality software products."
    },
    {
      title: "Software Solutions Architect",
      company: "Emirates Group",
      period: "Nov 2021 - Dec 2023",
      description: [
        "Designed and implemented diverse architectural solutions and ADRs for Web and Mobile business requirements.",
        "Collaborated with enterprise architects and stakeholders to develop architecture roadmaps and technical vision for containerization initiatives.",
        "Facilitated daily solution refinement sessions and technical design discussions with feature teams.",
        "Contributed to enterprise API guidelines development and reviews, focusing on omni-channel service integration.",
        "Conducted comprehensive architecture reviews to identify system optimization opportunities.",
        "Led strategic initiatives including WMAP Openshift workloads migration to AWS EKS."
      ]
    },
    {
      title: "Web Development Intern",
      company: "Startup Accelerator",
      period: "Jan 2019 - May 2020",
      description: "Gained hands-on experience in web development, working on various projects and learning best practices in software engineering."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="mr-4 text-purple-600" size={36} />
            Work Experience
          </h1>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-purple-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{exp.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
