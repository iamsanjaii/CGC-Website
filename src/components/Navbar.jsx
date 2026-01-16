import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Team', 'Events', 'Resources'];

  return (
    // 1. BG COLOR: Changed to 'bg-cgc-teal' (Your brand color)
    <nav className="bg-cgc-teal shadow-md sticky top-0 z-50 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* --- LEFT: LOGO --- */}
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Added a white circle frame around the logo so it pops */}
            <div className="bg-white p-1 rounded-full shadow-sm group-hover:scale-105 transition-transform">
              <img 
                src={logo} 
                alt="CGC Logo" 
                className="h-10 w-10 object-contain rounded-full" 
              />
            </div>
            {/* Changed text to white */}
            <span className="font-bold text-xl text-white tracking-wide">
              CGC NITT
            </span>
          </div>

          {/* --- MIDDLE: DESKTOP LINKS --- */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                // Text is now white with 90% opacity. Hover makes it 100% white.
                className="text-white/90 hover:text-white font-medium transition duration-200 text-base"
              >
                {link}
              </a>
            ))}
            
            {/* INVERTED BUTTON: White background, Teal text */}
            <button className="bg-white text-cgc-teal px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book Session
            </button>
          </div>

          {/* --- RIGHT: MOBILE MENU BUTTON --- */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-gray-200 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {/* Kept this White for readability on phones, but you could make it teal too */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl rounded-b-2xl">
          <div className="flex flex-col p-4 space-y-4">
             {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-gray-700 hover:text-cgc-teal font-medium pl-2 hover:bg-gray-50 py-2 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
             ))}
             {/* Mobile Button - Back to Teal for contrast against white menu */}
             <button className="w-full bg-cgc-teal text-white py-3 rounded-lg font-bold shadow-md">
                Book Session
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
