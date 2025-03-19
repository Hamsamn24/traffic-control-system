import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // ✅ Added Navigate
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import TrafficControl from './pages/TrafficControl';
import './Global.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter> {/* ✅ Wrapped everything inside BrowserRouter */}
      <div className="App">
        {isAuthenticated && <Navbar />}
        <Routes>
          {!isAuthenticated ? (
            <Route path="/" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          ) : (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/traffic-control" element={<TrafficControl />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
