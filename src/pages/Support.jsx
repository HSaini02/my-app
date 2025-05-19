import React from 'react';

export default function Support() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Support & FAQ</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* FAQ */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-medium mb-2">How secure is the bidding system?</h4>
              <p className="text-gray-600">Our system uses end-to-end encryption and blockchain verification to ensure maximum security for all transactions.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-medium mb-2">What happens if I win an auction?</h4>
              <p className="text-gray-600">You'll receive immediate notification and detailed instructions for completing the purchase securely.</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}
                className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" type="text" required
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" required
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"></textarea>
            </div>
            <button type="submit"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
