import React, { useState } from 'react';
import { GraduationCap, Clock, CreditCard, ChefHat, ArrowRight, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatCardProps {
  number: string;
  text: string;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">College Crave</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#impact">Impact</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200">
                Get Started
              </button>
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
              <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
              <MobileNavLink href="#impact" onClick={() => setIsMenuOpen(false)}>Impact</MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</MobileNavLink>
              <div className="px-3 py-2">
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing Campus
              <span className="text-purple-600"> Dining Experience</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Skip the lines, order from class, and enjoy faster service. College Crave is transforming how students experience campus dining.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200 inline-flex items-center gap-2">
              Try College Crave Today
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose College Crave?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-purple-600" />}
              title="Save Time"
              description="Order ahead and skip the long queues at campus canteens"
            />
            <FeatureCard 
              icon={<CreditCard className="w-8 h-8 text-purple-600" />}
              title="Easy Payments"
              description="Secure digital payments with multiple options"
            />
            <FeatureCard 
              icon={<GraduationCap className="w-8 h-8 text-purple-600" />}
              title="Student-First"
              description="Designed specifically for campus life and student needs"
            />
            <FeatureCard 
              icon={<ChefHat className="w-8 h-8 text-purple-600" />}
              title="Canteen Partners"
              description="Empowering canteen owners with smart management tools"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Making a Real Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how College Crave is transforming campus dining across universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="30%" text="Reduction in Wait Times" />
            <StatCard number="500+" text="Active Student Users" />
            <StatCard number="5" text="Partner Campuses" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="text-5xl text-purple-600 absolute top-4 left-4">"</div>
            <blockquote className="text-xl text-gray-600 text-center max-w-4xl mx-auto pt-6">
              College Crave has saved me so much time! I can order lunch from class 
              and pick it up without any hassle. The app is super easy to use and 
              the real-time tracking feature is amazing.
            </blockquote>
            <div className="mt-6 text-center">
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-gray-500">Computer Science Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <span className="text-xl font-bold text-white">College Crave</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing campus dining experience with smart ordering solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><FooterLink href="#features">Features</FooterLink></li>
                <li><FooterLink href="#impact">Impact</FooterLink></li>
                <li><FooterLink href="#testimonials">Testimonials</FooterLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><FooterLink href="mailto:collegecrave.in@gmail.com">collegecrave.in@gmail.com</FooterLink></li>
                <li><FooterLink href="tel:+91 83684 74782">+91 83684 74782</FooterLink></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <SocialLink href="#" icon={<Twitter size={20} />} />
                <SocialLink href="#" icon={<Github size={20} />} />
                <SocialLink href="#" icon={<Linkedin size={20} />} />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} College Crave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <a 
      href={href}
      className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {icon}
    </a>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default App;