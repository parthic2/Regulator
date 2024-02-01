/* eslint-disable @next/next/no-img-element */
import { Box, Grid, ListItem, Typography } from '@mui/material'
import React from 'react'

const CopyRightSection = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8} color={"#96a8bd"}>
          <Typography fontSize={"12px"}>
            Copyright Regulator Marine, Inc. All Rights Reserved. Specifications, standards, options and availability are subject to change.
          </Typography>
          <Typography fontSize={"12px"} mt={1}>
            Regulator Marine and the Regulator Marine fish logo are registered trademarks of Regulator Marine, Inc.
          </Typography>

          <Box fontSize={"12px"} mt={1} display={"flex"}>
            <ListItem
              sx={{ pl: 0, width: { xs: "100%", sm: "100%", md: "15%", lg: "15%" }, pr: { xs: 0, sm: 0, md: "16px", lg: "16px" }, cursor: "pointer" }}
            >
              Privacy Policy
            </ListItem>
            <ListItem
              sx={{ pl: 0, width: { xs: "100%", sm: "100%", md: "15%", lg: "15%" }, pr: { xs: 0, sm: 0, md: "16px", lg: "16px" }, cursor: "pointer" }}
            >
              Cookie Policy
            </ListItem>
            <ListItem
              sx={{ pl: 0, width: { xs: "100%", sm: "100%", md: "15%", lg: "15%" }, pr: { xs: 0, sm: 0, md: "16px", lg: "16px" }, cursor: "pointer" }}
            >
              Sitemap
            </ListItem>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} display={"flex"}>
          <img src="/image/yamaha.png" alt='Yamaha logo' style={{ width: "170px", height: "30px" }} />
          <img src="/image/garmin.png" alt='Garmin logo' style={{ width: "170px", height: "30px", marginLeft: '10px' }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CopyRightSection