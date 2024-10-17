import React from 'react';

const Utilities = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Utilities</h1>
      <p className="mt-4 text-lg text-gray-700">This is the Utilities of our Next.js application.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go back to Home
      </a>
    </div>
  );
};

export default Utilities;
