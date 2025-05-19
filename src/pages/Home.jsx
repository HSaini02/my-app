import React from 'react';
import FeatureCard from '../Components/FeatureCard';
import AuctionCard  from '../Components/AuctionCard';
import Testimonials from '../Components/Testimonials';
import CTA          from '../Components/CTA';

export default function Home({ showToast, onNav }) {
  const features = [
    { icon: 'shield-check', title: 'Secure Bidding', text: 'End-to-end encryption and blockchain verification for every bid.' },
    { icon: 'lightning',     title: 'Real-time Updates', text: 'Instant notifications and live bidding updates.' },
    { icon: 'graph-up',      title: 'Fraud Prevention', text: 'AI-powered monitoring and verification systems.' },
  ];

  // Use future dates for endTime
  const auctions = [
    { id: 1, title: 'Vintage Watch', currentBid: 150, endTime: '2025-06-01T12:00:00', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80' },
    { id: 2, title: 'Art Collection', currentBid: 500, endTime: '2025-06-02T15:00:00', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&q=80' },
    { id: 3, title: 'Antique Furniture', currentBid: 300, endTime: '2025-06-03T18:00:00', image: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=300&q=80' },
  ];

  const handleBid = id => showToast(`Placed bid on auction #${id}`);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Secure Online Auction System
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {features.map((f,i) => <FeatureCard key={i} {...f} />)}
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Auctions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {auctions.map(a => (
            <AuctionCard key={a.id} {...a} onBid={handleBid} />
          ))}
        </div>
      </div>

      <Testimonials />
      <CTA onRegisterNav={onNav} />
    </section>
  );
}
