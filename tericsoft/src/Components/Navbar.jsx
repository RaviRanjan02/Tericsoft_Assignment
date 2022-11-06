import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "#80cbc4",
        color: "white",
        fontSize: "22px",
        boxShadow: 5,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        p: 2,
        Width: "100%",
      }}
    >
      <Link to="/">
        <Box>
          <img
            src="https://tericsoft.com/wp-content/uploads/2021/08/Web-Logo-371x90px-200x49.png"
            alt="tericsoft logo"
          ></img>
        </Box>
      </Link>
    </Box>
  );
};

export default Navbar;
