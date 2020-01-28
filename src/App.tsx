import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ISelectedTab, switchTabAction } from "./store/reducers/general";
import PatientsDashboard from "./PatientsDashboard/PatientsDashboard";
import ProcedureDashboard from "./ProcedureDashboard/ProcedureDashboard";

const App: React.FC = () => {
  let {selectedTab} = useSelector<{tab: ISelectedTab},
  ISelectedTab>(state=>state.tab)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p>Procedure Scheduling</p>
      </header>
      <div className="App-body">
        <div className="ui tabular menu">
          <a className={"item" + (selectedTab === 'patients' ? " active" : '')} onClick={() => dispatch(switchTabAction('patients'))} href="#">Patients</a>
          <a className={"item" + (selectedTab !== 'patients' ? " active" : '')} onClick={() => dispatch(switchTabAction('procedure'))} >Procedures</a>
        </div>
        {selectedTab === "patients" && <PatientsDashboard />}

        <hr></hr>
        {selectedTab === "procedure" && <ProcedureDashboard />}
      </div>
    </div>
  );
};

export default App;
