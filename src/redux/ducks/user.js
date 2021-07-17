// ACTION TYPES
export const FETCH_USERS_ = "FETCH_USERS_";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// ACTION MAKER
// FETCHING DATA
export const fetchUsers = () => {
  return {
    type: FETCH_USERS_,
  };
};

// FETCHING DATA SUCCESS
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

// FETCHING DATA ERROR
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: error,
  };
};

// Initial State
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//REDUCERS
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // If we fetch data
    case FETCH_USERS_: {
      return {
        ...state,
        loading: true,
      };
    }
    // If we received data
    case FETCH_USER_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    // If we received error
    case FETCH_USER_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    }

    // If we break the code in any case
    default:
      return state;
  }
};

export default userReducer;
