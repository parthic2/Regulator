"use client"
/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { motion } from "framer-motion";
import React from 'react';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const BoatPerfect = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, paddingRight: "0", marginRight: "0" }}>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} lg={3} md={3} sm={12} alignSelf={"center"}>
          <motion.main
            variants={variants}
            initial="hidden"
            whileInView="enter"
            transition={{ type: "linear" }}
          >
            <Box>
              <Typography
                textTransform={"uppercase"}
                color={"#5c7b9c"}
                sx={{ typography: { sm: 'body1', xs: 'body1', lg: "h5", md: "h5" } }}
              >
                Find the
              </Typography>
              <Typography
                textTransform={"uppercase"}
                color={"#002e60"}
                sx={{
                  typography: {
                    xs: { fontWeight: '600', fontSize: "1.3rem" },
                    sm: { fontWeight: '600', fontSize: "2rem" },
                    lg: { fontWeight: "900", fontSize: "2rem" },
                    md: { fontWeight: "900", fontSize: "2rem" }
                  }
                }}
              >
                perfect boat
              </Typography>
              <Typography
                color={"#9199a0"}
                fontSize={"17px"}
                mt={3}
              >
                Tell us what you are seeking in a boat ans we all recommend what <span style={{ color: "#747f86", fontWeight: 800 }}>models fit your needs ans wants.</span>
              </Typography>
              <Box mt={3}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    border: "2px solid #9eb0c3",
                    padding: "10px 30px",
                    '&.MuiButton-root:hover': {
                      border: "2px solid #9eb0c3",
                      background: "none"
                    }
                  }}
                >
                  <Typography color={"#3f6289"} mr={0.6}>Boat</Typography>
                  <Typography color={"#002e60"} fontWeight={700}>selector</Typography>
                </Button>
              </Box>
            </Box>
          </motion.main>
        </Grid>
        <Grid item xs={12} lg={9} md={9} sm={12}>
          <img src="/image/boat.png" alt="Perfect Boat" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BoatPerfect