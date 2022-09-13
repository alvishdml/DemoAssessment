export function fetchUsers(data: []) {
  return {
    type: 'FETCH_USERS',
    payload: data,
  };
}

export function addUser(data: object) {
  return {
    type: 'ADD_USERS',
    payload: data,
  };
}
