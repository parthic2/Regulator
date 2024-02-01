"use client"
/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography } from '@mui/material'
import { motion } from "framer-motion";
import React from 'react'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Exploring = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }} className='bg-water'>
      <motion.main
        variants={variants}
        initial="hidden"
        whileInView="enter"
        transition={{ type: "linear" }}
      >
        <Box p={{ xs: 0, sm: 3, md: 5, lg: 7 }}>
          <Typography
            textTransform={"uppercase"}
            color={"#f9fbfd"}
            fontWeight={200}
            sx={{ typography: { sm: 'h6', xs: 'h6', lg: "h4", md: "h4" }, lineHeight: "15px !important" }}
          >
            Perfect for exploring
          </Typography>
          <Typography
            textTransform={"uppercase"}
            color={"#f9fbfd"}
            sx={{
              typography: {
                xs: { fontWeight: '600', fontSize: "1.3rem" },
                sm: { fontWeight: '600', fontSize: "3rem" },
                lg: { fontWeight: "900", fontSize: "4rem" },
                md: { fontWeight: "900", fontSize: "4rem" }
              }
            }}
          >
            Above the water
          </Typography>
        </Box>
        <Box p={{ xs: 0, sm: 3, md: 5, lg: 7 }} mt={"20%"}>
          <Typography
            textTransform={"uppercase"}
            color={"#f9fbfd"}
            fontWeight={200}
            sx={{ typography: { sm: 'h5', xs: 'h5', lg: "h4", md: "h4" } }}
          >
            and <span style={{ fontWeight: 900 }}>below</span>
          </Typography>
          <Box mt={4} mb={4}>
            <img src="/image/below_water.png" alt="Below Water" style={{ borderRadius: "15px" }} />
          </Box>
        </Box>
      </motion.main>
    </Container>
  )
}

export default Exploring