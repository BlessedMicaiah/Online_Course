import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import LessonCard from './ui/LessonCard';
import { useQuery } from '@tanstack/react-query';
import { Course } from '@shared/schema';

type FilterType = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export function LessonsSection() {
  const [filter, setFilter] = useState<FilterType>('All');
  
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });
  
  const filteredCourses = courses?.filter(course => 
    filter === 'All' || course.difficulty === filter
  );
  
  return (
    <section id="lessons" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Lessons</h2>
            <p className="text-gray-400 max-w-2xl">
              Begin your journey with our most popular lessons or explore our entire catalog.
            </p>
          </motion.div>
          <motion.div 
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex space-x-2">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as FilterType[]).map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 ${
                    filter === type ? 'bg-primary/10 text-primary' : 'hover:bg-white/5'
                  } rounded-lg font-medium transition-colors`}
                  onClick={() => setFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[hsl(var(--dark-surface))] rounded-xl overflow-hidden border border-[hsl(var(--dark-light))] h-[350px] animate-pulse">
                <div className="h-48 bg-gray-800" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-800 rounded w-3/4" />
                  <div className="h-4 bg-gray-800 rounded w-full" />
                  <div className="h-4 bg-gray-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredCourses?.map((course) => (
              <motion.div
                key={course.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <LessonCard
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  difficulty={course.difficulty as 'Beginner' | 'Intermediate' | 'Advanced'}
                  duration={course.duration}
                  imageUrl={course.imageUrl || ''}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/lessons">
            <a className="inline-flex items-center px-6 py-3 border border-primary/50 hover:bg-primary/10 rounded-lg text-primary font-medium transition-colors">
              <span>View All Lessons</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default LessonsSection;
