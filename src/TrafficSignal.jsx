import React from 'react';
import './Global.css';

const TrafficSignal = () => {
  return (
    <div className="traffic-signal">
      <h3>Live Traffic Signal</h3>
      <div className="signal red"></div>
      <div className="signal yellow"></div>
      <div className="signal green active"></div>
    </div>
  );
};

export default TrafficSignal;
