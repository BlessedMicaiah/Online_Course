import React from 'react';
import { Link, useLocation } from 'wouter';
import { useMobileMenu } from '@/contexts/MobileMenuContext';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, Code } from 'lucide-react';

export function Header() {
  const [location] = useLocation();
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/lessons", label: "Lessons" },
    { href: "/challenges", label: "Challenges" },
    { href: "/community", label: "Community" },
  ];
  
  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };
  
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-[hsl(var(--dark-light))] drop-shadow-md">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg overflow-hidden flex items-center justify-center">
            <Code className="h-6 w-6 text-gray-900" />
          </div>
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <span className="text-xl font-bold tracking-tight">3D Code Academy</span>
              <span className="text-xs text-primary hidden sm:block">Master 3D development with code</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={`cursor-pointer text-sm font-medium hover:text-primary transition-colors relative ${isActive(link.href) ? 'text-primary' : ''}`}>
                  {link.label}
                  {isActive(link.href) && (
                    <div className="absolute h-0.5 w-full bg-primary bottom-[-12px]"></div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <Link href="/account">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-md transition-colors cursor-pointer text-black font-medium">
              <span>My Account</span>
              <User className="h-4 w-4" />
            </div>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-50 focus:outline-none p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[hsl(var(--dark-surface))] border-t border-[hsl(var(--dark-light))]"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <div 
                  key={link.href} 
                  onClick={() => {
                    window.location.href = link.href;
                    closeMenu();
                  }}
                  className={`block py-2 text-gray-50 hover:text-primary transition-colors cursor-pointer ${isActive(link.href) ? 'text-primary' : ''}`}
                >
                  {link.label}
                </div>
              ))}
              <div 
                onClick={() => {
                  window.location.href = '/account';
                  closeMenu();
                }}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-md transition-colors cursor-pointer text-black font-medium justify-center"
              >
                <span>My Account</span>
                <User className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
