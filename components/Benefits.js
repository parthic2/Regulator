/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { benefits } from '@/data/Data';

const Benefits = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {benefits.map((benefit, index) => (
          <SwiperSlide key={index}>
            <Box position={"relative"}>
              <img src={benefit.image} alt='Benefits slide' style={{ width: "100%", height: "80vh" }} />
            </Box>

            <Box
              sx={{ opacity: 0.8 }}
              backgroundColor={"#164578"}
              position={"absolute"}
              top={"0"}
              left={"0"}
              right={"0"}
              width={"auto"}
              padding={"10px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"80vh"}
            >
              <Typography
                textTransform={"uppercase"}
                color={"#f9fbfd"}
                fontWeight={200}
                sx={{ typography: { sm: 'h6', xs: 'h6', lg: "h5", md: "h5" }, lineHeight: "15px !important" }}
              >
                {benefit.topic}
              </Typography>
              <Typography
                textTransform={"uppercase"}
                color={"#f9fbfd"}
                sx={{
                  typography: {
                    xs: { fontWeight: '600', fontSize: "1rem" },
                    sm: { fontWeight: '600', fontSize: "1rem" },
                    lg: { fontWeight: "900", fontSize: "2rem" },
                    md: { fontWeight: "900", fontSize: "2rem" }
                  }
                }}
              >
                {benefit.title}
              </Typography>
              <Typography
                textAlign={"center"}
                mt={4}
                color={"#ced5df"}
                fontWeight={200}
              >
                {benefit.description} <br/> {benefit.desc1}
              </Typography>
              <Typography
                mt={2}
                color={"#fafbfc"}
                fontWeight={800}
                letterSpacing={2}
                textTransform={"uppercase"}
                fontSize={"12px"}
                display={"flex"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <SubdirectoryArrowRightIcon
                  sx={{
                    fontSize: "25px",
                    background: "#c2d5ed",
                    borderRadius: "50px",
                    padding: "5px",
                    marginRight: "10px",
                    color: "#0a3667"
                  }}
                /> Read More
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Benefits;