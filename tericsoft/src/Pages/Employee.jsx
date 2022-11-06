import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// all radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// all checkbox
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, getEmployee } from "../Redux/action";
import { ADD_EMPLOYEE_SUCCESS } from "../Redux/actionTypes";

const Employee = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const employeeData = useSelector((state) => state.employee);

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData)).then((res) => {
      if (res.type == ADD_EMPLOYEE_SUCCESS) {
        alert("Data is Added Successfully !");
        dispatch(getEmployee());
      }
    });
  };

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  return (
    <Box sx={{ width: "90%", margin: "0 auto", minHeight: "720px" }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "40%",
            margin: "50px auto",
            boxShadow: 5,
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            borderRadius: 2,
          }}
        >
          <Box>
            <h1>Add Employee</h1>
          </Box>
          {/* Name*/}
          <Box>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              onChange={handleData}
              type={"text"}
              sx={{ width: "90%" }}
            />
          </Box>
          {/* Age */}
          <Box>
            <TextField
              label="Age"
              name="age"
              onChange={handleData}
              variant="outlined"
              type={"text"}
              sx={{ width: "90%" }}
            />
          </Box>
          {/* Phone */}
          <Box>
            <TextField
              label="Phone"
              name="phone"
              variant="outlined"
              onChange={handleData}
              type={"text"}
              sx={{ width: "90%" }}
            />
          </Box>
          {/* Date */}
          <Box>
            <TextField
              variant="outlined"
              type={"date"}
              sx={{ width: "90%" }}
              name="dob"
              onChange={handleData}
            />
          </Box>
          {/* Gender */}
          <Box sx={{ width: "90%", margin: "0 auto" }}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                onChange={handleData}
              >
                <FormControlLabel
                  value="female"
                  name="gender"
                  onChange={handleData}
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  name="gender"
                  onChange={handleData}
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  name="gender"
                  onChange={handleData}
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          {/* Hobbies */}
          <Box sx={{ width: "90%", margin: "0 auto" }}>
            <FormControl>
              <FormLabel>Hobbies</FormLabel>
              <FormGroup row name="hobbies" onChange={handleData}>
                <FormControlLabel
                  value="travelling"
                  name="hobbies"
                  onChange={handleData}
                  control={<Checkbox />}
                  label="Travelling"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="singing"
                  name="hobbies"
                  onChange={handleData}
                  control={<Checkbox />}
                  label="Singing"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Reading"
                  name="hobbies"
                  onChange={handleData}
                  control={<Checkbox />}
                  label="Reading"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Writing"
                  name="hobbies"
                  onChange={handleData}
                  control={<Checkbox />}
                  label="Writing"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box sx={{ margin: "15px" }}>
            <Button variant="contained" size="large" type="submit">
              Add Employee
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Employee;
