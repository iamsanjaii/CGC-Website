import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    // 1. BACKGROUND: We use your deep purple brand color for high contrast
    <footer className="bg-cgc-purple text-white pt-16 pb-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. THE GRID: 3 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLUMN 1: Brand & Desc */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wide">CGC NITT</h3>
            <p className="text-purple-200 text-sm leading-relaxed max-w-xs">
              Providing a safe, confidential, and supportive environment for the 
              NIT Trichy community to foster mental wellness and personal growth.
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cgc-teal">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              {['Home', 'Meet the Team', 'Resources', 'Events', 'Book a Session'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white hover:underline transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cgc-teal">Get in Touch</h4>
            <div className="space-y-4 text-purple-200">
              
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p className="text-sm">
                  CGC Office, 2nd Floor,<br />
                  Students Activity Center,<br />
                  NIT Trichy - 620015
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:cgc@nitt.edu" className="text-sm hover:text-white">cgc@nitt.edu</a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span className="text-sm">+91 431 250 1111</span>
              </div>

            </div>
          </div>

        </div>

        {/* 3. THE BOTTOM BAR: Copyright & Credits */}
        <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-300">
          <p>© 2026 Counseling & Guidance Cell, NITT. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-400">❤</span> by Student Team
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;