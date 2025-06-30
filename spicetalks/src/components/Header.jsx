import React from 'react';

export default function Header() {
  return (
    <header className="bg-cream text-gray-500 border-b-2 border-red-600 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-orange-100 border-2 border-orange-400 rounded-full flex items-center justify-center">
          <img
            src="https://img.freepik.com/premium-vector/vintage-spices-logo_872660-7.jpg?semt=ais_hybrid&w=740" // 🍽️ icon from flaticon (replace with your logo if needed)
            alt="SpiceTalks Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-xl font-semibold">SpiceTalks</h1>
      </div>

      {/* Navigation */}
      <nav className="flex gap-8 text-lg font-medium">
        <a href="#" className="hover:text-red-500 transition-colors">Home</a>
        <a href="#" className="hover:text-red-500 transition-colors">About Us</a>
        <a href="#" className="hover:text-red-500 transition-colors">Contact Us</a>
        <a href="#" className="hover:text-red -500 transition-colors">Cart</a>
      </nav>
    </header>
  );
}
