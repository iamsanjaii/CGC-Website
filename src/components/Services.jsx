import React from 'react';
import { Shield, Heart, Users } from 'lucide-react';

const Services = () => {
  return (
    // 1. SECTION WRAPPER: Adds vertical spacing (py-16) so it doesn't touch the Hero
    <div className="bg-white py-20">
      
      {/* 2. CONSTRAINT: Same max-width wrapper as Navbar to keep edges aligned */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cgc-purple mb-4">
            Organizational Structure & Services
          </h2>
          <div className="w-24 h-1 bg-cgc-teal mx-auto rounded-full"></div>
        </div>

        {/* 4. THE GRID ENGINE:
            - grid-cols-1: 1 column on mobile (stacked)
            - md:grid-cols-3: 3 columns on laptop (side-by-side)
            - gap-8: Space between the cards
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* --- CARD 1: WHO WE ARE --- */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-cgc-purple">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-cgc-purple">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              CGC is your on-campus resource for emotional and mental well-being. 
              Staffed by qualified psychologists and trained peer mentors, our goal is to provide 
              confidential, empathetic, and culturally sensitive support.
            </p>
            <a href="#" className="text-cgc-teal font-semibold hover:underline">
              Meet the Team &rarr;
            </a>
          </div>

          {/* --- CARD 2: WHAT WE OFFER (The Middle One) --- */}
          <div className="bg-cgc-bg p-8 rounded-2xl border border-cgc-teal/20 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            {/* Decoration circle */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cgc-teal/10 rounded-bl-full"></div>
            
            <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 text-cgc-teal relative z-10">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">What We Offer</h3>
            <ul className="space-y-3 text-gray-600 relative z-10">
              {['One-on-one counseling', 'Crisis intervention', 'Group therapy sessions', 'Wellness workshops'].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cgc-teal rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* --- CARD 3: OUR PRINCIPLES --- */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-cgc-teal">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Principles</h3>
            <ul className="space-y-3 text-gray-600">
               {/* Checked List Items */}
              {['Confidentiality', 'Non-judgmental support', 'Inclusivity', 'Empathy and empowerment'].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="text-cgc-teal">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;