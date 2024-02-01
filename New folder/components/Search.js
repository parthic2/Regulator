import { Box, Typography } from '@mui/material'
import React from 'react'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';

const Search = () => {
  return (
    <Box
      position={"absolute"}
      bottom={0}
      left={0}
      right={0}
      width={"auto"}
      display={{ xs: "none", sm: "flex", md: "flex", lg: "flex" }}
      justifyContent={{ xs: "none", sm: "center", md: "center", lg: "center" }}
      alignItems={{ xs: "none", sm: "center", md: "center", lg: "center" }}
    >
      <Box
        backgroundColor={"#002e60"}
        borderRadius={"16px 16px 0 0"}
        padding={"15px 25px"}
        display={"flex"}
        gap={{ xs: "0px", sm: "10px", md: "70px", lg: "70px" }}
        color={"white"}
        textTransform={"uppercase"}
      >
        <div>
          <Typography
            fontSize={"14px"}
            color={"#6883a1"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AnchorOutlinedIcon sx={{ color: "white", mr: 1 }} />
            <span style={{ color: "#fff", fontWeight: 700, marginRight: "5px" }}>Build </span> Your Boat
          </Typography>
        </div>
        <div>
          <Typography
            fontSize={"14px"}
            color={"#6883a1"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MenuBookOutlinedIcon sx={{ color: "white", mr: 1 }} />
            VIew <span style={{ color: "#fff", fontWeight: 700, marginLeft: "5px" }}> Brochures</span>
          </Typography>
        </div>
        <div>
          <Typography
            fontSize={"14px"}
            color={"#6883a1"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FmdGoodOutlinedIcon sx={{ color: "white", mr: 1 }} />
            Find Your <span style={{ color: "#fff", fontWeight: 700, marginLeft: "5px" }}> Dealer</span>
          </Typography>
        </div>
      </Box>
    </Box>
  )
}

export default Search