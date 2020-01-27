
export interface IPatient {
  id: number;
  firstName: string;
  lastName: string;
  gender?: "Male" | "Female";
  dateOfBirth?: Date;
}

export interface IPatientStates {
  nextId: number;
  patientList: IPatient[];
}

const initialState: IPatientStates = {
  nextId: 4,
  patientList: [
    { id: 1, firstName: "John", lastName: "Smith", gender: "Male"},
    { id: 2, firstName: "Jane", lastName: "Doe", gender: "Female", dateOfBirth: new Date('10/28/1995') },
    { id: 3, firstName: "Amy", lastName: "Lee", dateOfBirth: new Date('10/28/1995') }
  ]
};

const reducer = (state = initialState, action:  {type: "ADD_PATIENT", data: IPatient}) => {
  switch (action.type) {
    case "ADD_PATIENT":
      const newState = Object.assign({}, state);
      newState.patientList.push(action.data);
      newState.nextId++;
      return newState;
  }
  return state;
};

export function addPatientAction(patient: IPatient) {
  return {
    type: "ADD_PATIENT",
    data: patient
  }
}

export default reducer;
