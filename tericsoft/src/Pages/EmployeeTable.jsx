import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// all tables import
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
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
import { editEmployee, getEmployee } from "../Redux/action";
import { UPDATE_EMPLOYEE_SUCCESS } from "../Redux/actionTypes";

import { useParams } from "react-router-dom";

const EmployeeTable = () => {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  // modal end

  const dispatch = useDispatch();

  const employeeData = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  // all edit data part here

  const [name,setName]=useState("")

  const [age,setAge]=useState("")

  const [phone,setPhone]=useState("")

  const [dob,setDob]=useState("")

  const [gender,setGender]=useState("")

  const[hobbies,setHobbies]= useState("")

  const {id} = useParams()

  const handleEdit = (id) => {
    const payload ={
      name,
      age,
      phone,
      dob,
      gender,
      hobbies
    }
    dispatch(editEmployee(payload,id))
    .then((res) => {
      if(res.type == UPDATE_EMPLOYEE_SUCCESS){
        dispatch(getEmployee())
      }
    })
  }


  return (
    <Box sx={{ width: "90%", margin: "0 auto", minHeight: "720px" }}>
      <Box>
        <h1>Employee Data</h1>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          width: "90%",
          margin: "50px auto",
          minHeight: "420px",
          boxShadow: 5,
        }}
      >
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: "#26a69a" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  S.no
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  Age
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  Phone
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  Date
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  Gender
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  Hobbies
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "20px" }}>
                  Edit
                </TableCell>
              </TableRow>
            </TableHead>
            {/* table body */}

            {employeeData.length > 0 &&
              employeeData.map((el) => {
                return (
                  <TableBody key={el.id}>
                    <TableCell>{el.id}</TableCell>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.age}</TableCell>
                    <TableCell>{el.phone}</TableCell>
                    <TableCell>{el.dob}</TableCell>
                    <TableCell>{el.gender}</TableCell>
                    <TableCell>{el.hobbies}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleOpen}
                        key={el.id}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableBody>
                );
              })}
          </Table>
        </TableContainer>
      </Box>
      {/* modal part */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* employee form start */}
          <Box
            sx={{
              margin: "0 auto",
              padding: "10px",
              boxShadow: 5,
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              borderRadius: 2,
            }}
          >
            <Box>
              <h1>Update Employee </h1>
            </Box>
            {/* Name*/}
            <Box>
              <TextField
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                type={"text"}
                sx={{ width: "80%" }}
              />
            </Box>
            {/* Age */}
            <Box>
              <TextField
                label="Age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                variant="outlined"
                type={"text"}
                sx={{ width: "80%" }}
              />
            </Box>
            {/* Phone */}
            <Box>
              <TextField
                label="Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
                type={"text"}
                sx={{ width: "80%" }}
              />
            </Box>
            {/* Date */}
            <Box>
              <TextField
                variant="outlined"
                type={"date"}
                name="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                sx={{ width: "80%" }}
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
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                   value="female"
                    control={<Radio />}
                    
                    label="Female"
                  />
                  <FormControlLabel
                   
                    control={<Radio />}
                    
                    value="male"
                    
                    label="Male"
                  />
                  <FormControlLabel
                   value="other"
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
                <FormGroup row name="hobbies" value={hobbies} onChange={(e) => setHobbies(e.target.value)}>
                  <FormControlLabel
                    value={hobbies}
                    onChange={(e) => setHobbies(e.target.value)}
                    control={<Checkbox />}
                    label="Travelling"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value={hobbies}
                    onChange={(e) => setHobbies(e.target.value)}
                    control={<Checkbox />}
                    label="Singing"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value={hobbies}
                    onChange={(e) => setHobbies(e.target.value)}
                    control={<Checkbox />}
                    label="Reading"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value={hobbies}
                    onChange={(e) => setHobbies(e.target.value)}
                    control={<Checkbox />}
                    label="Writing"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <Box sx={{ margin: "15px" }}>
              <Button variant="contained" size="large" onClick={handleEdit}>
                Update Employee
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmployeeTable;
