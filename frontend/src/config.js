export const BACKEND_LOCAL = import.meta.env.VITE_LOCAL_BACKEND || 'http://localhost:5000';
export const BACKEND_PROD = import.meta.env.VITE_PROD_BACKEND || 'https://imagify-backend-iwee.onrender.com';

export const backend_uri =
  typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? BACKEND_LOCAL
    : BACKEND_PROD;