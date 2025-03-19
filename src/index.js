import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Import ReactDOM
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> {/* ✅ Added React.StrictMode for better debugging */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
