import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// The 'fetch' and 'global' polyfills are now handled in index.html to run as early as possible.
// This prevents errors from libraries trying to overwrite restricted window properties.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
