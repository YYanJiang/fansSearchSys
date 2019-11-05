function usersReducer(state = {loading: false, users: []}, action) {
  switch(action.type) {
    case 'LOADING_USERS':
      return {...state, loading: true}
    case 'LOAD_REGISTERED_USERS': 
      console.log(action.payload);
      return {loading: false, users: action.payload}

    default: 
      return state;
  }
}

export default usersReducer;