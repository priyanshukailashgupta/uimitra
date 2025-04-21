import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Infinity, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const solutions = [
    { name: 'UI/UX & Graphic Design', href: '/services/brand-development' },
    { name: 'Brand Design and Build', href: '/services/digital-marketing' },
    { name: 'Digital Marketing', href: '/services/seo' },
    { name: 'Social Media', href: '/services/social-media' }
  ];

  const contactInfo = {
    phone: '+91 9724823602',
    email: 'info@uimitra.com',
    address: 'E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka, India - 560103'
  };

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: <Linkedin size={20} />,
      className: 'text-primary hover:text-[#0077B5] transition-colors duration-300'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com', 
      icon: <Twitter size={20} />,
      className: 'text-primary hover:text-[#1DA1F2] transition-colors duration-300'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com', 
      icon: <Facebook size={20} />,
      className: 'text-primary hover:text-[#1877F2] transition-colors duration-300'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com', 
      icon: <Instagram size={20} />,
      className: 'text-primary hover:text-[#E4405F] transition-colors duration-300'
    }
  ];

  return (
    <footer className="bg-dark text-white pt-20 pb-8 relative overflow-hidden">
      {/* Animated background gradients */}
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Infinity className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </motion.div>
              <span className="text-xl font-bold group-hover:text-primary transition-colors">UI Mitra</span>
            </Link>
            <p className="text-gray-400">
              Together We Code, Together We Create – UI Mitra: Friendship Meets UI Brilliance.
            </p>
            <div className="space-y-4">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors"/>
                <span>{contactInfo.phone}</span>
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors"/>
                <span>{contactInfo.email}</span>
              </motion.a>
              <motion.div
                className="flex items-start gap-3 text-gray-400 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{contactInfo.address}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-primary"
                      whileHover={{ width: 20 }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative">
              Solutions
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <motion.li
                  key={solution.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={solution.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-primary"
                      whileHover={{ width: 20 }}
                      transition={{ duration: 0.2 }}
                    />
                    {solution.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter and Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative">
              Newsletter
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary rounded-lg pr-12"
                  required
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-md hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 relative inline-block">
                Follow Us
                <motion.span 
                  className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.5 }}
                />
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${social.className} transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {social.icon}
                </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
             <Infinity className="w-8 h-8 text-primary" />
            </motion.div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} UI Mitra. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;