import React from 'react';
import "@/Global.css";

const LiveFeed = () => {
  return (
    <div className="live-feed">
      <h3>Live Traffic Feed</h3>
      <iframe
        src="traffic.mp4"
        title="Live Traffic"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveFeed;
