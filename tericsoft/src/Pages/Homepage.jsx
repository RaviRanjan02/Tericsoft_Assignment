import React from "react";
import Box from "@mui/material/Box";
import { RiAdminFill, RiUser3Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    // main container start here
    <Box sx={{ width: "90%", margin: "0 auto", minHeight: "720px" }}>
      {/* sub main container start here*/}
      <Box
        sx={{
          width: "90%",
          margin: "20px auto",
          display: "flex",
          padding: "20px",
        }}
      >
        {/* add employee container start here*/}
        <Box
          sx={{
            width: "30%",
            margin: "50px auto",
            minHeight: "300px",
            boxShadow: 5,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{ minHeight: "100px", fontSize: "100px", marginTop: "50px" }}
          >
            <RiAdminFill />
          </Box>
          <Box sx={{ minHeight: "50px", marginTop: "50px" }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/employee")}
            >
              Add Employee
            </Button>
          </Box>
        </Box>
        {/* Employee Details container starts here */}
        <Box
          sx={{
            width: "30%",
            margin: "50px auto",
            minHeight: "300px",
            boxShadow: 5,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{ minHeight: "100px", fontSize: "100px", marginTop: "50px" }}
          >
            <RiUser3Fill />
          </Box>
          <Box sx={{ marginTop: "50px", minHeight: "100px" }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/table")}
            >
              Employee Details
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
