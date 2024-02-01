"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Button, ButtonGroup, Container, Divider, Grid, Typography } from "@mui/material";
import RegulatorSection from './RegulatorSection';
import { features } from '@/data/Data';
import { motion } from "framer-motion";

const FishingPerfect = () => {
  return (
    <Container maxWidth="lg" sx={{ background: "#ecf2f9", borderRadius: 4, p: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exist={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}>
        <Typography
          textAlign={"center"}
          textTransform={"uppercase"}
          color={"#5c7b9c"}
          sx={{ typography: { sm: 'body1', xs: 'body1', lg: "h4", md: "h4" } }}
        >
          Perfect for both
        </Typography>
        <Typography
          textAlign={"center"}
          textTransform={"uppercase"}
          color={"#002e60"}
          sx={{
            typography: {
              xs: { fontWeight: '600', fontSize: "1.3rem" },
              sm: { fontWeight: '600', fontSize: "2rem" },
              lg: { fontWeight: "900", fontSize: "3rem" },
              md: { fontWeight: "900", fontSize: "3rem" }
            }
          }}
        >
          Fishing & leisure
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={3}>
          <Typography
            color={"#a4adb4"}
            fontSize={"14px"}
            textAlign={"center"}
            width={"50%"}
            sx={{ typography: { sm: { width: "100%" }, xs: { width: "100%" }, lg: { width: "50%" }, md: { width: "50%" } } }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ut perspiciatis illum animi. Libero rem debitis reprehenderit assumenda, corporis officiis eveniet! Aspernatur praesentium, magnam at tempore assumenda eius culpa temporibus.
          </Typography>
        </Box>
      </motion.div>

      <Grid container spacing={2} mt={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12} lg={3} md={3} sm={12} textAlign={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}>
            <Typography
              textTransform={"uppercase"}
              color={"#033062"}
              fontWeight={800}
              fontSize={"15px"}
            >
              View features for
            </Typography>
            <ButtonGroup sx={{ mt: 1 }}>
              <Button
                variant="contained"
                sx={{
                  background: "#006890",
                  padding: "5px 25px 5px 25px",
                  color: "#fff",
                  fontWeight: "bold",
                  '&.MuiButton-root:hover': {
                    background: "#006890",
                  }
                }}
              >
                Fishing
              </Button>
              <Button
                sx={{
                  background: "#fff",
                  border: "1px solid #fff",
                  padding: "5px 25px 5px 25px",
                  color: "#1b4470",
                  fontWeight: "bold",
                  '&.MuiButton-root:hover': {
                    background: "#fff",
                    border: "1px solid #fff"
                  }
                }}
              >
                Leisure
              </Button>
            </ButtonGroup>
            <Box mt={3}>
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <Box display="flex" p={2} className="box-hover">
                    <Typography color="#486a8f" sx={{ typography: { xs: { fontSize: "11px" }, sm: { fontSize: "12px" } } }}>
                      {feature.number}
                    </Typography>
                    <Typography color="#6380a0" sx={{ typography: { xs: { fontSize: "11px" }, sm: { fontSize: "12px" } }, margin: "0 5px 0 5px" }}>
                      /
                    </Typography>
                    <Typography
                      className="text-color"
                      color="#083565"
                      fontWeight={800}
                      textTransform="uppercase"
                      sx={{ typography: { xs: { fontSize: "11px" }, sm: { fontSize: "12px" } } }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Divider />
                </React.Fragment>
              ))}
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} textAlign={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}>
            <img className="img-fluid" src={"/image/fishing.jpg"} alt="fishing" />
          </motion.div>
        </Grid>
        <Grid item xs={12} lg={3} md={3} sm={12} alignItems={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}>
            <img src={"/image/bracket.png"} alt="bracket" />
            <Box>
              <Typography
                color={"#083565"}
                fontSize={"15px"}
                fontWeight={800}
              >
                Bracket-mounted engines
              </Typography>
              <Typography
                color={"#517194"}
                fontSize={"14px"}
              >
                for greater running surface and less resistance in any condition
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <RegulatorSection />
    </Container>
  )
}

export default FishingPerfect