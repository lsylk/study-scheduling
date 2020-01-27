import React from "react";
import "./App.css";
import PatientsDashboard from "./PatientsDashboard/PatientsDashboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Procedure Scheduling</p>
      </header>
      <div className="App-body">
        <PatientsDashboard />
      </div>
    </div>
  );
};

export default App;
