import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPatientAction, IPatientStates } from "../store/reducers/patient";
import { addProcedureAction } from "../store/reducers/procedure";

const toDate = (date: Date) =>
  `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()}`;

const ProcedureDashboard: React.FC = () => {
  let { patientList, nextId } = useSelector<
    { patients: IPatientStates },
    IPatientStates
  >(state => state.patients);
  const dispatch = useDispatch(); //how to add a person to the list
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Planned" | "In Progress" | "Finished">(
    "Planned"
  );
  const [plannedStartTime, setPlannedStartTime] = useState<Date>();
  const [estimatedEndTime, setEstimatedEndTime] = useState<Date>();

  return (
    <div>
      <h4 className="ui dividing header">New Procedure Form</h4>
      <form className="ui form">
        <div className="field">
          <label>Patient</label>
          <select
            name="patient"
            onChange={event =>
              setStatus(
                event.target.value as "Planned" | "In Progress" | "Finished"
              )
            }
          >
            {["Planned", "In Progress", "Finished"].map(patient => (
              <option value={patient} key={patient}>
                {patient}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="description"
            aria-label="Description"
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder="Description"
            required
          />
        </div>
        <div className="field">
          <label>status</label>
          <select
            name="status"
            onChange={event =>
              setStatus(
                event.target.value as "Planned" | "In Progress" | "Finished"
              )
            }
          >
            {["Planned", "In Progress", "Finished"].map(status => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Planned Start Time</label>
          <input
            type="date"
            name="planned-start-time"
            value={
              plannedStartTime ? toDate(plannedStartTime) : toDate(new Date())
            }
            onChange={event => {
              setPlannedStartTime(new Date(event.target.value));
            }}
          />
        </div>
        <div className="field">
          <label>Estimated End Time</label>
          <input
            type="date"
            name="estimated-end-time"
            value={
              estimatedEndTime ? toDate(estimatedEndTime) : toDate(new Date())
            }
            onChange={event => {
              setEstimatedEndTime(new Date(event.target.value));
            }}
          />
        </div>
        <div className="field">
          <label>Doctor</label>
          <select
            name="doctor"
            onChange={event =>
              setStatus(
                event.target.value as "Planned" | "In Progress" | "Finished"
              )
            }
          >
            {["Planned", "In Progress", "Finished"].map(doctor => (
              <option value={doctor} key={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Room</label>
          <select
            name="room"
            onChange={event =>
              setStatus(
                event.target.value as "Planned" | "In Progress" | "Finished"
              )
            }
          >
            {["Planned", "In Progress", "Finished"].map(room => (
              <option value={room} key={room}>
                {room}
              </option>
            ))}
          </select>
        </div>
        <button
          className="ui button"
          // onClick={() =>
          //   dispatch(
          //     addPatientAction({
          //       id: nextId,
          //       firstName,
          //       lastName,
          //       gender,
          //       dateOfBirth
          //     })
          //   )
          // }
        >
          Add Procedure
        </button>
      </form>
      <hr></hr>
      <h2>Procedure List</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            {[
              "Patient Name",
              "Description",
              "Status",
              "Planned Start Time",
              "Estimated End Time",
              "Doctor",
              "Room"
            ].map(header => {
              return <th>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody> </tbody>
      </table>
    </div>
  );
};

export default ProcedureDashboard;
