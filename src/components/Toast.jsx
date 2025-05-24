import React from 'react';

export default function Toast({ msg, isSuccess, visible }) {
  if (!visible) return null;
  return (
    <div
      role="alert"
      className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg text-white ${
        isSuccess ? 'bg-purple-500' : 'bg-red-500'
      }`}
    >
      {msg}
    </div>
  );
}
