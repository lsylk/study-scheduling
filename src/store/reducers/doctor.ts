interface IDoctor {
  id: number;
  name: string;
}

interface IDoctorsState {
  nextId: number;
  doctorList: IDoctor[];
}

const initialState: IDoctorsState = {
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
