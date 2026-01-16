import React from 'react';
// import { 
//   FacebookIcon, 
//   TwitterIcon, 
//   InstagramIcon, 
//   GoogleIcon,
//   AmohaLogo 
// } from '../assets/icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer - Logo & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
                <h2 className='text-2xl font-bold text-orange-500'>amaha</h2>
             
              <div className="h-10 w-0.5 bg-orange-400"></div>
            </div>
            <p className="text-lg leading-relaxed mb-8 opacity-90 max-w-md">
              For your mental health needs, we're here for you. Whether you're struggling with anxiety, depression, 
              or any mental health concern, get the support you need.
            </p>
            
            {/* Social Icons */}
            {/* <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <GoogleIcon className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 block">Home</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 block">About</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 block">Services</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 block">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <p>📍 Thane, Mumbai</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@amoha.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75 text-center md:text-left">
            © 2026 Amoha Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-orange-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-orange-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
