'use client';

import { useEffect } from 'react';

const Alert = ({ type, msg, hideAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => hideAlert(), 3000);
    return () => clearTimeout(timeout);
  }, [hideAlert]);

  return (
    <p
      role='alert'
      aria-live='polite'
      className={`text-${
        type === 'success' ? 'green' : 'red'
      }-600 font-semibold`}
    >
      {msg}
    </p>
  );
};

export default Alert;
