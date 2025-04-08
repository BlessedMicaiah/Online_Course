import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-800 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Master 3D Development?</h2>
          <p className="text-indigo-200 text-lg mb-8">
            Join thousands of students who are already creating amazing 3D experiences and advancing their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/account">
              <div className="py-3 px-6 bg-white hover:bg-gray-100 text-indigo-800 rounded-lg text-center font-medium transition-colors cursor-pointer">
                Start Free Trial
              </div>
            </Link>
            <Link href="/lessons">
              <div className="py-3 px-6 bg-transparent hover:bg-white/10 border border-white text-white rounded-lg text-center font-medium transition-colors cursor-pointer">
                View All Courses
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
