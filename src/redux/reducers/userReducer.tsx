const initialState = {
  users: [],
};

export default function (
  state: any = initialState,
  action: {type: string; payload: any},
) {
  switch (action.type) {
    case 'FETCH_USERS':
      state.users = action.payload;
      return state.users;
    case 'ADD_USERS':
      state.users = action.payload;
      return state.users;
    default:
      return state;
  }
}
