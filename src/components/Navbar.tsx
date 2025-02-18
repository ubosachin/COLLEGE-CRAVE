import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">College Crave</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/#features">Features</NavLink>
            <NavLink to="/#impact">Impact</NavLink>
            <NavLink to="/#testimonials">Testimonials</NavLink>
            <Link 
              to="/coming-soon"
              className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink to="/#impact" onClick={() => setIsMenuOpen(false)}>Impact</MobileNavLink>
            <MobileNavLink to="/#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</MobileNavLink>
            <div className="px-3 py-2">
              <Link
                to="/coming-soon"
                className="block w-full bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link 
      to={to}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: MobileNavLinkProps) {
  return (
    <Link 
      to={to}
      className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}