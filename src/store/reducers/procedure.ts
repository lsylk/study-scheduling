interface IProcedure {
  id: number;
  patientId: number;
  description: string;
  status: "Planned" | "In Progress" | "Finished";
  plannedStartTime: Date;
  estimatedEndTime?: Date;
  doctorId: number;
  roomId: number;
}

interface IDoctor {
  id: number;
  name: string;
}

interface IRoom {
  id: number;
  name: string;
}

interface IProceduresState {
  nextId: number;
  procedureList: IProcedure[];
}

const initialState: IProceduresState = {
  nextId: 3,
  procedureList: [
    {
      id: 1,
      patientId: 1,
      description: "CT Scan",
      status: "Planned",
      plannedStartTime: new Date("30/1/2020"),
      doctorId: 1,
      roomId: 1
    },
    {
      id: 2,
      patientId: 3,
      description: "X-rays",
      status: "In Progress",
      plannedStartTime: new Date("26/1/2020"),
      doctorId: 2,
      roomId: 2
    }
  ]
};

const reducer = (
  state = initialState,
  action: { type: "ADD_PROCEDURE" | "UPDATE_PROCEDURE"; data: IProcedure }
) => {
  switch (action.type) {
    case "ADD_PROCEDURE": {
      let newState = Object.assign({}, state);
      newState.procedureList.push(action.data);
      return newState;
    }
    case "UPDATE_PROCEDURE": {
        let newState = Object.assign({}, state);
        let i = newState.procedureList.findIndex(procedure => procedure.id === action.data.id);
        newState.procedureList[i] = action.data;
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

export function UpdateProcedureAction(procedure: IProcedure) {
    return {
      type: "UPDATE_PROCEDURE",
      data: procedure
    };
  }

export default reducer;
