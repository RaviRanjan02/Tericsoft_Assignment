import React from 'react'
import Box from "@mui/material/Box";
import { FaCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <Box sx={{
      bgcolor: "#80cbc4",
        color: "white",
        fontSize: "15px",
        boxShadow: 5,
        p: 2,
        Width: "100%",
    }}> 
    <Box sx={{fontSize:"38px",color: "#000380"}}><FaCopyright/><img src="https://tericsoft.com/wp-content/uploads/2021/08/Web-Logo-371x90px-200x49.png" alt="tericsoft logo"></img></Box>
    </Box>
  )
}

export default Footer