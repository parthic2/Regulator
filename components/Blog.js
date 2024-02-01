"use client"
/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import QuestionSection from './QuestionSection';
import { blog } from '@/data/Data';
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <motion.main
        variants={variants}
        initial="hidden"
        whileInView="enter"
        transition={{ type: "linear" }}
      >
        <Grid container spacing={2} mt={4}>
          {blog.map((blog, index) => (
            <Grid item xs={12} lg={4} md={4} sm={12} key={index}>
              <img src={blog.image} alt='Blog' />
              <Box mt={3}>
                <Typography
                  color={"#103b6a"}
                  fontWeight={800}
                  fontSize={"15px"}
                  textTransform={"uppercase"}
                >
                  {blog.title}
                </Typography>
                <Typography
                  mt={1}
                  color={"#879096"}
                  fontSize={"18px"}
                >
                  {blog.description}
                </Typography>
                <Typography
                  mt={2}
                  color={"#103b6a"}
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
                      marginRight: "10px"
                    }}
                  /> Read More
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.main>

      <QuestionSection />
    </Container>
  )
}

export default Blog