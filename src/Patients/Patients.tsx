import React from "react";
import { useSelector } from "react-redux";
import { IPatientStates } from "../store/reducers/patient";

const Patients: React.FC = () => {
  let { patientList } = useSelector<
    { patients: IPatientStates },
    IPatientStates
  >(state => state.patients);
  return (
    <>
      {patientList.map(patient => {
        return (
          <tr key={patient.id}>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.gender}</td>
            <td>{patient.dateOfBirth?.toLocaleString()}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Patients;
