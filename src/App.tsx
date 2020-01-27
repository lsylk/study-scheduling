import React from 'react';
import './App.css';
import PatientsDashboard from './PatientsDashboard/PatientsDashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Schedule
        </p>
      </header>
      <PatientsDashboard/>
    </div>
  );
}

export default App;
