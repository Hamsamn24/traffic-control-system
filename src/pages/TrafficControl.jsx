import React, { useState } from "react";
import axios from "axios";
import "../Global.css"; // Ensure you have the CSS file for styling

const TrafficControl = () => {
  const [emergencyAlert, setEmergencyAlert] = useState(false);
  const [selectedRoad, setSelectedRoad] = useState(""); // User-selected road
  const [signalStates, setSignalStates] = useState({}); // Store signal state for each road

  const roads = ["Main Street", "Park Avenue", "5th Avenue", "Broadway", "Begur"]; // List of roads

  // Function to receive emergency message and update backend
  const receiveEmergencyMessage = async () => {
    setEmergencyAlert(true);
    try {
      await axios.post("http://localhost:5000/api/messages/increment"); // Log emergency message
    } catch (error) {
      console.error("Failed to increment message count:", error);
    }
  };

  // Function to give green signal to the selected road (only one road at a time)
  const giveGreenSignal = () => {
    if (!selectedRoad) return;

    // Set all roads to red before turning the selected road to green
    const newSignalStates = roads.reduce((acc, road) => {
      acc[road] = "red"; // Set all roads to red initially
      return acc;
    }, {});

    // Transition: Red -> Yellow -> Green
    setTimeout(() => {
      newSignalStates[selectedRoad] = "yellow";
      setSignalStates({ ...newSignalStates });

      setTimeout(() => {
        newSignalStates[selectedRoad] = "green";
        setSignalStates({ ...newSignalStates });

        // Keep green for 10 seconds, then turn back to red
        setTimeout(() => {
          setSignalStates((prevSignalStates) => ({
            ...prevSignalStates,
            [selectedRoad]: "red",
          }));
        }, 10000);
      }, 2000);
    }, 1000);

    setEmergencyAlert(false);
  };

  return (
    <div className="traffic-control-container">
      {/* Simulated button for receiving emergency */}
      <button className="receive-message-button" onClick={receiveEmergencyMessage}>
        🚑 Simulate Emergency Message
      </button>

      {/* Emergency Alert Popup */}
      {emergencyAlert && (
        <div className="alert-popup">
          <h2>🚨 Emergency Alert!</h2>
          <p>An ambulance is on the road. Please be alert.</p>
          <button onClick={() => setEmergencyAlert(false)}>Close</button>
        </div>
      )}

      {/* Select Road and Give Green Signal */}
      <div className="signal-control">
        <h3>Select Road to Give Green Signal</h3>
        <select value={selectedRoad} onChange={(e) => setSelectedRoad(e.target.value)}>
          <option value="">-- Select Road --</option>
          {roads.map((road, index) => (
            <option key={index} value={road}>
              {road}
            </option>
          ))}
        </select>
        <button onClick={giveGreenSignal} disabled={!selectedRoad}>
          ✅ Give Green Signal
        </button>
      </div>

      {/* Traffic Signals Display */}
      <div className="traffic-signals">
        {roads.map((road, index) => (
          <div key={index} className="road-signal">
            <p className="road-name">{road}</p>
            <div className={`signal red ${signalStates[road] === "red" ? "active" : ""}`} />
            <div className={`signal yellow ${signalStates[road] === "yellow" ? "active" : ""}`} />
            <div className={`signal green ${signalStates[road] === "green" ? "active" : ""}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficControl;
