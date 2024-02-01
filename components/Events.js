import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Events = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} md={6} sm={6} mb={2}>
          <Box
            sx={{
              backgroundImage: "url('/image/events.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "16px",
              height: "60vh",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: "10px", sm: "10px", md: "20px 30px", lg: "20px 30px" },
                mb: 3,
                textTransform: "uppercase",
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -80%)",
                width: "60%", // Adjust the width as needed
                zIndex: 1,
              }}
            >
              <Typography
                color={"#3f6289"}
                letterSpacing={"2px"}
                fontSize={{ xs: "12px", sm: "15px", md: "15px", lg: "15px" }}
              >
                Upcoming <span style={{ color: "#002e60", fontWeight: 900 }}>Events</span>
              </Typography>
              <ArrowRightAltIcon sx={{
                pl: { xs: 1, sm: 1, md: 2, lg: 2 }, color: "#002e60", fontSize: "40px"
              }}
              />
            </Box>
          </Box>
        </Grid>
        {/* Similar modification for the second grid item */}
        <Grid item xs={12} lg={6} md={6} sm={6} mb={2}>
          <Box
            sx={{
              backgroundImage: "url('/image/dealer.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "16px",
              height: "60vh",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: "10px", sm: "10px", md: "20px 30px", lg: "20px 30px" },
                mb: 3,
                textTransform: "uppercase",
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -80%)",
                width: "60%", // Adjust the width as needed
                zIndex: 1,
              }}
            >
              <Typography
                color={"#3f6289"}
                letterSpacing={"2px"}
                fontSize={{ xs: "12px", sm: "15px", md: "15px", lg: "15px" }}
              >
                Find your <span style={{ color: "#002e60", fontWeight: 900 }}>dealer</span>
              </Typography>
              <ArrowRightAltIcon sx={{
                pl: { xs: 1, sm: 1, md: 2, lg: 2 }, color: "#002e60", fontSize: "40px"
              }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Events;
