import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight
} from 'lucide-react';
import UimitraLightLogo from '../assets/Uimitra-light..svg';

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
    { name: 'Contact', href: '/contact' },
    { name: "Let's Connect", href: '/lets-connect' }
  ];

  const services = [
    { name: 'UI/UX & Graphic Design', href: '/services/ui-ux-graphic-design' },
    { name: 'Brand Design and Build', href: '/services/brand-design-build' },
    { name: 'Digital Marketing Services', href: '/services/digital-marketing' },
    { name: 'Social Media Services', href: '/services/social-media' }
  ];

  const contactInfo = {
    phone: '+91 9724823602',
    email: 'info@uimitra.com',
    address: 'E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka, India - 560103'
  };

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookie-policy' }
  ];

  // Social icons SVGs with official vector paths
  const socialIconsRow1 = [
    {
      name: 'Behance',
      href: 'https://www.behance.net/uimitra',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary group-hover:text-white transition-colors duration-300">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300">
          <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.12 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.12 53.6 53.6 0 29.6-24.12 53.6-53.6 53.6zM447.8 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.68s1.2-242.1 0-267.1h92.68v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      href: 'https://discord.com/invite/e3qHyq9Ymb',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 50 50" className="fill-current text-primary group-hover:text-white transition-colors duration-300">
          <path d="M 18.90625 7 C 18.90625 7 12.539063 7.4375 8.375 10.78125 C 8.355469 10.789063 8.332031 10.800781 8.3125 10.8125 C 7.589844 11.480469 7.046875 12.515625 6.375 14 C 5.703125 15.484375 4.992188 17.394531 4.34375 19.53125 C 3.050781 23.808594 2 29.058594 2 34 C 1.996094 34.175781 2.039063 34.347656 2.125 34.5 C 3.585938 37.066406 6.273438 38.617188 8.78125 39.59375 C 11.289063 40.570313 13.605469 40.960938 14.78125 41 C 15.113281 41.011719 15.429688 40.859375 15.625 40.59375 L 18.0625 37.21875 C 20.027344 37.683594 22.332031 38 25 38 C 27.667969 38 29.972656 37.683594 31.9375 37.21875 L 34.375 40.59375 C 34.570313 40.859375 34.886719 41.011719 35.21875 41 C 36.394531 40.960938 38.710938 40.570313 41.21875 39.59375 C 43.726563 38.617188 46.414063 37.066406 47.875 34.5 C 47.960938 34.347656 48.003906 34.175781 48 34 C 48 29.058594 46.949219 23.808594 45.65625 19.53125 C 45.007813 17.394531 44.296875 15.484375 43.625 14 C 42.953125 12.515625 42.410156 11.480469 41.6875 10.8125 C 41.667969 10.800781 41.644531 10.789063 41.625 10.78125 C 37.460938 7.4375 31.09375 7 31.09375 7 C 31.019531 6.992188 30.949219 6.992188 30.875 7 C 30.527344 7.046875 30.234375 7.273438 30.09375 7.59375 C 30.09375 7.59375 29.753906 8.339844 29.53125 9.40625 C 27.582031 9.09375 25.941406 9 25 9 C 24.058594 9 22.417969 9.09375 20.46875 9.40625 C 20.246094 8.339844 19.90625 7.59375 19.90625 7.59375 C 19.734375 7.203125 19.332031 6.964844 18.90625 7 Z M 18.28125 9.15625 C 18.355469 9.359375 18.40625 9.550781 18.46875 9.78125 C 16.214844 10.304688 13.746094 11.160156 11.4375 12.59375 C 11.074219 12.746094 10.835938 13.097656 10.824219 13.492188 C 10.816406 13.882813 11.039063 14.246094 11.390625 14.417969 C 11.746094 14.585938 12.167969 14.535156 12.46875 14.28125 C 17.101563 11.410156 22.996094 11 25 11 C 27.003906 11 32.898438 11.410156 37.53125 14.28125 C 37.832031 14.535156 38.253906 14.585938 38.609375 14.417969 C 38.960938 14.246094 39.183594 13.882813 39.175781 13.492188 C 39.164063 13.097656 38.925781 12.746094 38.5625 12.59375 C 36.253906 11.160156 33.785156 10.304688 31.53125 9.78125 C 31.59375 9.550781 31.644531 9.359375 31.71875 9.15625 C 32.859375 9.296875 37.292969 9.894531 40.3125 12.28125 C 40.507813 12.460938 41.1875 13.460938 41.8125 14.84375 C 42.4375 16.226563 43.09375 18.027344 43.71875 20.09375 C 44.9375 24.125 45.921875 29.097656 45.96875 33.65625 C 44.832031 35.496094 42.699219 36.863281 40.5 37.71875 C 38.5 38.496094 36.632813 38.84375 35.65625 38.9375 L 33.96875 36.65625 C 34.828125 36.378906 35.601563 36.078125 36.28125 35.78125 C 38.804688 34.671875 40.15625 33.5 40.15625 33.5 C 40.570313 33.128906 40.605469 32.492188 40.234375 32.078125 C 39.863281 31.664063 39.226563 31.628906 38.8125 32 C 38.8125 32 37.765625 32.957031 35.46875 33.96875 C 34.625 34.339844 33.601563 34.707031 32.4375 35.03125 C 32.167969 35 31.898438 35.078125 31.6875 35.25 C 29.824219 35.703125 27.609375 36 25 36 C 22.371094 36 20.152344 35.675781 18.28125 35.21875 C 18.070313 35.078125 17.8125 35.019531 17.5625 35.0625 C 16.394531 34.738281 15.378906 34.339844 14.53125 33.96875 C 12.234375 32.957031 11.1875 32 11.1875 32 C 10.960938 31.789063 10.648438 31.699219 10.34375 31.75 C 9.957031 31.808594 9.636719 32.085938 9.53125 32.464844 C 9.421875 32.839844 9.546875 33.246094 9.84375 33.5 C 9.84375 33.5 11.195313 34.671875 13.71875 35.78125 C 14.398438 36.078125 15.171875 36.378906 16.03125 36.65625 L 14.34375 38.9375 C 13.367188 38.84375 11.5 38.496094 9.5 37.71875 C 7.300781 36.863281 5.167969 35.496094 4.03125 33.65625 C 4.078125 29.097656 5.0625 24.125 6.28125 20.09375 C 6.90625 18.027344 7.5625 16.226563 8.1875 14.84375 C 8.8125 13.460938 9.492188 12.460938 9.6875 12.28125 C 12.707031 9.894531 17.140625 9.296875 18.28125 9.15625 Z M 18.5 21 C 15.949219 21 14 23.316406 14 26 C 14 28.683594 15.949219 31 18.5 31 C 21.050781 31 23 28.683594 23 26 C 23 23.316406 21.050781 21 18.5 21 Z M 31.5 21 C 28.949219 21 27 23.316406 27 26 C 27 28.683594 28.949219 31 31.5 31 C 34.050781 31 36 28.683594 36 26 C 36 23.316406 34.050781 21 31.5 21 Z M 18.5 23 C 19.816406 23 21 24.265625 21 26 C 21 27.734375 19.816406 29 18.5 29 C 17.183594 29 16 27.734375 16 26 C 16 24.265625 17.183594 23 18.5 23 Z M 31.5 23 C 32.816406 23 34 24.265625 34 26 C 34 27.734375 32.816406 29 31.5 29 C 30.183594 29 29 27.734375 29 26 C 29 24.265625 30.183594 23 31.5 23 Z"></path>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@uimitra',
      icon: (
        <svg width="24" height="24" viewBox="0 0 576 512" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300">
          <path d="M549.655 124.083c-6.281-23.725-24.958-42.401-48.684-48.684C465.454 64 288 64 288 64s-177.454 0-212.971 11.399c-23.726 6.283-42.403 24.959-48.684 48.684C16 159.6 16 256 16 256s0 96.4 10.345 131.917c6.281 23.725 24.958 42.401 48.684 48.684C110.546 448 288 448 288 448s177.454 0 212.971-11.399c23.726-6.283 42.403-24.959 48.684-48.684C560 352.4 560 256 560 256s0-96.4-10.345-131.917zM232 336V176l142.857 80L232 336z"/>
        </svg>
      )
    }
  ];

  const socialIconsRow2 = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/uimitra/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300">
          <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
        </svg>
      )
    },
    {
      name: 'X',
      href: 'https://x.com/uimitra',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300">
          <path d="M17.53 2.47a1.75 1.75 0 0 1 2.47 2.47l-5.06 5.06 5.06 5.06a1.75 1.75 0 0 1-2.47 2.47l-5.06-5.06-5.06 5.06a1.75 1.75 0 0 1-2.47-2.47l5.06-5.06-5.06-5.06A1.75 1.75 0 0 1 6.47 2.47l5.06 5.06 5.06-5.06z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 320 512" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300">
          <path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.36 44.38-121.36 124.72v70.62H22.89V288h81.11v224h100.2V288z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      href: 'https://www.threads.com/@uimitra',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300">
          <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 14.660156 A 1.50015 1.50015 0 1 0 9 14.660156 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 25 A 1.50015 1.50015 0 1 0 42 25 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 24.162109 12.001953 C 20.643109 12.025953 17.931609 13.217922 16.099609 15.544922 C 14.485609 17.597922 13.652047 20.439719 13.623047 24.011719 C 13.651047 27.562719 14.484609 30.403078 16.099609 32.455078 C 17.930609 34.782078 20.643641 35.974047 24.181641 35.998047 C 27.309641 35.977047 29.520609 35.150266 31.349609 33.322266 C 33.779609 30.894266 33.703391 27.848562 32.900391 25.976562 C 32.320391 24.624562 31.223609 23.5305 29.724609 22.8125 C 29.689609 22.7945 29.653187 22.778719 29.617188 22.761719 C 29.353188 19.381719 27.403266 17.438969 24.197266 17.417969 C 22.253266 17.417969 20.632812 18.253484 19.632812 19.771484 C 19.520813 19.941484 19.565375 20.170109 19.734375 20.287109 L 21.402344 21.431641 C 21.485344 21.488641 21.587547 21.509234 21.685547 21.490234 C 21.783547 21.471234 21.872734 21.412125 21.927734 21.328125 C 22.531734 20.413125 23.495609 20.222656 24.224609 20.222656 C 25.110609 20.227656 25.768641 20.473125 26.181641 20.953125 C 26.404641 21.212125 26.575359 21.550891 26.693359 21.962891 C 25.936359 21.871891 25.131063 21.850437 24.289062 21.898438 C 21.183063 22.077437 19.185266 23.917516 19.322266 26.478516 C 19.391266 27.784516 20.041344 28.909531 21.152344 29.644531 C 22.070344 30.249531 23.249609 30.549469 24.474609 30.480469 C 26.095609 30.391469 27.370625 29.767953 28.265625 28.626953 C 28.838625 27.897953 29.225359 27.002344 29.443359 25.902344 C 29.865359 26.243344 30.175141 26.642703 30.369141 27.095703 C 30.824141 28.153703 30.848016 29.896172 29.416016 31.326172 C 28.122016 32.619172 26.552781 33.180266 24.175781 33.197266 C 21.533781 33.177266 19.543766 32.339031 18.259766 30.707031 C 17.040766 29.157031 16.409719 26.900906 16.386719 24.003906 C 16.409719 21.100906 17.040766 18.842969 18.259766 17.292969 C 19.543766 15.660969 21.533922 14.821734 24.169922 14.802734 C 26.834922 14.822734 28.862266 15.666547 30.197266 17.310547 C 30.850266 18.114547 31.350594 19.132844 31.683594 20.339844 C 31.738594 20.537844 31.944578 20.654516 32.142578 20.603516 L 34.097656 20.082031 C 34.194656 20.057031 34.276172 19.99225 34.326172 19.90625 C 34.375172 19.81825 34.387328 19.716141 34.361328 19.619141 C 33.930328 18.034141 33.246172 16.658344 32.326172 15.527344 C 30.444172 13.212344 27.705109 12.025953 24.162109 12.001953 z M 7.4765625 18.882812 A 1.50015 1.50015 0 0 0 6 20.404297 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 32.787109 A 1.50015 1.50015 0 1 0 39 32.787109 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 20.404297 A 1.50015 1.50015 0 0 0 7.4765625 18.882812 z M 25.123047 24.673828 C 25.720047 24.673828 26.289312 24.720453 26.820312 24.814453 C 26.536313 27.228453 25.404266 27.623594 24.322266 27.683594 C 23.580266 27.712594 22.892469 27.527203 22.480469 27.158203 C 22.229469 26.933203 22.093172 26.653172 22.076172 26.326172 C 22.038172 25.605172 22.639359 24.798359 24.443359 24.693359 C 24.673359 24.680359 24.900047 24.673828 25.123047 24.673828 z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#000F23] text-white pt-20 pb-8 relative overflow-hidden">
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
                className="flex items-center -mt-9"
              >
                <img 
                  src={UimitraLightLogo} 
                  alt="UI Mitra Logo" 
                  className="w-16 h-16 msm:w-20 msm:h-20 lsm:w-24 lsm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 4k:w-36 4k:h-36 group-hover:opacity-80 transition-opacity"
                />
              </motion.div>
            </Link>
            <p className="text-gray-400">
              UI Meets Trust. UX Meets Mitra.
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
            className="mt-16 md:mt-0"
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

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-6 relative">
              Services
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <ul className="space-y-3">
              {services.map((solution, index) => (
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
            className="mt-16 md:mt-0"
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
                  className="absolute right-2 top-2 text-primary p-2 rounded-md hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>

            {/* Social Links */}
            <div className="mt-8 flex flex-col items-center">
              <h4 className="text-sm font-semibold mb-6 relative inline-block text-center">
                Follow Us
              </h4>
              <div className="grid grid-cols-4 gap-6 mb-6 max-w-md mx-auto">
                {socialIconsRow1.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-2.5">
                      <div className="w-full h-full flex items-center justify-center">
                        {social.icon}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
                {socialIconsRow2.map((social, index) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-2.5">
                      <div className="w-full h-full flex items-center justify-center">
                    {social.icon}
                      </div>
                    </div>
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
              transition={{ duration: 0.6 }}
            >
              <img 
                src={UimitraLightLogo} 
                alt="UI Mitra Logo" 
                className="w-16 h-16 msm:w-20 msm:h-20 lsm:w-24 lsm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 4k:w-36 4k:h-36"
              />
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