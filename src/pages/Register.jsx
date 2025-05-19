import React from 'react';

export default function Register({ onRegister, onNav }) {
  const handleSubmit = e => {
    e.preventDefault();
    onRegister();
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
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Full name"/>
            </div>
            <div>
              <label htmlFor="email-register" className="sr-only">Email address</label>
              <input id="email-register" name="email" type="email" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Email address"/>
            </div>
            <div>
              <label htmlFor="password-register" className="sr-only">Password</label>
              <input id="password-register" name="password" type="password" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                     placeholder="Password"/>
            </div>
          </div>
          <button type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Register
          </button>
          <p className="text-center">
            <button type="button"
                    className="font-medium text-purple-600 hover:text-purple-500"
                    onClick={() => onNav('login')}>
              Already have an account? Sign in
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}
