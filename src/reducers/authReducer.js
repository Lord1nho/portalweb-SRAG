const authReducer = (state = { isAuthenticated: false, email: ''}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isAuthenticated: true,
          email: action.payload.email,
        };
      case 'LOGOUT':
        return {
          isAuthenticated: false,
          email: '',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  