import React, { useState } from 'react';
import AdmissionDialog from './AdmissionDialog';

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="home" className="pt-16 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/hXRvxD4/7.jpg"
          alt="School children"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-purple-800/60 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          <img 
            src="https://i.ibb.co/hVHLds9/IMG-7327.png"
            alt="GMS Logo" 
            className="mx-auto w-64 md:w-80 mb-8 animate-fade-in drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            GOWTHAM SCHOOLS ONGOLE
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-semibold mb-6">
            The LEADER in Academics
          </p>
          <p className="text-lg md:text-xl text-purple-50 mb-8">
            Children to be Future Ready
          </p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Apply Now for Admissions
          </button>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-700/10 rounded-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1920"
            alt="Modern school building"
            className="rounded-xl shadow-2xl w-full h-[500px] object-cover transform hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      </div>

      <AdmissionDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  );
}