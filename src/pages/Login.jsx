import React, { useState } from 'react';

export default function Login({ onLogin, onNav }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Simulate an asynchronous login process
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === 'password') { // Replace with actual authentication logic
        onLogin();
      } else {
        setError('Invalid email or password.');
      }
    }, 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-login" className="sr-only">Email address</label>
              <input id="email-login" name="email" type="email" required
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Email address"/>
            </div>
            <div>
              <label htmlFor="password-login" className="sr-only">Password</label>
              <input id="password-login" name="password" type="password" required
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Password"/>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button type="button"
                    disabled={loading}
                    className="font-medium text-purple-600 hover:text-purple-500 text-sm"
                    onClick={() => onNav('forgotPassword')}>
              Forgot your password?
            </button>
            <button type="button"
                    disabled={loading}
                    className="font-medium text-purple-600 hover:text-purple-500 text-sm"
                    onClick={() => onNav('register')}>
              Register new account
            </button>
          </div>
          <button type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          {error && (
            <p className="mt-2 text-center text-sm text-red-600">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
