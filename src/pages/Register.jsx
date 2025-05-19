import React, { useState } from 'react';

export default function Register({ onRegister, onNav }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    try {
      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Registration successful! Please login.');
      onNav('login'); // Navigate to login after success
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create new account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name-register" className="sr-only">Full name</label>
              <input id="name-register" name="name" type="text" required
 onChange={e => setName(e.target.value)}
 value={name}
 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Full name"/>
            </div>
            <div>
              <label htmlFor="email-register" className="sr-only">Email address</label>
              <input id="email-register" name="email" type="email" required
 onChange={e => setEmail(e.target.value)}
 value={email}
 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Email address"/>
            </div>
            <div>
              <label htmlFor="password-register" className="sr-only">Password</label>
              <input id="password-register" name="password" type="password" required
 onChange={e => setPassword(e.target.value)}
 value={password}
 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Password"/>
            </div>
          </div>
 {loading && <p className="text-center text-purple-600">Registering...</p>}
 {error && <p className="text-center text-red-500">{error}</p>}
 {message && <p className="text-center text-green-600">{message}</p>}
          <button type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Register
          </button>
 <div className="text-center">
 <button
 type="button"
 className="font-medium text-purple-600 hover:text-purple-500 text-sm"
 onClick={() => onNav('login')}
 >
 Already have an account? Sign in
 </button>
 {message && (
 <button
 type="button"
 className="font-medium text-purple-600 hover:text-purple-500 text-sm ml-4"
 onClick={() => onNav('login')}
 >
 Go to login
 </button>
 )}
 </div>
        </form>
      </div>
    </section>
  );
}
