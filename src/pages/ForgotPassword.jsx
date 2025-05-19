import React from 'react';

export default function ForgotPassword({ onReset, onNav }) {
  const handleSubmit = e => {
    e.preventDefault();
    onReset();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email-reset" className="sr-only">Email address</label>
            <input id="email-reset" name="email" type="email" required
                   className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                   placeholder="Email address"/>
          </div>
          <button type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Send reset link
          </button>
          <p className="text-center">
            <button type="button"
                    className="font-medium text-purple-600 hover:text-purple-500"
                    onClick={() => onNav('login')}>
              Back to login
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}
