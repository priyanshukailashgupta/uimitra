import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Circle, Square, Triangle } from 'lucide-react';
import AnimatedText from '../AnimatedText';
import { useNavigate } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative"
    >
      <motion.div 
        className="border-b border-primary/10 last:border-b-0 relative z-10 backdrop-blur-sm"
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <motion.button
          className="w-full py-6 px-4 flex items-center justify-between text-left"
          onClick={onToggle}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-lg font-medium text-dark">{question}</span>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/5 text-primary"
          >
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pb-6 px-4 text-dark/70"
              >
                {answer}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including UI/UX design, web development, mobile app development, branding, and digital strategy consulting. Our team specializes in creating custom solutions tailored to your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
    },
    {
      question: "What is your design process?",
      answer: "Our design process follows a user-centered approach: 1) Discovery & Research, 2) Strategy & Planning, 3) Design & Prototyping, 4) Development & Testing, 5) Launch & Support. We maintain clear communication and involve clients throughout the process."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive post-launch support and maintenance services. This includes regular updates, performance monitoring, security patches, and technical support to ensure your digital product continues to perform optimally."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically structure payments in milestones: 40% upfront, 30% at the midpoint, and 30% upon completion. For ongoing projects, we offer monthly retainer options. We accept various payment methods including bank transfers and major credit cards."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedText text="Common Questions" type="highlight" />
          </motion.h2>
          
          <motion.p 
            className="text-dark/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to frequently asked questions about our services, process, and pricing
          </motion.p>
        </div>

        <motion.div 
          className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-dark/70 mb-4">Still have questions?</p>
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(237, 24, 79, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/contact')}
          >
            <span className="relative z-10">Contact Us</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>

     

    </section>
  );
};

export default FAQSection;