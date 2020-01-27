export interface IDoctor {
  id: number;
  name: string;
}

export interface IDoctorStates {
  nextId: number;
  doctorList: IDoctor[];
}

const initialState: IDoctorStates = {
  nextId: 3,
  doctorList: [
    {
      id: 1,
      name: "Sam Kent"
    },
    {
      id: 2,
      name: "Mary Johnson"
    }
  ]
};

const reducer = (
  state = initialState,
) => {
  return state;
};

export default reducer;
