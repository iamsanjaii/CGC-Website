import React from 'react';
// 👇 THIS WAS MISSING! You must import these to use them.
import { Routes, Route } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
import Resources from './components/Resources';

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;