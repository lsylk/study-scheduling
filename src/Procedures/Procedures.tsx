import React from "react";
import { useSelector } from "react-redux";
import { IProcedureStates } from "../store/reducers/procedure";

const Procedures: React.FC = () => {
  let { procedureList } = useSelector<
    { procedures: IProcedureStates },
    IProcedureStates
  >(state => state.procedures);
  return (
    <>
      {procedureList.map(procedure => {
        return (
          <tr key={procedure.id}>
            <td>{procedure.patientId}</td>
            <td>{procedure.description}</td>
            <td>{procedure.status}</td>
            <td>{procedure.plannedStartTime?.toLocaleString()}</td>
            <td>{procedure.estimatedEndTime?.toLocaleString()}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Procedures;
