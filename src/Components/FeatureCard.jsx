import React from 'react';

export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className={`bi bi-${icon} text-4xl text-purple-600`}></i>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}
