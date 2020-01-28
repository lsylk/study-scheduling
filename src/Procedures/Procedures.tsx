import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProcedureStates, changeProcStatus } from "../store/reducers/procedure";
import { IPatientStates } from "../store/reducers/patient";
import { IDoctorStates } from "../store/reducers/doctor";
import { IRoomStates } from "../store/reducers/room";

const Procedures: React.FC = () => {
  let { procedureList } = useSelector< { procedures: IProcedureStates }, IProcedureStates >(state => state.procedures);
  let { patientList } = useSelector< { patients: IPatientStates }, IPatientStates >(state => state.patients);
  let { doctorList } = useSelector<{ doctors: IDoctorStates }, IDoctorStates>( state => state.doctors);
  let { roomList } = useSelector<{ rooms: IRoomStates }, IRoomStates>( state => state.rooms);

  function patientName(patientId: number) {
    const patient = patientList.find(p => p.id === patientId)
    if(patient) {
      return `${patient.firstName}  ${patient.lastName}`
    } else {
      return `Patient Id #${patientId}`
    }
  }

  function doctorName(doctorId: number) {
    const doctor = doctorList.find(p => p.id === doctorId)
    if(doctor) {
      return doctor.name; 
    } else {
      return `Doctor Id #${doctorId}`
    }
  }

  function roomName(roomId: number) {
    const room = roomList.find(p => p.id === roomId)
    if(room) {
      return room.name; 
    } else {
      return `Room Id #${roomId}`
    }
  }

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {procedureList.map(procedure => {
        return (
          <tr key={procedure.id}>
            <td>{patientName(procedure.patientId)}</td>
            <td>{procedure.description}</td>
            <td>
              
          <select
            name={`procedure-status-${procedure.id}`}
            onChange={event =>
              dispatch(changeProcStatus(procedure.id, event.target.value as "Planned" | "In Progress" | "Finished"))
            }
            value={procedure.status}
          >
            {["Planned", "In Progress", "Finished"].map(status => (
              <option value={status} key={status} >
                {status}
              </option>
            ))}
            </select>
            </td>
            <td>{procedure.plannedStartTime?.toLocaleString()}</td>
            <td>{procedure.estimatedEndTime?.toLocaleString()}</td>
            <td>{doctorName(procedure.doctorId)}</td>
            <td>{roomName(procedure.roomId)}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default Procedures;
