import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Dashboard.css';

const Dashboard = () => {
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const fetchMessageCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/messages/count");
        setMessageCount(response.data.messageCount);
      } catch (error) {
        console.error("Failed to fetch message count:", error);
      }
    };

    // Fetch message count initially and every 5 seconds
    fetchMessageCount();
    const interval = setInterval(fetchMessageCount, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>Traffic Monitoring Dashboard</h1>

      <div className="counts-container">
        <h2>Simulation Statistics</h2>
        <p>🚑 Emergency Messages Triggered: {messageCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
