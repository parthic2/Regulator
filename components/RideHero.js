"use client";

/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from './Header';
import Search from './Search';
import { motion } from "framer-motion";

const RideHero = () => {
  return (
    <Container maxWidth="xl">
      <Box position={"relative"}>
        <img
          src="/image/ride_life.jpg"
          alt="Ride of Life"
          style={{ width: "100%", height: "100vh", borderRadius: "0 0 16px 16px", opacity: "0.75" }} />
      </Box>

      <Header />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exist={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}>
        <Box
          position={"absolute"}
          bottom={"84px"}
          left={{ sm: '100px', xs: '23px', lg: "115px", md: "115px" }}
          width={"auto"}
          padding={"10px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Box
            sx={{ opacity: "0.85" }}
            textTransform={"uppercase"}
            borderRadius={"16px"}
            padding={{ xs: '20px', sm: '45px', lg: "40px", md: "40px" }}
            backgroundColor={"#84b7b8"}
          >
            <Typography
              color={"#002e60"}
              fontWeight={900}
              lineHeight={{ xs: "35px", sm: "40px", md: "55px", lg: "55px" }}
              fontSize={{ xs: "1.6rem", sm: "2rem", md: "3rem", lg: "3rem" }}
            >
              The Ride of <br /> your life
            </Typography>
            <Typography
              color={"#25587a"}
              mt={1}
              sx={{
                typography: {
                  xs: { fontSize: "1rem" },
                  sm: { fontSize: "1rem" },
                  lg: { fontSize: "2rem" },
                  md: { fontSize: "2rem" }
                }
              }}
            >
              Starts with regulator
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <Search />

    </Container>
  )
}

export default RideHero