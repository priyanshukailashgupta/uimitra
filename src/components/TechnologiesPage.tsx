import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Figma, PenTool, Image, Sparkles, 
  FileImage, Palette, FileText, Share2,
  BarChart, Search, Mail, Hash,
  Calendar, MessageSquare, Video, 
  ArrowRight, Layers, Zap, CheckCircle,
  Code, Database, Cloud, Brain, Smartphone,
  Server, Layers as LucideLayers, Zap as LucideZap, CheckCircle as LucideCheckCircle,
  Cpu, Monitor
} from 'lucide-react';
import AnimatedText from './AnimatedText';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
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
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const categories: TechnologyCategory[] = [
    {
      name: 'UI/UX Design',
      icon: <PenTool />,
      description: 'Tools powering immersive designs & digital experiences',
      technologies: [
        {
          name: 'Figma',
          description: 'Interface & interaction design',
          icon: <Figma className="w-8 h-8" />,
          features: [
            'Real-time Collaboration',
            'Component Libraries',
            'Prototyping',
            'Design Systems'
          ]
        },
        {
          name: 'Adobe XD',
          description: 'UI/UX prototyping',
          icon: <PenTool className="w-8 h-8" />,
          features: [
            'Interactive Prototypes',
            'Auto-Animate',
            'Repeat Grid',
            'Voice Prototyping'
          ]
        },
        {
          name: 'Sketch',
          description: 'Web & app design layouts',
          icon: <Image className="w-8 h-8" />,
          features: [
            'Vector Editing',
            'Symbols',
            'Plugins',
            'Export Options'
          ]
        },
        {
          name: 'Framer',
          description: 'Motion & micro-interactions',
          icon: <Sparkles className="w-8 h-8" />,
          features: [
            'Advanced Animations',
            'Code Components',
            'Interactive Design',
            'Real-time Preview'
          ]
        },
        {
          name: 'Midjourney',
          description: 'AI-generated design inspiration',
          icon: <Brain className="w-8 h-8" />,
          features: [
            'AI Art Generation',
            'Style Transfer',
            'Creative Exploration',
            'Rapid Prototyping'
          ]
        },
        {
          name: 'LottieFiles',
          description: 'Lightweight animations integration',
          icon: <FileImage className="w-8 h-8" />,
          features: [
            'Vector Animations',
            'Cross-platform',
            'Lightweight',
            'Easy Integration'
          ]
        }
      ]
    },
    {
      name: 'Brand Design',
      icon: <Palette />,
      description: 'Tools helping us build powerful and lasting brand identities',
      technologies: [
        {
          name: 'Adobe Illustrator',
          description: 'Iconic logos & vector graphics',
          icon: <PenTool className="w-8 h-8" />,
          features: [
            'Vector Graphics',
            'Typography Tools',
            'Color Management',
            'Artboards'
          ]
        },
        {
          name: 'Canva Pro',
          description: 'Agile brand collateral creation',
          icon: <FileText className="w-8 h-8" />,
          features: [
            'Templates',
            'Brand Kits',
            'Collaboration',
            'Asset Library'
          ]
        },
        {
          name: 'CorelDRAW',
          description: 'High-end brand illustrations',
          icon: <Image className="w-8 h-8" />,
          features: [
            'Vector Illustration',
            'Typography',
            'Color Management',
            'Layout Tools'
          ]
        },
        {
          name: 'Coolors',
          description: 'Brand color palette generation',
          icon: <Palette className="w-8 h-8" />,
          features: [
            'Color Schemes',
            'Palette Generation',
            'Export Options',
            'Color Harmony'
          ]
        },
        {
          name: 'Frontify',
          description: 'Brand guidelines & asset management',
          icon: <FileText className="w-8 h-8" />,
          features: [
            'Brand Guidelines',
            'Asset Management',
            'Collaboration',
            'Version Control'
          ]
        },
        {
          name: 'Behance',
          description: 'Creative brand portfolio sharing',
          icon: <Share2 className="w-8 h-8" />,
          features: [
            'Portfolio Showcase',
            'Creative Community',
            'Project Sharing',
            'Networking'
          ]
        }
      ]
    },
    {
      name: 'Digital Marketing',
      icon: <BarChart />,
      description: 'Smart tools that drive data-backed digital growth',
      technologies: [
        {
          name: 'Google Analytics',
          description: 'Web traffic & insights',
          icon: <BarChart className="w-8 h-8" />,
          features: [
            'Traffic Analysis',
            'User Behavior',
            'Conversion Tracking',
            'Custom Reports'
          ]
        },
        {
          name: 'SEMRush',
          description: 'SEO strategy & competitor tracking',
          icon: <Search className="w-8 h-8" />,
          features: [
            'Keyword Research',
            'Competitor Analysis',
            'Backlink Tracking',
            'Rank Tracking'
          ]
        },
        {
          name: 'Mailchimp',
          description: 'Targeted email marketing',
          icon: <Mail className="w-8 h-8" />,
          features: [
            'Email Campaigns',
            'Automation',
            'Analytics',
            'Audience Management'
          ]
        },
        {
          name: 'Ubersuggest',
          description: 'Keyword planning',
          icon: <Hash className="w-8 h-8" />,
          features: [
            'Keyword Research',
            'Content Ideas',
            'Competitor Analysis',
            'SEO Audit'
          ]
        },
        {
          name: 'Moz Pro',
          description: 'On-page & off-page SEO audits',
          icon: <Search className="w-8 h-8" />,
          features: [
            'Site Audits',
            'Rank Tracking',
            'Link Analysis',
            'Keyword Research'
          ]
        },
        {
          name: 'Hotjar',
          description: 'User behavior heatmaps',
          icon: <Layers className="w-8 h-8" />,
          features: [
            'Heatmaps',
            'Session Recordings',
            'Feedback Polls',
            'Conversion Funnels'
          ]
        }
      ]
    },
    {
      name: 'Social Media',
      icon: <Share2 />,
      description: 'Boosting your social presence with high-impact tools',
      technologies: [
        {
          name: 'Buffer',
          description: 'Multi-platform post scheduling',
          icon: <Calendar className="w-8 h-8" />,
          features: [
            'Post Scheduling',
            'Analytics',
            'Team Collaboration',
            'Content Calendar'
          ]
        },
        {
          name: 'Hootsuite',
          description: 'Social media management',
          icon: <MessageSquare className="w-8 h-8" />,
          features: [
            'Social Monitoring',
            'Content Scheduling',
            'Analytics',
            'Team Management'
          ]
        },
        {
          name: 'YouTube Studio',
          description: 'Channel analytics & video optimization',
          icon: <Video className="w-8 h-8" />,
          features: [
            'Video Analytics',
            'Content Management',
            'Monetization',
            'Audience Insights'
          ]
        },
        {
          name: 'LinkedIn Campaign Manager',
          description: 'B2B ad strategy',
          icon: <BarChart className="w-8 h-8" />,
          features: [
            'Ad Campaigns',
            'Audience Targeting',
            'Performance Tracking',
            'Lead Generation'
          ]
        },
        {
          name: 'X Pro',
          description: 'Real-time engagement tracking',
          icon: <MessageSquare className="w-8 h-8" />,
          features: [
            'Tweet Management',
            'Analytics',
            'Team Collaboration',
            'Content Scheduling'
          ]
        },
        {
          name: 'Meta Business Suite',
          description: 'Instagram & Facebook synergy',
          icon: <Share2 className="w-8 h-8" />,
          features: [
            'Cross-platform Management',
            'Ad Campaigns',
            'Analytics',
            'Content Scheduling'
          ]
        }
      ]
    }
  ];

  const handleTechClick = (tech: Technology) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--gradient-1), transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 rounded-full bg-primary/10 text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Tech Stack
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Technologies We <AnimatedText text="Master" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-dark/70 max-w-3xl mx-auto mb-12"
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
      <div className="bg-white py-8 sticky top-20 z-30 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.name 
                    ? 'bg-primary text-white' 
                    : 'bg-primary/5 text-dark hover:bg-primary/10'
                }`}
                onClick={() => setSelectedCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {category.name} <AnimatedText text="Technologies" type="highlight" />
                    </motion.h2>
                    <p className="text-dark/70">{category.description}</p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className={`p-6 bg-white rounded-xl shadow-lg border transition-all duration-300 ${
                          selectedTech?.name === tech.name 
                            ? 'border-primary' 
                            : 'border-primary/10'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => handleTechClick(tech)}
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div 
                            className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {tech.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold">{tech.name}</h3>
                          </div>
                        </div>

                        <AnimatePresence>
                          {selectedTech?.name === tech.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-dark/70 mb-4">{tech.description}</p>
                              <div className="space-y-2">
                                {tech.features.map((feature, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex items-center gap-2 text-dark/70"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    <LucideCheckCircle className="w-4 h-4 text-primary" />
                                    {feature}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-white relative overflow-hidden"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Ready to Build Something Amazing ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create something extraordinary together.<br/>
              Our expertise, your vision.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div 
        className="absolute top-40 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
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