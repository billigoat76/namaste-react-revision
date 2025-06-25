import React from 'react';

export default function RestaurantCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden w-72">
      {/* Image */}
      <img
        // src={imageUrl}
        // alt={name}
        className="h-44 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="bg-green-500 text-white px-2 py-0.5 rounded mr-2 font-semibold">
            ⭐ 4
          </span>
          • <span className="ml-2">28 mins</span>
        </div>
        <p className="text-sm text-gray-500 truncate">
          
        </p>
      </div>
    </div>
  );
}
