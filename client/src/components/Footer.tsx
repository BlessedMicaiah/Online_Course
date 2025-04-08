import React from 'react';
import { Link } from 'wouter';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--dark-surface))] border-t border-[hsl(var(--dark-light))] relative z-10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg overflow-hidden">
                <div className="absolute inset-0 opacity-80 mix-blend-overlay">
                  {/* Placeholder for 3D Logo */}
                </div>
              </div>
              <span className="text-lg font-bold">3D Code Academy</span>
            </div>
            <p className="text-gray-400 mb-4">The premiere platform for learning 3D development and coding together.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/lessons" className="text-gray-400 hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="/challenges" className="text-gray-400 hover:text-primary transition-colors">Challenges</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Asset Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest courses and community news.</p>
            <form className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-background border border-[hsl(var(--dark-light))] rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 rounded-r-lg px-4 py-2 text-white"
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[hsl(var(--dark-light))] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} 3D Code Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
