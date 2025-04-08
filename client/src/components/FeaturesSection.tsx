import React from 'react';
import { motion } from 'framer-motion';
import features from '@/data/features';

export function FeaturesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section className="py-16 bg-[hsl(var(--dark-surface))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Learn With Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform combines interactive 3D learning with coding tutorials to give you practical skills that are in high demand.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              className={`bg-background rounded-xl p-6 border border-[hsl(var(--dark-light))] ${feature.hoverBorderClass} transition-all duration-300 hover:shadow-lg ${feature.hoverShadowClass}`}
              variants={itemVariants}
            >
              <div className={`w-12 h-12 ${feature.bgColorClass} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.colorClass}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSection;
