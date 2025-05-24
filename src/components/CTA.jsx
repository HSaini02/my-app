import React from 'react';

export default function CTA({ onRegisterNav }) {
  return (
    <div className="bg-purple-600 text-white p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Bidding?</h2>
      <p className="text-lg mb-4">
        Join SecureAuction today and experience a secure and transparent online auction system.
      </p>
      <button
        onClick={() => onRegisterNav('register')}
        className="bg-white text-purple-600 px-6 py-3 rounded-md hover:bg-purple-50 hover:text-purple-700 font-semibold"
      >
        Register Now
      </button>
    </div>
  );
}
