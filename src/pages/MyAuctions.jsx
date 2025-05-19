import React from 'react';

export default function MyAuctions() {
  // sample data
  const myAuctions = [
    { id:1, title:'Custom Painting', currentBid:200, endTime:'2024-02-01',
      image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Auctions</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Create New Auction
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {myAuctions.map(a => (
          <div key={a.id}
               className="bg-white rounded-lg shadow-md overflow-hidden auction-card hover:-translate-y-1 transition">
            <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-gray-600">Current Bid: ${a.currentBid}</p>
              <p className="text-gray-600">Ends: {a.endTime}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
