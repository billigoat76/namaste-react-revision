import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard'; // Adjust the path as needed


export default function Body() {

  
  return (
    <main className="bg-cream min-h-screen p-6">
      {/* Search Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <button
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition cursor-pointer    "
        >
          Search
        </button>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </main>
  );
}
