import {
  GET_EMPLOYEE_LOADING,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_LOADING,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  ADD_EMPLOYEE_LOADING,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
} from "./actionTypes";

const initState = {
  employee: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, { type, payload }) => {
  
switch (type) {
    case GET_EMPLOYEE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        employee: payload,
      };
    }

    case GET_EMPLOYEE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_EMPLOYEE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case ADD_EMPLOYEE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_EMPLOYEE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case UPDATE_EMPLOYEE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};

export default reducer;
