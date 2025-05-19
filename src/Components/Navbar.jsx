import React, { useState } from 'react';

export default function Navbar({ currentPage, onNav, isLoggedIn, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    ['home',       'Home'],
    ['auctions',   'Auctions'],
    ['myBids',     'My Bids'],
    ['myAuctions', 'My Auctions'],
    ['support',    'Support'],
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16">
        <div className="flex items-center">
          <span
            className="text-2xl font-bold text-purple-600 cursor-pointer"
            onClick={() => onNav('home')}
          >
            FairBid
          </span>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map(([id,label]) => (
            <button
              key={id}
              className={`px-3 py-2 hover:text-purple-600 ${
                currentPage===id ? 'text-purple-600' : 'text-gray-700'
              }`}
              onClick={() => onNav(id)}
            >
              {label}
            </button>
          ))}
          {isLoggedIn
            ? <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onLogout}>
                Logout
              </button>
            : <button className="bg-purple-600 text-white px-4 py-2 rounded-md" onClick={() => onNav('login')}>
                Login
              </button>}
        </div>
        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(o => !o)}>
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1">
          {links.map(([id,label]) => (
            <button
              key={id}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600"
              onClick={() => { onNav(id); setMobileOpen(false); }}
            >
              {label}
            </button>
          ))}
          {isLoggedIn
            ? <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600"
                      onClick={() => { onLogout(); setMobileOpen(false); onNav('home'); }}>
                Logout
              </button>
            : <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600"
                      onClick={() => { onNav('login'); setMobileOpen(false); }}>
                Login
              </button>}
        </div>
      )}
    </nav>
  );
}
