import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video, Users } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
            <p className="text-gray-400 text-lg">
              Connect with fellow learners, share your work, ask questions, and collaborate on projects in our vibrant Discord community.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">24/7 Support</h3>
                  <p className="text-gray-400">Get help from our community moderators and fellow learners at any time.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Live Workshops</h3>
                  <p className="text-gray-400">Participate in regular live workshops hosted by industry professionals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Networking</h3>
                  <p className="text-gray-400">Connect with professionals and find collaboration opportunities.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://discord.gg/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3864-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
              <span>Join our Discord</span>
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-[hsl(var(--dark-surface))] rounded-xl p-6 border border-[hsl(var(--dark-light))] relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="flex items-center mb-6">
              <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="Discord Logo" className="h-10 w-10 mr-3" />
              <h3 className="text-xl font-bold">3D Code Academy Discord</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full mr-3 bg-gray-700"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-primary">David Kim <span className="text-gray-400 font-normal text-sm">@davidkim</span></h4>
                      <span className="text-xs text-gray-400">Today at 10:30 AM</span>
                    </div>
                    <p className="text-gray-300 mt-1">Just finished the React Three Fiber course. Amazing content! Here's my final project:</p>
                    <div className="mt-3 bg-[hsl(var(--dark-light))] rounded-lg p-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-300">project-showcase.jpg</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full mr-3 bg-gray-600"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-secondary">Sarah Johnson <span className="text-gray-400 font-normal text-sm">@sarahj</span></h4>
                      <span className="text-xs text-gray-400">Today at 10:42 AM</span>
                    </div>
                    <p className="text-gray-300 mt-1">That looks awesome, David! I love the lighting effects. How did you handle the shadows?</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full mr-3 bg-gray-700"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-primary">David Kim <span className="text-gray-400 font-normal text-sm">@davidkim</span></h4>
                      <span className="text-xs text-gray-400">Today at 10:45 AM</span>
                    </div>
                    <p className="text-gray-300 mt-1">Thanks Sarah! I used the shadow techniques from Module 4. I can share my code if you're interested.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex">
              <input type="text" placeholder="Send a message..." className="flex-1 bg-background border border-[hsl(var(--dark-light))] rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <button className="bg-primary hover:bg-primary/90 rounded-r-lg px-4 py-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
