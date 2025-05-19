import React, { useState } from 'react';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null); // Clear previous messages

    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success or failure
    const success = Math.random() > 0.2; // 80% chance of success

    setLoading(false);
    if (success) {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    }
  };

  const faqs = [
    {
      question: 'How secure is the bidding system?',
      answer: 'Our system uses end-to-end encryption and blockchain verification to ensure maximum security for all transactions.'
    },
    {
      question: 'What happens if I win an auction?',
      answer: "You'll receive immediate notification and detailed instructions for completing the purchase securely."
    },
    // Add more FAQs here
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Support & FAQ</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* FAQ */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h4 className="font-medium mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" type="text" required value={formData.name} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" required
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" required value={formData.message} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"></textarea>
            </div>
            {loading && (
              <p className="text-purple-600">Sending message...</p>
            )}
            {message && (
              <p className={message.type === 'success' ? 'text-green-600' : 'text-red-600'}>
                {message.text}
              </p>
            )}
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
