import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="home" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-[hsl(var(--dark-surface))]"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
          {/* Temporarily replaced ThreeCanvas with CSS animation */}
          <div className="w-full h-full relative">
            <div className="animate-pulse absolute w-8 h-8 bg-primary/30 rounded-full top-1/4 left-1/4"></div>
            <div className="animate-pulse absolute w-12 h-12 bg-accent/30 rounded-full top-1/2 left-1/3" style={{animationDelay: '0.5s'}}></div>
            <div className="animate-pulse absolute w-10 h-10 bg-primary/30 rounded-full bottom-1/4 right-1/4" style={{animationDelay: '1s'}}></div>
            <div className="animate-pulse absolute w-16 h-16 bg-accent/30 rounded-full bottom-1/3 right-1/3" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Learn 3D & Code Together
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master <span className="text-primary">3D Development</span> and <span className="text-accent">Coding</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Jump into the world of 3D development with hands-on tutorials, interactive lessons, and real-world projects. Learn at your own pace and level up your skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lessons">
                <a className="py-3 px-6 bg-primary hover:bg-primary/90 text-white rounded-lg text-center font-medium transition-colors">
                  Start Learning
                </a>
              </Link>
              <Link href="/community">
                <a className="py-3 px-6 bg-transparent hover:bg-white/5 border border-gray-600 text-white rounded-lg text-center font-medium transition-colors">
                  Join Community
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-background bg-gray-600" />
                <div className="h-8 w-8 rounded-full border-2 border-background bg-gray-700" />
                <div className="h-8 w-8 rounded-full border-2 border-background bg-gray-800" />
              </div>
              <span className="text-sm text-gray-400">Join <span className="text-white font-medium">2,500+</span> students</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-80 md:h-auto z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] shadow-xl h-full">
              <div className="w-full h-[400px] flex items-center justify-center relative bg-gradient-to-br from-primary/10 to-accent/10">
                {/* Temporarily replaced ThreeModel with CSS animation */}
                <div className="w-32 h-32 rounded-full bg-primary/20 relative animate-pulse">
                  <div className="w-24 h-24 rounded-full bg-primary/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                  <div className="w-16 h-16 rounded-full bg-primary/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-accent/20 animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-accent/20 animate-pulse"></div>
                </div>
                <div className="absolute top-12 right-12 text-xl text-primary font-mono">Three.js Model</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
              
              {/* Interactive controls placeholder */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="p-2 bg-[hsl(var(--dark-surface))] rounded-full hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 bg-[hsl(var(--dark-surface))] rounded-full hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 bg-[hsl(var(--dark-surface))] rounded-full hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
