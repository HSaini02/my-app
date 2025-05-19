import React from 'react';

export default function MyBids() {
  // sample data
  const bids = [
    { item:'Vintage Watch', bid:150, status:'Leading', timeLeft:'2h 30m' },
    { item:'Art Collection', bid:550, status:'Outbid',  timeLeft:'5h 10m' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Bids</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {['Item','Your Bid','Status','Time Left'].map(h => (
                <th key={h}
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm text-gray-500 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bids.map((b,i) => (
              <tr key={i}>
                <td className="px-6 py-4 border-b">{b.item}</td>
                <td className="px-6 py-4 border-b">${b.bid}</td>
                <td className="px-6 py-4 border-b">{b.status}</td>
                <td className="px-6 py-4 border-b">{b.timeLeft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
