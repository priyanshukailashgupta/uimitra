import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Sparkles, Briefcase, GraduationCap, Award, Target, Users2, Building2, Globe2, Trophy, Rocket } from 'lucide-react';
import AnimatedText from '../AnimatedText';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  education: string;
  achievements: string[];
}

const TeamPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Anderson",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "With over 15 years of experience in UI/UX design, Sarah leads our creative vision and ensures every project exceeds client expectations.",
      experience: "Previously led design teams at Google and Amazon",
      education: "Master's in Human-Computer Interaction, Stanford University",
      achievements: [
        "Adobe Design Achievement Award 2022",
        "Featured in Web Designer Magazine",
        "Speaker at UX Design Summit 2023"
      ]
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Michael brings 12 years of technical expertise in web development and ensures our designs are implemented with precision and performance.",
      experience: "Former Tech Lead at Microsoft",
      education: "BS in Computer Science, MIT",
      achievements: [
        "Published author on Web Development Best Practices",
        "Tech Innovation Award 2023",
        "Open Source Contributor of the Year 2022"
      ]
    }
  ];

  const companyStats = [
    { icon: <Trophy size={24} />, value: "150+", label: "Projects Completed" },
    { icon: <Users2 size={24} />, value: "50+", label: "Team Members" },
    { icon: <Globe2 size={24} />, value: "30+", label: "Countries Served" },
    { icon: <Building2 size={24} />, value: "5+", label: "Global Offices" }
  ];

  const coreValues = [
    {
      icon: <Target size={24} />,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <Users size={24} />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every aspect of our work, from design to delivery."
    },
    {
      icon: <Rocket size={24} />,
      title: "Continuous Growth",
      description: "We invest in our team's development and stay ahead of industry trends."
    }
  ];

  return (
    <div className="min-h-screen pt-0 pb-20 bg-[#fafafa]" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Meet Our <AnimatedText text="Leadership Team" type="gradient" />
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-dark/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate leaders driving innovation and excellence in digital design and development.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                <p className="text-dark/70 mb-6">{member.bio}</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-dark/80">{member.experience}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-dark/80">{member.education}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium text-dark">Key Achievements</span>
                    </div>
                    <ul className="ml-8 space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="text-dark/70 list-disc">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
   </div>
     
  );
};

export default TeamPage;