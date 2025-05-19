import React from 'react';

export default function Testimonials() {
  const data = [
    {
      quote: 'SecureAuction has made online bidding safe and transparent. I highly recommend it!',
      author: 'John Doe',
    },
    {
      quote: 'The real-time updates and secure bidding process gave me confidence in every transaction.',
      author: 'Jane Smith',
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((t,i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">"{t.quote}"</p>
            <p className="mt-2 font-semibold">- {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
