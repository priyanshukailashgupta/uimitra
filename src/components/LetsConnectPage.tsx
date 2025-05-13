import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin,
  ArrowRight, MessageCircle, Calendar
} from 'lucide-react';

const LetsConnectPage: React.FC = () => {
  const contactMethods = [
    {
      title: "Email Us",
      description: "Get in touch with our team",
      icon: <Mail className="w-6 h-6" />,
      value: "info@uimitra.com",
      link: "mailto:info@uimitra.com"
    },
    {
      title: "Call Us",
      description: "Speak with our experts",
      icon: <Phone className="w-6 h-6" />,
      value: "+91 9724823602",
      link: "tel:+919724823602"
    },
    {
      title: "Visit Us",
      description: "Meet us at our office",
      icon: <MapPin className="w-6 h-6" />,
      value: "E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka, India - 560103",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: <Linkedin size={24} />,
      className: 'bg-[#0077B5] hover:bg-[#0077B5]/90'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com', 
      icon: <Twitter size={24} />,
      className: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com', 
      icon: <Facebook size={24} />,
      className: 'bg-[#4267B2] hover:bg-[#4267B2]/90'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com', 
      icon: <Instagram size={24} />,
      className: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, var(--gradient-1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, var(--gradient-2) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, var(--gradient-3) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, var(--gradient-4) 0%, transparent 50%)"
            ]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We're here to help bring your ideas to life.
              Choose your preferred way to reach out.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <a 
                href={method.link}
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group"
              >
                {method.value}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Connect */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Connect on Social Media</h2>
            <p className="text-gray-600">
              Follow us for the latest updates, insights, and creative inspiration.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${social.className} transition-all duration-300`}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Start a Conversation</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Have questions about our services? Want to discuss your project? 
              Our team is ready to help you bring your vision to life.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Schedule a Meeting</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Book a consultation with our experts. We'll discuss your project 
              requirements and explore how we can help you achieve your goals.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Book a Meeting
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LetsConnectPage; 