import React from 'react';

export default function Header() {
  return (
    <header className="bg-cream text-gray-500 border-b-2 border-amber-200 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-orange-100 border-2 border-orange-400 rounded-full flex items-center justify-center text-lg font-bold text-orange-500">
         <a> 🍽️ </a>
        </div>
        <h1 className="text-xl font-semibold">SpiceTalks</h1>
      </div>

      {/* Navigation */}
      <nav className="flex gap-8 text-lg font-medium">
        <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
        <a href="#" className="hover:text-orange-500 transition-colors">About Us</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Cart</a>
      </nav>
    </header>
  );
}
