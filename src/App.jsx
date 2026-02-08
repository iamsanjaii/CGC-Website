import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
import Resources from './components/Resources';
import Team from './components/Team'; // <--- 🚨 YOU MISSED THIS IMPORT!

function App() {
  return (
    <div className="min-h-screen bg-cgc-bg font-sans text-gray-900 flex flex-col">
      <Navbar />
      
      <Routes>
        {/* PAGE 1: HOME */}
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Emergency />
          </>
        } />

        {/* PAGE 2: RESOURCES */}
        <Route path="/resources" element={<Resources />} />

        {/* PAGE 3: TEAM */}
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;