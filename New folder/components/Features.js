/* eslint-disable @next/next/no-img-element */
import { feature } from '@/data/Data'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Features = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <img src="/image/boat1.jpg" alt="Regulator things" style={{ borderRadius: "16px" }} />
      <Box
        mt={{ xs: 1, sm: 1, md: -12, lg: -12 }}
        textAlign={"center"}
        display={{ xs: "block", sm: "block", md: "flex", lg: "flex" }}
        justifyContent={"center"}
        textTransform={"uppercase"}
      >
        {feature.map((feature, index) => (
          <Box sx={{ mr: { sm: 0, xs: 0, lg: 2, md: 2 } }} key={index}>
            <img
              src={feature.image}
              alt="LifeStyle"
              style={{ borderRadius: "10px", marginTop: "10px" }}
            />
            <Typography color={"#3f6289"} fontSize={"14px"} mt={2}>
              {feature.topic} <span style={{ color: "#002e60", fontWeight: 800 }}>{feature.title}</span>
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Features