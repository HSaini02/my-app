import React, { useEffect, useState } from 'react';
import { useAuth }        from '../context/AuthContext';
import AuctionCard        from '../components/AuctionCard';

export default function Auctions({ showToast, onNav }) {
  const { isLoggedIn } = useAuth();
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    setAuctions([
      { id:1, title:'Vintage Watch',    currentBid:150, endTime:'2024-01-01', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80' },
      { id:2, title:'Art Collection',   currentBid:500, endTime:'2024-01-02', image:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&q=80' },
      { id:3, title:'Antique Furniture', currentBid:300, endTime:'2024-01-03', image:'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=300&q=80' },
    ]);
  }, []);

  const placeBid = id => {
    if (!isLoggedIn) {
      showToast('Please login to place a bid', false);
      onNav('login');
    } else {
      showToast('Bid placed successfully!');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Active Auctions</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {auctions.map(a => (
          <AuctionCard key={a.id} {...a} onBid={placeBid} />
        ))}
      </div>
    </section>
  );
}
