/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Box, Typography, AppBar, Toolbar, IconButton, Drawer, ListItemText, useMediaQuery } from '@mui/material'
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      right={0}
      width={"auto"}
      display={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
      justifyContent={{ xs: "flex", sm: "center", md: "space-between", lg: "space-between" }}
      alignItems={{ xs: "center", sm: "center", md: "center", lg: "center" }}
      margin={"0 60px 0 60px"}

    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "white !important", borderRadius: "0 0 10px 10px" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box width={{ xs: "100px", sm: "100px", md: "200px", lg: "200px" }}>
              <img src="/image/logo.png" alt="Logo" />
            </Box>
          </Typography>

          {!isMobile && (
            <>
              <Box display={"flex"} position={"absolute"} top={0} right={"23px"}>
                <Link href="/">
                  <ListItemText
                    primary="Events & boat shows"
                    primaryTypographyProps={{ fontSize: 13, fontWeight: "medium", color: "#959da2", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <Link href="/">
                  <ListItemText
                    primary="Find your dealer"
                    primaryTypographyProps={{ fontSize: 13, fontWeight: "medium", color: "#959da2", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <Link href="/">
                  <ListItemText
                    primary="Store"
                    primaryTypographyProps={{ fontSize: 13, fontWeight: "medium", color: "#959da2", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <Link href="/">
                  <ListItemText
                    primary="Contact"
                    primaryTypographyProps={{ fontSize: 13, fontWeight: "medium", color: "#959da2", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
              </Box>

              <Box display={"flex"} mt={3}>
                <Link href="/">
                  <ListItemText
                    primary="Boats"
                    primaryTypographyProps={{ fontSize: { xs: 11, sm: 12, md: 13, lg: 14 }, fontWeight: 800, color: "#153f6d", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <Link href="/">
                  <ListItemText
                    primary="Build your boats"
                    primaryTypographyProps={{ fontSize: { xs: 11, sm: 12, md: 13, lg: 14 }, fontWeight: 800, color: "#153f6d", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <Link href="/">
                  <ListItemText
                    primary="Discover"
                    primaryTypographyProps={{ fontSize: { xs: 11, sm: 12, md: 13, lg: 14 }, fontWeight: 800, color: "#153f6d", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <Link href="/">
                  <ListItemText
                    primary="Ownership"
                    primaryTypographyProps={{ fontSize: { xs: 11, sm: 12, md: 13, lg: 14 }, fontWeight: 800, color: "#153f6d", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <Link href="/">
                  <ListItemText
                    primary="About"
                    primaryTypographyProps={{ fontSize: { xs: 11, sm: 12, md: 13, lg: 14 }, fontWeight: 800, color: "#153f6d", margin: "15px", textTransform: "capitalize" }}
                  />
                </Link>
                <SearchIcon sx={{ color: "#153f6d", margin: "15px" }} />
              </Box>
            </>
          )}

          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon sx={{ color: "#153f6d" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <IconButton color="inherit" onClick={handleDrawerClose} sx={{ display: "flex", justifyContent: "flex-end", pr: 2 }}>
            <CloseIcon sx={{ color: "#153f6d" }} />
          </IconButton>

          <Box sx={{ padding: "0 30px" }}>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Events & boat shows"
                primaryTypographyProps={{ fontSize: 13, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Find your dealer"
                primaryTypographyProps={{ fontSize: 13, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Store"
                primaryTypographyProps={{ fontSize: 13, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Contact"
                primaryTypographyProps={{ fontSize: 13, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Boats"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Build your boats"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Discover"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="Ownership"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
            <Link href="/" onClick={handleDrawerClose}>
              <ListItemText
                sx={{ padding: "15px", mt: 0, mb: 0 }}
                primary="About"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 800, color: "#153f6d", textTransform: "capitalize" }}
              />
            </Link>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Header