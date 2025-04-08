import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video, Users, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import ThreeCanvas from '@/components/ui/ThreeCanvas';

export function CommunityPage() {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-[hsl(var(--dark-surface))]"></div>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 pointer-events-none">
          <ThreeCanvas showFloatingObjects={true} particleCount={30} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Connect with fellow learners, share your work, ask questions, and collaborate on projects in our vibrant community of 3D enthusiasts and developers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Discord Community Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-600 h-12 w-12 rounded-xl flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3864-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Discord Community</h2>
                    <p className="text-gray-400">Join over 2,500 members in real-time discussions</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
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
                  className="block w-full"
                >
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3864-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                    Join Discord Server
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Upcoming Community Events</h2>
                
                <div className="space-y-4">
                  <div className="bg-background rounded-lg p-4 border border-[hsl(var(--dark-light))]">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-primary">Three.js Masterclass</h3>
                      <span className="text-xs text-gray-400 bg-primary/10 px-2 py-1 rounded-full">Tomorrow</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">Learn advanced techniques for optimizing 3D scenes and performance.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Jun 15, 2023 • 7:00 PM EST</span>
                      <Button variant="outline" size="sm">Set Reminder</Button>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-[hsl(var(--dark-light))]">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-secondary">Community Showcase</h3>
                      <span className="text-xs text-gray-400 bg-secondary/10 px-2 py-1 rounded-full">In 3 days</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">Members present their latest projects and receive feedback from peers.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Jun 18, 2023 • 6:00 PM EST</span>
                      <Button variant="outline" size="sm">Set Reminder</Button>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-[hsl(var(--dark-light))]">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-accent">Q&A with Industry Experts</h3>
                      <span className="text-xs text-gray-400 bg-accent/10 px-2 py-1 rounded-full">Next Week</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">Ask questions and get advice from professionals in the 3D development field.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Jun 22, 2023 • 8:00 PM EST</span>
                      <Button variant="outline" size="sm">Set Reminder</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Live Chat & Community Feed */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold">Community Chat</h2>
                  <span className="ml-3 px-2 py-1 text-xs bg-green-500/20 text-green-500 rounded-full">24 online</span>
                </div>
                
                <div className="bg-background rounded-lg border border-[hsl(var(--dark-light))] p-4 mb-4 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full mr-3 bg-gray-700"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-primary">David Kim <span className="text-gray-400 font-normal text-sm">@davidkim</span></h4>
                          <span className="text-xs text-gray-400">10:30 AM</span>
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
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full mr-3 bg-gray-600"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-secondary">Sarah Johnson <span className="text-gray-400 font-normal text-sm">@sarahj</span></h4>
                          <span className="text-xs text-gray-400">10:42 AM</span>
                        </div>
                        <p className="text-gray-300 mt-1">That looks awesome, David! I love the lighting effects. How did you handle the shadows?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full mr-3 bg-gray-700"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-primary">David Kim <span className="text-gray-400 font-normal text-sm">@davidkim</span></h4>
                          <span className="text-xs text-gray-400">10:45 AM</span>
                        </div>
                        <p className="text-gray-300 mt-1">Thanks Sarah! I used the shadow techniques from Module 4. I can share my code if you're interested.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full mr-3 bg-gray-800"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-accent">Michael Chen <span className="text-gray-400 font-normal text-sm">@mchen</span></h4>
                          <span className="text-xs text-gray-400">10:51 AM</span>
                        </div>
                        <p className="text-gray-300 mt-1">I'd love to see that code too! I'm working on a similar project and got stuck with the shadow mapping.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full mr-3 bg-gray-700"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-primary">David Kim <span className="text-gray-400 font-normal text-sm">@davidkim</span></h4>
                          <span className="text-xs text-gray-400">11:02 AM</span>
                        </div>
                        <p className="text-gray-300 mt-1">Sure thing! I'll post it in the #code-sharing channel in a few minutes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <Input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 bg-background border border-[hsl(var(--dark-light))] rounded-r-none"
                  />
                  <Button className="rounded-l-none bg-primary hover:bg-primary/90" type="submit">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Projects */}
            <Card className="bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Featured Community Projects</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden">
                    <div className="aspect-video bg-background border border-[hsl(var(--dark-light))] flex items-center justify-center">
                      <span className="text-gray-500">Project 1</span>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">Neon City</h3>
                      <p className="text-gray-400 text-sm">by @alexsmith</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden">
                    <div className="aspect-video bg-background border border-[hsl(var(--dark-light))] flex items-center justify-center">
                      <span className="text-gray-500">Project 2</span>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">Space Explorer</h3>
                      <p className="text-gray-400 text-sm">by @mariaj</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden">
                    <div className="aspect-video bg-background border border-[hsl(var(--dark-light))] flex items-center justify-center">
                      <span className="text-gray-500">Project 3</span>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">Particle Effects</h3>
                      <p className="text-gray-400 text-sm">by @jackson</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden">
                    <div className="aspect-video bg-background border border-[hsl(var(--dark-light))] flex items-center justify-center">
                      <span className="text-gray-500">Project 4</span>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">Low Poly World</h3>
                      <p className="text-gray-400 text-sm">by @sophiab</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Projects</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Community Stats Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] overflow-hidden">
              <CardContent className="p-6 text-center">
                <h3 className="text-5xl font-bold text-primary mb-2">2,500+</h3>
                <p className="text-gray-400">Community Members</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] overflow-hidden">
              <CardContent className="p-6 text-center">
                <h3 className="text-5xl font-bold text-secondary mb-2">120+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[hsl(var(--dark-surface))] border border-[hsl(var(--dark-light))] overflow-hidden">
              <CardContent className="p-6 text-center">
                <h3 className="text-5xl font-bold text-accent mb-2">50+</h3>
                <p className="text-gray-400">Live Events Monthly</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CommunityPage;
