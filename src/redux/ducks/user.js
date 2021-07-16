// ACTION TYPES
export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";

// ACTION MAKER
export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

// Initial State
const initialState = {
  users: undefined,
};

//REDUCERS
const userReducer = (state=initialState, action)=>{
    switch (action.type) {
        // If we get user data
        case SET_USERS:{
            return{
                ...state,
                users: action.payload
            }
        }
        // If its some error
        default:
            return state;
    }
}

export default userReducer;