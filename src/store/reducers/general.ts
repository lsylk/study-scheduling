export interface ISelectedTab {
  selectedTab: string;
}

const initialState: ISelectedTab = {
  selectedTab: 'procedure'
};

const reducer = (
  state = initialState,
  action: {type: "SWITCH_TAB", selectedTab: string}
) => {
  switch(action.type) {
    case "SWITCH_TAB": {
      let newState = Object.assign({}, state);
      newState.selectedTab = action.selectedTab;
      return newState;
    }
  }
  return state;
};

export function switchTabAction(tabName: string) {
  return {
    type: "SWITCH_TAB",
    selectedTab: tabName
  }
}

export default reducer;

