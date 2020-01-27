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
        <div className="ui tabular menu">
          <a className="item active">Patients</a>
          <a className="item">Procedures</a>
        </div>
        <PatientsDashboard />

        <hr></hr>
        <ProcedureDashboard />
      </div>
    </div>
  );
};

export default App;
