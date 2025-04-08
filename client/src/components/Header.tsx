import React from 'react';
import { Link, useLocation } from 'wouter';
import { useMobileMenu } from '@/contexts/MobileMenuContext';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X } from 'lucide-react';

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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-[hsl(var(--dark-light))]">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-80 mix-blend-overlay"></div>
          </div>
          <Link href="/">
            <a className="text-xl font-bold">3D Code Academy</a>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`text-gray-50 hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary' : ''}`}>
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/account">
            <a className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-full transition-colors">
              <span>My Account</span>
              <User className="h-5 w-5" />
            </a>
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
                <Link key={link.href} href={link.href}>
                  <a 
                    className={`block py-2 text-gray-50 hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/account">
                <a 
                  className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-full transition-colors w-full"
                  onClick={closeMenu}
                >
                  <span>My Account</span>
                  <User className="h-5 w-5" />
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
