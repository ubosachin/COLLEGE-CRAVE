import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Rocket, Mail } from 'lucide-react';
import { saveEmail } from '../utils/saveEmail';  // ✅ Import saveEmail function

export function ComingSoon() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email!");
      return;
    }
    await saveEmail(email);  // ✅ Save email to Firebase
    setEmail("");  // ✅ Clear input field
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Rocket className="w-16 h-16 text-purple-600 mx-auto mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              We're working hard to bring you the future of campus dining. 
              Be the first to know when we launch!
            </p>

            {/* Email Signup Form */}
            <div className="max-w-md mx-auto">
              <form className="flex gap-4" onSubmit={handleSubmit}>
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                >
                  Notify Me
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We'll notify you when we launch. No spam, we promise!
              </p>
            </div>

            {/* Features Preview */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Ordering</h3>
                <p className="text-gray-600">Order your meals ahead of time and skip the queue</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Know exactly when your food will be ready</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Payments</h3>
                <p className="text-gray-600">Secure and convenient payment options</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
