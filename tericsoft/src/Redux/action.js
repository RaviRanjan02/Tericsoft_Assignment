import axios from "axios";
import * as types from "./actionTypes.js";


// GET EMPLOYEE 
const getEmployee = () => (dispatch) => {
    dispatch({type:types.GET_EMPLOYEE_LOADING})

    axios.get("https://tericsoftback.herokuapp.com/employee")
    .then((res) => {
        console.log("data",res.data);
        dispatch({type:types.GET_EMPLOYEE_SUCCESS,payload:res.data})
    })
    .catch((err) => {
        console.log(err);
        dispatch({type:types.GET_EMPLOYEE_ERROR})
    })
}


// Add EMPLOYEE 
const addEmployee = (data) => (dispatch) => {
    console.log(data);
    dispatch({type:types.ADD_EMPLOYEE_LOADING})

   return axios.post("https://tericsoftback.herokuapp.com/employee",data)
    .then((res) => {
        console.log(res.data);
       return dispatch({type:types.ADD_EMPLOYEE_SUCCESS})
        alert("Data Added")
    })
    .catch((err) => {
        console.log(err);
        dispatch({type:types.ADD_EMPLOYEE_ERROR})
    })
}

// Edit Employee
const editEmployee = (data,id) => (dispatch) => {
    dispatch({type:types.UPDATE_EMPLOYEE_LOADING})

    return axios.patch(`https://tericsoftback.herokuapp.com/employee/${id}`,data)
    .then((res) => {
        console.log(res.data);
        return dispatch({type:types.UPDATE_EMPLOYEE_SUCCESS})
    })
    .catch((err) => {
        console.log(err);
        dispatch({type:types.UPDATE_EMPLOYEE_ERROR})
    })
}


export {getEmployee,addEmployee,editEmployee};