export interface IProcedure {
  id: number;
  patientId: number | 1;
  description: string;
  status: "Planned" | "In Progress" | "Finished";
  plannedStartTime: Date;
  estimatedEndTime?: Date;
  doctorId: number | 1;
  roomId: number | 1;
}
export interface IProcedureStates {
  nextId: number;
  procedureList: IProcedure[];
}

const initialState: IProcedureStates = {
  nextId: 3,
  procedureList: [
    {
      id: 1,
      patientId: 1,
      description: "Headaches and nausea",
      status: "Planned",
      plannedStartTime: new Date("2020-1-30 12:00:00"),
      doctorId: 1,
      roomId: 1
    },
    {
      id: 2,
      patientId: 3,
      description: "Broken Leg",
      status: "In Progress",
      plannedStartTime: new Date("2020-1-26 14:00:00"),
      doctorId: 2,
      roomId: 2
    }
  ]
};

const reducer = (
  state = initialState,
  action: { type: "ADD_PROCEDURE" ; data: IProcedure } | {type: "UPDATE_PROC_STATUS", id: number, status: "Planned" | "In Progress" | "Finished"}
) => {
  switch (action.type) {
    case "ADD_PROCEDURE": {
      let newState = Object.assign({}, state);
      newState.procedureList.push(action.data);
      return newState;
    }
    case "UPDATE_PROC_STATUS": {
        let newState = Object.assign({}, state);
        let i = newState.procedureList.findIndex(procedure => procedure.id === action.id);
        newState.procedureList[i].status = action.status;
        return newState;
    }
  }
  return state;
};

export function addProcedureAction(procedure: IProcedure) {
  return {
    type: "ADD_PROCEDURE",
    data: procedure
  };
}

export function changeProcStatus(procedureId: number, status: "Planned" | "In Progress" | "Finished") {
  return {
    type: "UPDATE_PROC_STATUS",
    id: procedureId,
    status
  }
}

export default reducer;
