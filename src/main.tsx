import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as any);
root.render(
  import.meta.env.VITE_APP_ENV === 'development' ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  ),
);
