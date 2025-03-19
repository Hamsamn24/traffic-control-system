import React, { useState } from "react";

const AmbulanceAlert = ({ sendAlert }) => {
  const [selectedRoad, setSelectedRoad] = useState("");

  const handleSendAlert = () => {
    if (selectedRoad) {
      sendAlert(selectedRoad);
      setSelectedRoad(""); // Reset selection after sending alert
    }
  };

  return (
    <div className="ambulance-alert">
      <h2>🚑 Ambulance Emergency Alert</h2>
      <label>Select Road:</label>
      <select value={selectedRoad} onChange={(e) => setSelectedRoad(e.target.value)}>
        <option value="">--Select Road--</option>
        <option value="Road A">Road A</option>
        <option value="Road B">Road B</option>
        <option value="Road C">Road C</option>
        <option value="Road D">Road D</option>
      </select>
      <button onClick={handleSendAlert} disabled={!selectedRoad}>Send Alert</button>
    </div>
  );
};

export default AmbulanceAlert;
