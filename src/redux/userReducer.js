const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state, 
        payload:action.payload}
      default: 
        return state;  
  }
}
export default userReducer;