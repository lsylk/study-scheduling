export interface IRoom {
  id: number;
  name: string;
}
export interface IRoomStates {
  nextId: number;
  roomList: IRoom[];
}

const initialState: IRoomStates = {
  nextId: 3,
  roomList: [
    {
      id: 1,
      name: "CT Scan"
    },
    {
      id: 2,
      name: "X-ray"
    }
  ]
};

const reducer = (
  state = initialState,
) => {
  return state;
};

export default reducer;

