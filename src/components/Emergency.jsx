import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

const Emergency = () => {
  return (
    // 1. OUTER CONTAINER: White background to separate it from the services
    <div className="bg-white py-16">
      
      {/* 2. THE ALERT BOX: distinct red/pink background to grab attention */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          
          {/* LEFT SIDE: The Message */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-red-600">
              <AlertCircle size={28} />
              <span className="font-bold tracking-wide uppercase text-sm">Emergency Support</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Need Help Now?
            </h2>
            <p className="text-gray-600 max-w-md">
              If you are in distress or need immediate support, please don't hesitate to reach out. 
              We are here for you 24/7.
            </p>
          </div>

          {/* RIGHT SIDE: The Numbers (Cards) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            
            {/* Card 1: Campus Team */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex-1 text-center">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Campus Emergency</p>
              <p className="text-2xl font-bold text-red-600 mb-1">9486001111</p>
              <p className="text-sm text-gray-500">Security Office</p>
            </div>

            {/* Card 2: National Helpline */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex-1 text-center">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">National Helpline</p>
              <p className="text-2xl font-bold text-cgc-purple mb-1">14416</p>
              <p className="text-sm text-gray-500">Tele-MANAS</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Emergency;