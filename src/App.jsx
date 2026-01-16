import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar we built
import Hero from './components/Hero';     // Import the Hero we built
import Services from './components/Services'; // Import the Services we built
import Emergency from './components/Emergency'; // Import the Emergency we built
import Footer from './components/Footer'; // Import the Footer we built
function App() {
  return (
    // We use a fragment <> to wrap multiple components
    // 'min-h-screen' ensures the background covers the whole page
    <div className="min-h-screen bg-cgc-bg font-sans text-gray-900">
      
      {/* 1. The Navigation Bar (Sticks to top) */}
      <Navbar />

      {/* 2. The Hero Section (Welcome Banner) */}
      <Hero />
      <Services/>
      <Emergency/>
      <Footer/>

    </div>
  );
}

export default App;