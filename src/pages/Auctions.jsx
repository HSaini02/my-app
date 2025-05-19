import React, { useEffect, useState } from 'react';
import { useAuth }        from '../context/AuthContext';
import AuctionCard        from '../components/AuctionCard';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

const formatDate = (dateString) => {
export default function Auctions({ showToast, onNav }) {
  useEffect(() => {
    setAuctions([
      { id:1, title:'Vintage Watch',    currentBid:150, endTime:'2024-01-01', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80' },
      { id:2, title:'Art Collection',   currentBid:500, endTime:'2024-02-15T10:00:00', image:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&q=80' },
      { id:3, title:'Antique Furniture', currentBid:300, endTime:'2024-03-20T15:30:00', image:'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=300&q=80' },
    ]);
  }, []);


export default function Auctions({ showToast, onNav }) {
  const { isLoggedIn } = useAuth();
  const [auctions, setAuctions] = useState([]);

return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Active Auctions</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {auctions.map(auction => (
          <AuctionCard key={auction.id} {...auction} endTime={formatDate(auction.endTime)} onBid={() => placeBid(auction.id)} />
        ))}
      </div>
    </section>
  );
}


  const placeBid = id => {
    if (!isLoggedIn) {
      showToast('Please login to place a bid', false);
      onNav('login');
    } else {
      showToast('Bid placed successfully!');
    }
  };
