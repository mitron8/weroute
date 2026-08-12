'use client';

import React from 'react';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        {/* Lottie Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[300px] h-[300px] md:max-w-[400px] md:h-[400px]"
        >
          <DotLottieReact
            src="https://lottie.host/a5dba3a2-6a18-45ce-bfc2-872683b1abc6/5sUByE2iD3.lottie"
            loop
            autoplay
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 -mt-4 md:-mt-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Connection Lost
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
            It looks like this node is offline or currently under development. 
            We are continuously expanding our IT solutions infrastructure, and the page you are looking for isn't available right now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 font-medium shadow-sm"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all duration-300 font-medium"
            >
              <Home size={18} />
              <span>Return Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
