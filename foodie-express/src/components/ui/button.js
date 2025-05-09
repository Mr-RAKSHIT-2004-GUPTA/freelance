import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
