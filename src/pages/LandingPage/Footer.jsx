import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BarChart3, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
            
                <BarChart3 className="h-8 w-8 text-cyan-600"  />
            
              <div>
                <h2 className="text-2xl font-bold">Distribution<span className="font-extrabold">System</span></h2>
              
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A powerful, centralized platform designed to simplify and automate day-to-day operations 
              for distribution and trading businesses. Built for efficiency, scalability, and growth.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Features', 'Benefits', 'Pricing', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              {['Inventory Management', 'Sales Tracking', 'Purchase Orders', 'Financial Reports', 'Customer Portal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-400">support@distributionsystem.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 DistributionSystem by Infinitybyte. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;