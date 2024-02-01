import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const QuestionSection = () => {
  return (
    <Box mt={10}>
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
        Your Questions
      </Typography>
      <Typography
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"#113b6a"}
        sx={{ typography: { sm: 'body1', xs: 'body1', lg: "h4", md: "h4" } }}
      >
        answered by experts
      </Typography>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={3}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 0,
            border: "2px solid #8ed3d0",
            padding: "10px 30px",
            '&.MuiButton-root:hover': {
              border: "2px solid #8ed3d0",
              background: "none"
            }
          }}
        >
          <Typography color={"#3f6289"} mr={0.6}>View</Typography>
          <Typography color={"#002e60"} fontWeight={700}>Resources</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default QuestionSection