import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPatientAction, IPatientStates } from "../store/reducers/patient";
import Patients from "./../Patients/Patients";

const toDate = (date: Date) =>
  `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()}`;

const PatientsDashboard: React.FC = () => {
  let { nextId } = useSelector<
    { patients: IPatientStates },
    IPatientStates
  >(state => state.patients);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  return (
    <div>
      <h4 className="ui dividing header">New Patient Form</h4>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                name="firstName"
                aria-label="First Name"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                placeholder="First Name"
                required
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="lastName"
                aria-label="Last Name"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label>Gender</label>
          <select
            name="gender"
            onChange={event =>
              setGender(event.target.value as "Male" | "Female")
            }
          >
            {["Male", "Female"].map(gender => (
              <option value={gender} key={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Date of Birth</label>
          <input
            type="date"
            name="date-of-birth"
            value={dateOfBirth ? toDate(dateOfBirth) : toDate(new Date())}
            onChange={event => {
              setDateOfBirth(new Date(event.target.value));
            }}
          />
        </div>
        <button
          className="ui button"
          onClick={(event) => {
            dispatch(
              addPatientAction({
                id: nextId,
                firstName,
                lastName,
                gender,
                dateOfBirth
              })
            );
            event.preventDefault();
          }
          }
        >
          Add patient
        </button>
      </form>
      <hr></hr>
      <h4>Patient List</h4>
      <table className="ui celled table">
        <thead>
          <tr>
            {["First Name", "Last Name", "Gender", "Date of Birth"].map(
              (header, index) => {
                return <th key={index}>{header}</th>;
              }
            )}
          </tr>
        </thead>
        <tbody>
          <Patients />
        </tbody>
      </table>
    </div>
  );
};

export default PatientsDashboard;
