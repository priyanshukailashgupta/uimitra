import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Code, Database, Cloud, Brain, Smartphone, 
  BarChart, Layout, Globe, ArrowRight, Server,
  Layers, Zap, CheckCircle, Cpu, Monitor
} from 'lucide-react';
import AnimatedText from './AnimatedText';

interface Technology {
  name: string;
  description: string;
  icon: string;
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
  const [selectedCategory, setSelectedCategory] = useState<string>('Frontend');
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const categories: TechnologyCategory[] = [
    {
      name: 'Frontend',
      icon: <Layout />,
      description: 'Building beautiful, responsive user interfaces',
      technologies: [
        {
          name: 'React',
          description: 'A JavaScript library for building user interfaces with reusable components and efficient state management.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
          features: [
            'Component-Based Architecture',
            'Virtual DOM',
            'Rich Ecosystem',
            'Strong Community Support'
          ]
        },
        {
          name: 'Next.js',
          description: 'The React framework for production that enables features like server-side rendering and static site generation.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
          features: [
            'Server-Side Rendering',
            'Static Site Generation',
            'API Routes',
            'Automatic Code Splitting'
          ]
        },
        {
          name: 'TypeScript',
          description: 'A typed superset of JavaScript that adds optional types, classes, and modules.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
          features: [
            'Static Type Checking',
            'Enhanced IDE Support',
            'Early Error Detection',
            'Better Code Organization'
          ]
        }
      ]
    },
    {
      name: 'Backend',
      icon: <Server />,
      description: 'Powering applications with robust server-side solutions',
      technologies: [
        {
          name: 'Node.js',
          description: 'An asynchronous event-driven JavaScript runtime designed to build scalable network applications.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
          features: [
            'Event-Driven Architecture',
            'Non-Blocking I/O',
            'Rich Package Ecosystem',
            'Cross-Platform Support'
          ]
        },
        {
          name: 'Python',
          description: 'A versatile programming language that emphasizes code readability with its notable use of significant whitespace.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
          features: [
            'Easy to Learn and Read',
            'Extensive Libraries',
            'Cross-Platform',
            'Strong Community'
          ]
        },
        {
          name: 'Go',
          description: 'A statically typed, compiled programming language designed at Google, known for its simplicity and efficiency.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
          features: [
            'High Performance',
            'Built-in Concurrency',
            'Simple Syntax',
            'Strong Standard Library'
          ]
        }
      ]
    },
    {
      name: 'AI',
      icon: <Brain />,
      description: 'Implementing cutting-edge artificial intelligence solutions',
      technologies: [
        {
          name: 'TensorFlow',
          description: 'An end-to-end open source platform for machine learning, developed by Google Brain.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
          features: [
            'Deep Learning Support',
            'Flexible Architecture',
            'Production Ready',
            'Hardware Acceleration'
          ]
        },
        {
          name: 'PyTorch',
          description: 'An open source machine learning library developed by Facebook\'s AI Research lab.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
          features: [
            'Dynamic Computational Graphs',
            'Python Integration',
            'Research Friendly',
            'GPU Acceleration'
          ]
        }
      ]
    },
    {
      name: 'Mobile',
      icon: <Smartphone />,
      description: 'Creating seamless mobile experiences across platforms',
      technologies: [
        {
          name: 'React Native',
          description: 'A framework for building native mobile applications using React.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
          features: [
            'Cross-Platform Development',
            'Native Performance',
            'Code Reusability',
            'Hot Reloading'
          ]
        },
        {
          name: 'Flutter',
          description: 'Google\'s UI toolkit for building natively compiled applications.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
          features: [
            'Single Codebase',
            'Hot Reload',
            'Native Performance',
            'Rich Widget Library'
          ]
        }
      ]
    },
    {
      name: 'Database',
      icon: <Database />,
      description: 'Managing data with scalable and efficient solutions',
      technologies: [
        {
          name: 'PostgreSQL',
          description: 'A powerful, open source object-relational database system.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
          features: [
            'ACID Compliance',
            'JSON Support',
            'Extensibility',
            'Full-Text Search'
          ]
        },
        {
          name: 'MongoDB',
          description: 'A document database designed for ease of development and scaling.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
          features: [
            'Document Model',
            'High Scalability',
            'Flexible Schema',
            'Rich Queries'
          ]
        }
      ]
    },
    {
      name: 'Cloud',
      icon: <Cloud />,
      description: 'Deploying and scaling applications in the cloud',
      technologies: [
        {
          name: 'AWS',
          description: 'Amazon Web Services, a comprehensive cloud computing platform.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
          features: [
            'Global Infrastructure',
            'Extensive Services',
            'Pay-as-you-go',
            'High Availability'
          ]
        },
        {
          name: 'Google Cloud',
          description: 'Google\'s suite of cloud computing services.',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg',
          features: [
            'Machine Learning',
            'Big Data',
            'Kubernetes',
            'Global Network'
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
                            <img 
                              src={tech.icon} 
                              alt={tech.name} 
                              className="w-8 h-8"
                            />
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
                                    <CheckCircle className="w-4 h-4 text-primary" />
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