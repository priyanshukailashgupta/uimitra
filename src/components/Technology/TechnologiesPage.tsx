import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Brush, Paintbrush, TrendingUp, Globe,
  ArrowRight
} from 'lucide-react';
import AnimatedText from '../AnimatedText';

interface Technology {
  name: string;
  description: string;
  icon: string;
}

interface TechnologyCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies: Technology[];
}

const TechnologiesPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>('UI/UX Design');

  const categories: TechnologyCategory[] = [
    {
      name: 'UI/UX Design',
      icon: <Brush className="w-6 h-6" />,
      description: 'Tools powering immersive designs & digital experiences',
      technologies: [
        {
          name: 'Figma',
          description: 'Interface & interaction design for web and app layouts',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Adobe XD',
          description: 'Rapid prototyping and wireframing made collaborative',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg'
        },
        {
          name: 'Sketch',
          description: 'Design tool tailored for macOS — clean, scalable layouts',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg'
        },
        {
          name: 'Framer',
          description: 'Interactive UI designs with built-in animation support',
          icon: 'https://www.svgrepo.com/show/364527/framer-logo-fill.svg'
        },
        {
          name: 'Midjourney',
          description: 'AI-generated design ideas and creative concepts',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Midjourney_Emblem_%E2%80%94_Discord.svg'
        },
        {
          name: 'Zeplin',
          description: 'Design collaboration tool converting designs into specs, assets, and code snippets',
          icon: 'https://cdn.worldvectorlogo.com/logos/zeplin.svg'
        },
      ]
    },
    {
      name: 'Brand Design',
      icon: <Paintbrush className="w-6 h-6" />,
      description: 'Tools helping us build powerful and lasting brand identities',
      technologies: [
        {
          name: 'Adobe Illustrator',
          description: 'Professional vector graphics for logos & icons',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg'
        },
        {
          name: 'Adobe Photoshop',
          description: 'Advanced image editing and manipulation',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
        },
        {
          name: 'CorelDRAW',
          description: 'Advanced layout and illustration for brands',
          icon: 'https://cdn.worldvectorlogo.com/logos/coreldraw.svg'
        },
        {
          name: 'Canva Pro',
          description: 'Quick creation of branded visuals and templates',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
        },
        {
          name: 'Dribbble',
          description: "World's leading platform for brand identity design inspiration and portfolios",
          icon: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon.svg'
        },
        {
          name: 'Behance',
          description: 'Showcase brand projects and gather feedback',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg'
        }
      ]
    },
    {
      name: 'Digital Marketing',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Smart tools that drive data-backed digital growth',
      technologies: [
        {
          name: 'Google Analytics',
          description: 'Track visitor behavior and optimize strategy',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
        },
        {
          name: 'SEMrush',
          description: 'SEO, PPC, and keyword insights for digital growth',
          icon: 'https://www.semrush.com/favicon.ico'
        },
        {
          name: 'Mailchimp',
          description: 'Automated, personalized email campaign builder',
          icon: 'https://mailchimp.com/favicon.ico'
        },
        {
          name: 'Ahrefs',
          description: 'Comprehensive SEO and backlink analysis',
          icon: 'https://ahrefs.com/favicon.ico'
        },
        {
          name: 'Moz Pro',
          description: 'SEO audits, link tracking, and competitor analysis',
          icon: 'https://moz.com/favicon.ico'
        },
        {
          name: 'Hotjar',
          description: 'Visualize how users interact with your site via heatmaps',
          icon: 'https://www.hotjar.com/favicon.ico'
        }
      ]
    },
    {
      name: 'Social Media',
      icon: <Globe className="w-6 h-6" />,
      description: 'Boosting your social presence with high-impact tools',
      technologies: [
        {
          name: 'Buffer',
          description: 'Plan and publish content across all major platforms',
          icon: 'https://buffer.com/favicon.ico'
        },
        {
          name: 'Hootsuite',
          description: 'Monitor mentions, schedule posts, and analyze reach',
          icon: 'https://hootsuite.com/favicon.ico'
        },
        {
          name: 'YouTube Studio',
          description: 'Optimize videos and analyze channel growth',
          icon: 'https://www.youtube.com/favicon.ico'
        },
        {
          name: 'LinkedIn',
          description: 'Target and reach professional audiences',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
        },
        {
          name: 'X (Twitter)',
          description: 'Manage real-time Twitter activity and engagement',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg'
        },
        {
          name: 'Meta Business Suite',
          description: 'Instagram & Facebook management from one hub',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-0 pb-20 relative overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden py-6 sm:py-10 md:py-14">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #ED184F 0%, #D1002E 100%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 sm:px-6 py-2 rounded-full bg-white/20 text-white text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Tech Stack
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Technologies We <AnimatedText text="Master" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions. 
              Our tech stack is carefully chosen to deliver the best results for every project.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-white py-4 sm:py-6 md:py-8 sticky top-0 z-30 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  selectedCategory === category.name 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-primary/5 text-dark hover:bg-primary/10'
                }`}
                onClick={() => setSelectedCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {categories.map((category) => (
            <AnimatePresence key={category.name}>
              {selectedCategory === category.name && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h2 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {category.name} <AnimatedText text="Technologies" type="highlight" />
                    </motion.h2>
                    <motion.p 
                      className="text-dark/70 text-sm sm:text-base md:text-lg px-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {category.description}
                    </motion.p>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-primary/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                          borderColor: "rgba(237, 24, 79, 0.4)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div 
                          className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: 5
                            }}
                          >
                            <img 
                              src={tech.icon} 
                              alt={tech.name} 
                              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                            />
                          </motion.div>
                          <motion.h3 
                            className="text-lg sm:text-xl font-bold flex-1 text-left"
                            whileHover={{ color: "var(--primary)" }}
                          >
                            {tech.name}
                          </motion.h3>
                        </motion.div>
                        <motion.p 
                          className="text-dark/70 text-sm sm:text-base text-left"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {tech.description}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="text-center bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 md:p-12 rounded-2xl text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative z-10">
              Ready to Build Something Amazing ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 relative z-10">
              Let's create something extraordinary together.<br/>
              Our expertise, your vision.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium inline-flex items-center gap-2 text-sm sm:text-base hover:bg-white/90 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div 
        className="absolute top-40 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-0 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default TechnologiesPage;