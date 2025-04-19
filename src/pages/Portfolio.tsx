import { motion } from "framer-motion";
import { Briefcase, ChevronDown, Landmark } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useEffect } from "react";

const WorkExperience = () => {
  useEffect(() => {
    document.title = "Work Experience | Hossam Mousa";
  }, []);

  const experiences = [
    {
      title: "Senior Solutions Architect",
      company: "Backbase",
      location: "UAE",
      country: "UAE",
      period: "Feb 2024 - Present",
      description: [],
      icon: Landmark
    },
    {
      title: "Software Solutions Architect",
      company: "Emirates Group",
      location: "UAE",
      country: "UAE",
      period: "Nov 2021 - Dec 2023",
      description: [
        "Designed and implemented diverse architectural solutions and ADRs for Web and Mobile business requirements.",
        "Collaborated with enterprise architects and stakeholders to develop architecture roadmaps and technical vision for containerization initiatives.",
        "Facilitated daily solution refinement sessions and technical design discussions with feature teams.",
        "Contributed to enterprise API guidelines development and reviews, focusing on omni-channel service integration.",
        "Conducted comprehensive architecture reviews to identify system optimization opportunities.",
        "Led strategic initiatives including WMAP Openshift workloads migration to AWS EKS."
      ],
      icon: Landmark
    },
    {
      title: "Digital Business Solutions Technical Architect",
      company: "Gulf Business Machines (GBM)",
      location: "UAE",
      country: "UAE",
      period: "2015 - 2021",
      description: [
        "Architected and delivered comprehensive system designs at both strategic and implementation levels, while organizing delivery teams for maximum efficiency.",
        "Provided direct technical leadership and mentoring to development teams, ensuring project success through rigorous code reviews, system demos, and architectural workshops.",
        "Led collaborative discussions with key stakeholders to bridge business requirements with technical solutions, building consensus and exploring innovative approaches.",
        "Drove pre-sales initiatives through technical demonstrations, creating proof-of-concepts, and providing expert analysis of RFP requirements.",
        "Established and maintained strong client relationships through consistent engagement and technical excellence, ensuring long-term partnership success.",
        "Spearheaded large-scale digital transformation projects for major clients including Emaar (Malls, Properties, Finance), implementing business automation and content management solutions.",
        "Led technical implementation of enterprise solutions using IBM Case Manager, FileNet, and J2EE technologies for e-services and business process automation.",
        "Executed complex technical solutions following established architectural designs while ensuring alignment with client requirements and industry best practices."
      ],
      icon: Landmark
    },
    {
      title: "Enterprise Content Management Specialist / J2EE Senior Developer",
      company: "EBLA Computer Consultancy",
      location: "Qatar",
      country: "Qatar",
      period: "2013 - 2015",
      description: [
        "Provided strategic technical leadership and hands-on mentoring to cross-functional teams, fostering collaboration and ensuring successful project delivery.",
        "Created detailed technical designs at both architectural and implementation levels, establishing comprehensive specifications aligned with business objectives.",
        "Architected and implemented enterprise solutions using IBM FileNet and IBM BPM Case Manager, incorporating industry best practices to optimize business processes.",
        "Developed sophisticated J2EE applications with focus on maintainability, scalability, and adherence to enterprise coding standards."
      ],
      icon: Landmark
    },
    {
      title: "IT Specialist - Software Engineer",
      company: "IBM Global Delivery Center",
      location: "Egypt",
      country: "Egypt",
      period: "2010 - 2013",
      description: [
        "Engineered robust IBM FileNet and BPM Case Manager solutions, implementing best practices to optimize business processes and deliver tailored enterprise applications.",
        "Developed high-performance J2EE applications, ensuring strict adherence to coding standards and meeting complex client requirements with precision and efficiency."
      ],
      icon: Landmark
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12 flex items-center">
            <Briefcase className="mr-4 text-purple-600" size={36} />
            Work Experience
          </h1>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Collapsible className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                  <CollapsibleTrigger className="w-full p-6 flex items-start justify-between">
                    <div className="flex items-start space-x-6">
                      <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-purple-100 rounded-xl">
                        <exp.icon className="text-purple-600" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 text-left mb-2">{exp.title}</h3>
                        <p className="text-purple-600 font-medium text-left text-lg mb-1">{exp.company}</p>
                        <p className="text-gray-500 text-sm text-left flex items-center space-x-2">
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </p>
                      </div>
                    </div>
                    <ChevronDown className="h-6 w-6 text-purple-400 transition-transform duration-200 collapsible-trigger" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc space-y-3 text-gray-600 ml-24 leading-relaxed">
                        {exp.description.map((item, i) => (
                          <li key={i} className="pl-2">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 ml-20">{exp.description}</p>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
