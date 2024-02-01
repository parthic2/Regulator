/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Divider, Grid, ListItem, Typography } from '@mui/material'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import SocialSection from './SocialSection';
import CopyRightSection from './CopyRightSection';

const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, marginBottom: "40px", background: "#002e60", borderRadius: "14px", color: "white" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={2} md={2} sm={6}>
          <Box>
            <Typography
              color={"#fcfcfd"}
              fontWeight={600}
              textTransform={"capitalize"}
              fontSize={"16px"}
            >
              Boats
            </Typography>
            <Divider sx={{ borderColor: "#477799", my: 1 }} />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              color={"#96a8bd"}
              fontSize={"12px"}
              textTransform={"uppercase"}
            >
              <Box>
                <ListItem sx={{ pl: 0 }}>23</ListItem>
                <ListItem sx={{ pl: 0 }}>28</ListItem>
                <ListItem sx={{ pl: 0 }}>31</ListItem>
                <ListItem sx={{ pl: 0 }}>34</ListItem>
                <ListItem sx={{ pl: 0 }}>37</ListItem>
                <ListItem sx={{ pl: 0 }}>41</ListItem>
              </Box>
              <Box>
                <ListItem sx={{ pl: 0 }}>24XO</ListItem>
                <ListItem sx={{ pl: 0 }}>26XO</ListItem>
                <ListItem sx={{ pl: 0 }}>30XO</ListItem>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3} md={3} sm={6}>
          <Box>
            <Typography
              color={"#fcfcfd"}
              fontWeight={600}
              textTransform={"capitalize"}
              fontSize={"16px"}
            >
              Discover
            </Typography>
            <Divider sx={{ borderColor: "#477799", my: 1 }} />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              color={"#96a8bd"}
              fontSize={"12px"}
              textTransform={"uppercase"}
            >
              <Box>
                <ListItem sx={{ pl: 0, cursor: "pointer" }}>New For 2024</ListItem>
                <ListItem sx={{ pl: 0, cursor: "pointer" }}>Why regulator</ListItem>
                <ListItem sx={{ pl: 0, cursor: "pointer" }}>Fishing features</ListItem>
                <ListItem sx={{ pl: 0, cursor: "pointer" }}>Leisure features</ListItem>
              </Box>
              <Box>
                <ListItem sx={{ pl: 0, cursor: "pointer" }}>Brochures</ListItem>
                <ListItem sx={{ pl: 0, cursor: "pointer" }}>Warranty</ListItem>
                <ListItem sx={{ pl: 0, cursor: "pointer" }}>Blog</ListItem>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3} md={3} sm={3}>
          <Box>
            <Typography
              color={"#fcfcfd"}
              fontWeight={600}
              textTransform={"capitalize"}
              fontSize={"16px"}
            >
              Owners Resources
            </Typography>
            <Divider sx={{ borderColor: "#477799", my: 1 }} />
            <Box textTransform={"uppercase"} color={"#96a8bd"}>
              <Typography mb={1} fontSize={"12px"} sx={{ cursor: "pointer" }}>Manuals</Typography>
              <Typography mb={1} fontSize={"12px"} sx={{ cursor: "pointer" }}>How to videos</Typography>
              <Typography mb={1} fontSize={"12px"} sx={{ cursor: "pointer" }}>FAQS</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={2} md={2} sm={3}>
          <Box
            color={"#fcfcfd"}
            textTransform={"capitalize"}
          >
            <Typography
              fontWeight={600}
              fontSize={"16px"}
              mb={1}
              sx={{ cursor: "pointer" }}
            >
              About
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={"16px"}
              mb={1}
              sx={{ cursor: "pointer" }}
            >
              Careers
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={"16px"}
              mb={1}
              sx={{ cursor: "pointer" }}
            >
              Events & Boat Shows
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={2} md={2} sm={3}>
          <Box
            color={"#fcfcfd"}
            textTransform={"capitalize"}
          >
            <Typography
              fontWeight={600}
              fontSize={"16px"}
              mb={1}
              sx={{ cursor: "pointer" }}
            >
              Contact
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={"16px"}
              mb={1}
              sx={{ cursor: "pointer" }}
            >
              Find Your Dealer
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={"16px"}
              mb={1}
              sx={{ cursor: "pointer" }}
            >
              Store
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "#395571", my: 4 }} />

      <SocialSection />

      <Divider sx={{ borderColor: "#395571", my: 4 }} />

      <CopyRightSection />
    </Container>
  )
}

export default Footer