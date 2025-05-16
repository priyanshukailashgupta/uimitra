import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Palette, PenTool, Image, Video, Play, 
  Layers, Monitor, Smartphone, Instagram,
  Youtube, Figma, Brush, Sparkles, Target,
  Users, ArrowRight, MessageSquare, Rocket,
  FileImage, Film, Lightbulb, Zap
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

const GraphicsDesignPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const services = [
    {
      title: "Brand Identity Design",
      description: "Crafting unique visual identities that tell your brand story",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Motion Graphics",
      description: "Bringing your brand to life with stunning animations",
      icon: <Video className="w-6 h-6" />,
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Social Media Design",
      description: "Eye-catching visuals for your social presence",
      icon: <Instagram className="w-6 h-6" />,
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Digital Illustrations",
      description: "Custom illustrations that make your content unique",
      icon: <PenTool className="w-6 h-6" />,
      gradient: "from-[#F47A52]/90 to-[#B54F2E]/95"
    }
  ];

  const tools = [
    { icon: <Image />, name: "Adobe Photoshop" },
    { icon: <PenTool />, name: "Adobe Illustrator" },
    { icon: <Play />, name: "Adobe After Effects" },
    { icon: <Figma />, name: "Figma" },
    { icon: <Brush />, name: "Procreate" },
    { icon: <Layers />, name: "Sketch" }
  ];

  const process = [
    {
      icon: <Lightbulb />,
      title: "Discovery",
      description: "Understanding your brand, goals, and target audience"
    },
    {
      icon: <Target />,
      title: "Strategy",
      description: "Developing a creative approach that aligns with your objectives"
    },
    {
      icon: <PenTool />,
      title: "Design",
      description: "Creating stunning visuals that capture your vision"
    },
    {
      icon: <Zap />,
      title: "Refine",
      description: "Perfecting every detail through collaborative feedback"
    }
  ];

  const features = [
    {
      icon: <FileImage />,
      title: "Static Graphics",
      items: ["Brand Identity", "Marketing Materials", "Social Media Posts", "Print Design"]
    },
    {
      icon: <Film />,
      title: "Motion Design",
      items: ["Logo Animation", "Video Intros", "Social Media Stories", "UI Animations"]
    },
    {
      icon: <Monitor />,
      title: "Digital Design",
      items: ["Web Graphics", "Email Templates", "Banner Ads", "Infographics"]
    },
    {
      icon: <Smartphone />,
      title: "Mobile Design",
      items: ["App Graphics", "Mobile Ads", "Story Templates", "Icon Design"]
    }
  ];

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #ED184F 0%, #D1002E 100%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 rounded-full bg-white/20 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Graphics & Motion Design
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Bringing Ideas to Life with{' '}
              <AnimatedText text="Creative Design" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We transform concepts into compelling visuals that captivate your audience
              and elevate your brand. From static designs to dynamic motion graphics,
              we create experiences that leave lasting impressions.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#ED184F] to-[#D1002E]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
              Our Creative <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden group bg-white p-8 shadow-sm border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                  <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                <h3 className="text-xl font-bold mb-2 text-dark">{service.title}</h3>
                <p className="text-dark/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
              What We <AnimatedText text="Create" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden group bg-white p-8 shadow-sm border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-dark">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-dark/80">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
              Our Creative <AnimatedText text="Process" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl overflow-hidden group bg-white shadow-sm border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-dark">{step.title}</h3>
                <p className="text-dark/80 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
              Tools We <AnimatedText text="Master" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm border border-primary/10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {tool.icon}
                </motion.div>
                <p className="font-medium text-dark/80">{tool.name}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Create Something Amazing ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's bring your vision to life with stunning design.<br/>
              Your story, our creativity.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
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

export default GraphicsDesignPage;