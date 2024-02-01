import { Box, Button } from '@mui/material'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa6";

const SocialSection = () => {
  return (
    <Box display={{ xs: "block", sm: "block", md: "flex", lg: "flex" }}>
      <Box display={"flex"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: 1,
            color: "#002e60",
            padding: "12px",
            fontSize: "15px",
            mr: 1,
            cursor: "pointer"
          }}
        >
          <FaFacebookF />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: 1,
            color: "#002e60",
            padding: "12px",
            fontSize: "15px",
            mr: 1,
            cursor: "pointer"
          }}
        >
          <FaInstagram />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: 1,
            color: "#002e60",
            padding: "12px",
            fontSize: "15px",
            mr: 1,
            cursor: "pointer"
          }}
        >
          <FaYoutube />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: 1,
            color: "#002e60",
            padding: "12px",
            fontSize: "15px",
            mr: 1,
            cursor: "pointer"
          }}
        >
          <FaLinkedinIn />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: 1,
            color: "#002e60",
            padding: "12px",
            fontSize: "15px",
            mr: 1,
            cursor: "pointer"
          }}
        >
          <FaTiktok />
        </Box>
      </Box>
      <Box ml={{ xs: 0, sm: 0, md: 3, lg: 3 }} mt={{ xs: 2, sm: 2, md: 0, lg: 0 }}>
        <Button
          variant='outlined'
          sx={{
            color: "#96a8bd",
            border: "1px solid #6c86a3",
            borderRadius: 0,
            fontSize: "12px",
            padding: "9px 25px",
            '&.MuiButton-root:hover': {
              border: "1px solid #6c86a3"
            }
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, marginRight: "5px" }}>Dealer </span> Login
        </Button>
      </Box>
      <Box ml={{ xs: 0, sm: 0, md: 3, lg: 3 }} mt={{ xs: 2, sm: 2, md: 0, lg: 0 }}>
        <Button
          variant='outlined'
          sx={{
            color: "#96a8bd",
            border: "1px solid #6c86a3",
            borderRadius: 0,
            padding: "9px 25px",
            fontSize: "12px",
            '&.MuiButton-root:hover': {
              border: "1px solid #6c86a3"
            }
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, marginRight: "5px" }}>Subscribe </span> to our news
        </Button>
      </Box>
    </Box>
  )
}

export default SocialSection