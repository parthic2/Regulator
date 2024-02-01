"use client";
/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { modelsData } from '@/data/Data';
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Model = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box>
        <Typography
          color={"#3f6289"}
          textTransform={"uppercase"}
          letterSpacing={"2px"}
          fontSize={{ xs: "12px", sm: "15px", md: "20px", lg: "20px" }}
        >
          Our <span style={{ color: "#002e60", fontWeight: 900 }}>Models</span>
        </Typography>
      </Box>

      <motion.main
        variants={variants}
        initial="hidden"
        whileInView="enter"
        transition={{ type: "linear" }}
      >
        <Box mt={2}>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            breakpoints={{
              '1400': { slidesPerView: 2.5 },
              '1200': { slidesPerView: 2.5 },
              '992': { slidesPerView: 2.5 },
              '768': { slidesPerView: 1.5 },
              '576': { slidesPerView: 1 },
              '0': { slidesPerView: 1 },
            }}
          >
            {modelsData.map((model, index) => (
              <SwiperSlide key={index}>
                <Box position={"relative"}>
                  <img src={model.image} alt={`Model ${index + 1}`} style={{ width: "100%", height: "80vh" }} />
                </Box>

                <Box
                  position={"absolute"}
                  top={"0"}
                  right={"0"}
                  width={"auto"}
                  padding={"10px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                  alignItems={"center"}
                  color={"#fff"}
                >
                  <Typography fontSize={model.fontSize}>{model.number}</Typography>
                </Box>

                <Box
                  position={"absolute"}
                  bottom={"40px"}
                  left={"0"}
                  right={"0"}
                  width={"auto"}
                  padding={"10px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                  alignItems={"center"}
                >
                  <Box
                    sx={{
                      background: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "10px", md: "12px 30px", lg: "12px 30px" },
                      mb: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    <Typography
                      color={"#3f6289"}
                      letterSpacing={"2px"}
                      fontSize={{ xs: "12px", sm: "15px", md: "12px", lg: "12px" }}
                    >
                      View <span style={{ color: "#002e60", fontWeight: 900 }}>Details</span>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "10px", md: "12px 30px", lg: "12px 30px" },
                      mb: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    <Typography
                      color={"#3f6289"}
                      letterSpacing={"2px"}
                      fontSize={{ xs: "12px", sm: "15px", md: "12px", lg: "12px" }}
                    >
                      <span style={{ color: "#002e60", fontWeight: 900 }}>Build </span> your {model.number}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.main>
    </Container>
  )
}

export default Model