import React from "react";
import "./App.css";
import PatientsDashboard from "./PatientsDashboard/PatientsDashboard";
import ProcedureDashboard from "./ProcedureDashboard/ProcedureDashboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Procedure Scheduling</p>
      </header>
      <div className="App-body">
        <PatientsDashboard />

        <hr></hr>
        <ProcedureDashboard />
      </div>
    </div>
  );
};

export default App;
