import React from "react";

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PatientDashboard from "./PatientsDashboard.tsx";

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import generalReducer from '../store/reducers/general';
import patientReducer from '../store/reducers/patient';
import procedureReducer from '../store/reducers/procedure';
import doctorReducer from '../store/reducers/doctor';
import roomReducer from '../store/reducers/room';

const rootReducer = combineReducers({
    tab: generalReducer,
    patients: patientReducer,
    procedures: procedureReducer,
    doctors: doctorReducer,
    rooms: roomReducer
});
const store = createStore(rootReducer);

configure({ adapter: new Adapter() });
describe("PatientDashboard component", () => {
  const wrapper = mount(<Provider store={store}><PatientDashboard /></Provider>);

  it("renders PatientDashboard component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders New Patient Form", () => {
    expect(
      wrapper
        .find("h4")
        .at(0)
        .text()
    ).toContain("New Patient Form");
  });

  it("renders New Patient Form element", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("renders Patient List", () => {
    expect(
      wrapper
        .find("h4")
        .at(1)
        .text()
    ).toContain("Patient List");
  });

  it("renders Patient Table element", () => {
    expect(wrapper.find("table")).toHaveLength(1);
  });
});