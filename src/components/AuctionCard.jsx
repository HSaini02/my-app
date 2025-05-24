import React from 'react';

export default function AuctionCard({ id, title, currentBid, endTime, image, onBid }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden auction-card hover:-translate-y-1 transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Current Bid: ${currentBid}</p>
        <p className="text-gray-600">Ends: {endTime}</p>
        <button
          onClick={() => onBid(id)}
          className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-full"
        >
          Place Bid
        </button>
      </div>
    </div>
  );
}
