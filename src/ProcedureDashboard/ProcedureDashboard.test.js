import React from "react";

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProcedureDashboard from "./ProcedureDashboard.tsx";

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
describe("ProcedureDashboard component", () => {
  const wrapper = mount(<Provider store={store}><ProcedureDashboard /></Provider>);

  it("renders ProcedureDashboard component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders New Procedure Form", () => {
    expect(
      wrapper
        .find("h4")
        .at(0)
        .text()
    ).toContain("New Procedure Form");
  });

  it("renders New Procedure Form element", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("renders Procedure List", () => {
    expect(
      wrapper
        .find("h4")
        .at(1)
        .text()
    ).toContain("Procedure List");
  });

  it("renders Procedure Table element", () => {
    expect(wrapper.find("table")).toHaveLength(1);
  });
});