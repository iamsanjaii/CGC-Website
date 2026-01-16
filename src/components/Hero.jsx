import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react'; // Icons for buttons

const Hero = () => {
  return (
    // 1. OUTER WRAPPER: Background color covers the entire width of the screen
    <div className="bg-cgc-bg min-h-[90vh] flex items-center relative overflow-hidden">
      
      {/* 2. DECORATION (Optional): A faint background blob to make it look 'designed' */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cgc-teal/10 to-transparent blur-3xl" />

      {/* 3. CONSTRAINT WRAPPER: Keeps content centered and stops it from getting too wide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* 4. THE FLEXBOX ENGINE: 
            - 'flex-col': Stack vertically on mobile.
            - 'md:flex-row': Switch to side-by-side on laptops (md).
            - 'gap-12': Adds space between the text and the image. 
        */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          {/* 'md:w-1/2': Takes up 50% width on desktop */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            
            {/* The 'Pill' Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cgc-teal/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cgc-teal animate-pulse"></span>
              <span className="text-xs font-semibold text-cgc-purple tracking-wide uppercase">
                Here for you 24/7
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              We are here to <br />
              <span className="text-cgc-teal relative">
                listen.
                {/* Underline effect */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-cgc-purple opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Professional guidance and mental wellness support for the NITT community. 
              A safe space to share, heal, and grow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 bg-cgc-teal text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-all hover:scale-105">
                Get Help Now
                <ArrowRight size={20} />
              </button>
              
              <button className="flex items-center justify-center gap-2 bg-white text-cgc-purple border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                <BookOpen size={20} />
                Explore Resources
              </button>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE PLACEHOLDER --- */}
          {/* This mimics the Sunshine website's graphic style */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center relative z-10 overflow-hidden group">
               {/* Placeholder text until you add a real illustration */}
               <div className="text-center p-6">
                  <div className="w-20 h-20 bg-cgc-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                    ❤️
                  </div>
                  <p className="text-gray-400 font-medium">Add "Counseling Illustration" Here</p>
               </div>
            </div>

            {/* Decoration Elements behind the image */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cgc-purple rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cgc-teal rounded-full opacity-10 blur-2xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;