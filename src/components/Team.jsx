import React from 'react';
import { Mail, Phone, User } from 'lucide-react';
// Import the data we just created
import { cgcMembers, ugMembers, pgMembers } from '../data/teamData';

// 1. Reusable Card Component
const MemberCard = ({ member, isStudent }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col items-center p-6 text-center group">
    
    {/* Profile Photo */}
    <div className="w-32 h-32 mb-4 relative">
      <div className="absolute inset-0 bg-cgc-teal/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <img 
        src={member.photo} 
        alt={member.name} 
        className="w-full h-full object-cover rounded-full border-4 border-gray-50 shadow-sm group-hover:border-cgc-teal transition-colors"
        onError={(e) => {
          e.target.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=random"; // Fallback if image missing
        }}
      />
    </div>

    {/* Name & Role */}
    <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
    
    {/* If student, show Roll Number. If Faculty, show Role */}
    {isStudent ? (
      <span className="text-xs font-bold text-cgc-teal bg-teal-50 px-3 py-1 rounded-full mb-3">
        {member.roll}
      </span>
    ) : (
      <p className="text-sm text-cgc-teal font-bold mb-3 uppercase tracking-wide">
        {member.role}
      </p>
    )}

    {/* Contact Info */}
    <div className="w-full space-y-2 pt-4 border-t border-gray-100">
      <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-cgc-teal transition-colors">
        <Mail size={16} />
        <span className="truncate max-w-[200px]">{member.email}</span>
      </a>
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
        <Phone size={16} />
        <span>{member.phone}</span>
      </div>
    </div>
  </div>
);

// 2. Main Page Component
const Team = () => {
  return (
    <div className="min-h-screen bg-cgc-bg py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-cgc-purple mb-4">Meet the Team</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We are here to help. Reach out to any of our student representatives or faculty coordinators.
        </p>
      </div>

      {/* SECTION 1: CGC MEMBERS */}
      <div className="mb-20">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-gray-300 w-16"></div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">CGC Coordinators</h2>
          <div className="h-px bg-gray-300 w-16"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cgcMembers.map((m, i) => <MemberCard key={i} member={m} isStudent={false} />)}
        </div>
      </div>

      {/* SECTION 2: UG REPRESENTATIVES */}
      <div className="mb-20">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-gray-300 w-16"></div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">UG Representatives</h2>
          <div className="h-px bg-gray-300 w-16"></div>
        </div>
        {/* Using grid-cols-4 for students to fit more on screen */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ugMembers.map((m, i) => <MemberCard key={i} member={m} isStudent={true} />)}
        </div>
      </div>

      {/* SECTION 3: PG REPRESENTATIVES */}
      <div>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-gray-300 w-16"></div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">PG Representatives</h2>
          <div className="h-px bg-gray-300 w-16"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pgMembers.map((m, i) => <MemberCard key={i} member={m} isStudent={true} />)}
        </div>
      </div>

    </div>
  );
};

export default Team;