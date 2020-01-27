interface IRoom {
  id: number;
  name: string;
}
interface IRoomsState {
  nextId: number;
  roomList: IRoom[];
}

const initialState: IRoomsState = {
  nextId: 3,
  roomList: [
    {
      id: 1,
      name: "X-ray"
    },
    {
      id: 2,
      name: "Emergency"
    }
  ]
};

const reducer = (
  state = initialState,
) => {
  return state;
};

export default reducer;

