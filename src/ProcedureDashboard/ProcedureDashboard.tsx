import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProcedureAction,
  IProcedureStates
} from "../store/reducers/procedure";
import { IPatientStates } from "../store/reducers/patient";
import { IDoctorStates } from "../store/reducers/doctor";
import { IRoomStates } from "../store/reducers/room";
import Procedures from "./../Procedures/Procedures";

const toDate = (date: Date) =>
  `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()}`;

const ProcedureDashboard: React.FC = () => {
  let { nextId, procedureList } = useSelector<
    { procedures: IProcedureStates },
    IProcedureStates
  >(state => state.procedures);
  let { patientList } = useSelector<
    { patients: IPatientStates },
    IPatientStates
  >(state => state.patients);
  let { doctorList } = useSelector<{ doctors: IDoctorStates }, IDoctorStates>(
    state => state.doctors
  );
  let { roomList } = useSelector<{ rooms: IRoomStates }, IRoomStates>(
    state => state.rooms
  );
  const dispatch = useDispatch();
  const [patientId, setPatientId] = useState<number>(1);

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Planned" | "In Progress" | "Finished">(
    "Planned"
  );
  const [plannedStartTime, setPlannedStartTime] = useState<Date>(new Date());
  const [estimatedEndTime, setEstimatedEndTime] = useState<Date>(new Date());
  const [doctorId, setDoctorId] = useState<number>(1);
  const [roomId, setRoomId] = useState<number>(1);

  return (
    <div>
      <h4 className="ui dividing header">New Procedure Form</h4>
      <form className="ui form">
        <div className="field">
          <label>Patient</label>
          <select
            name="patient"
            onChange={event => setPatientId(Number(event.target.value))}
            required
          >
            {patientList.map(patient => (
              <option value={Number(patient.id)} key={patient.id}>
                {`${patient.firstName} ${patient.lastName}`}
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
            required
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
            onChange={event => setDoctorId(Number(event.target.value))}
            required
          >
            {doctorList.map(doctor => (
              <option value={doctor.id} key={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Room</label>
          <select
            name="room"
            onChange={event => setRoomId(Number(event.target.value))}
            required
          >
            {roomList.map(room => (
              <option value={room.id} key={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="ui button"
          onClick={(event) => {
            console.log(roomId, doctorId, plannedStartTime, patientId)
            if(roomId !== undefined && doctorId !== undefined && plannedStartTime !== undefined && patientId !== undefined && description !== "") {
              dispatch(
                addProcedureAction({
                  id: nextId,
                  patientId,
                  description,
                  status,
                  plannedStartTime,
                  estimatedEndTime,
                  doctorId,
                  roomId
                })
              )
              
            }
            event.preventDefault();
            }
          }
        >
          Add Procedure
        </button>
      </form>
      <hr></hr>
      <h4>Procedure List</h4>
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
            ].map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <Procedures />
        </tbody>
      </table>
    </div>
  );
};

export default ProcedureDashboard;
