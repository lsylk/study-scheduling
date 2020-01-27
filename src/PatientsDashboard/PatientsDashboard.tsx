import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPatientAction, IPatientStates } from "../store/reducers/patient";
import { addProcedureAction } from "../store/reducers/procedure";
import Patients from './../Patients/Patients';

const toDate = (date: Date) =>
  `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()}`;

const PatientsDashboard: React.FC = () => {
  let { patientList, nextId } = useSelector<
    { patients: IPatientStates },
    IPatientStates
  >(state => state.patients);
  const dispatch = useDispatch(); //how to add a person to the list
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  return (
    <div className="">
      <div className="Patient-form">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          aria-label="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          aria-label="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          required
        />
        <label>Gender</label>
        <select
          name="gender"
          onChange={event => setGender(event.target.value as "Male" | "Female")}
        >
          {["Male", "Female"].map(gender => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>

        <label>Date of Birth</label>
        <input
          type="date"
          name="date-of-birth"
          value={dateOfBirth ? toDate(dateOfBirth) : toDate(new Date())}
          onChange={event => {
            setDateOfBirth(new Date(event.target.value));
          }}
        />
        <button
          onClick={() =>
            dispatch(
              addPatientAction({
                id: nextId,
                firstName,
                lastName,
                gender,
                dateOfBirth
              })
            )
          }
        >
          Add patient
        </button>
      </div>
      <table>
        <tr>
          {["First Name", "Last Name", "Gender", "Date of Birth"].map(
            header => {
              return <th>{header}</th>;
            }
          )}
        </tr>
        <Patients/>
      </table>
    </div>
  );
};

export default PatientsDashboard;
