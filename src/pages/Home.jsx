import React from 'react';

const Home = ({ onPlaceBid, onShowRegister }) => {
  const auctions = [
    {
      id: 1,
      title: "Vintage Watch",
      currentBid: "$150",
      ends: "2024-01-01",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Art Collection",
      currentBid: "$500",
      ends: "2024-01-02",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Antique Furniture",
      currentBid: "$300",
      ends: "2024-01-03",
      image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Secure Online Auction System</h1>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <i className="bi bi-shield-check text-4xl text-purple-600"></i>
          <h3 className="text-xl font-semibold mt-4">Secure Bidding</h3>
          <p className="mt-2 text-gray-600">End-to-end encryption and blockchain verification for every bid.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <i className="bi bi-lightning text-4xl text-purple-600"></i>
          <h3 className="text-xl font-semibold mt-4">Real-time Updates</h3>
          <p className="mt-2 text-gray-600">Instant notifications and live bidding updates.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <i className="bi bi-graph-up text-4xl text-purple-600"></i>
          <h3 className="text-xl font-semibold mt-4">Fraud Prevention</h3>
          <p className="mt-2 text-gray-600">AI-powered monitoring and verification systems.</p>
        </div>
      </div>

      {/* Featured Auctions Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Auctions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div key={auction.id} className="bg-white rounded-lg shadow-md overflow-hidden auction-card">
              <img src={auction.image} alt={auction.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{auction.title}</h3>
                <p className="text-gray-600">Current Bid: {auction.currentBid}</p>
                <p className="text-gray-600">Ends: {auction.ends}</p>
                <button onClick={() => onPlaceBid(auction.id)} className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-full">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "SecureAuction has made online bidding safe and transparent. I highly recommend it!"
            </p>
            <p className="mt-2 font-semibold">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "The real-time updates and secure bidding process gave me confidence in every transaction."
            </p>
            <p className="mt-2 font-semibold">- Jane Smith</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Banner */}
      <div className="bg-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Bidding?</h2>
        <p className="text-lg mb-4">
          Join SecureAuction today and experience a secure and transparent online auction system.
        </p>
        <button onClick={onShowRegister} className="bg-white text-purple-600 px-6 py-3 rounded-md hover:bg-purple-50 hover:text-purple-700 font-semibold">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Home;