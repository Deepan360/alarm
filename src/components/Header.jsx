import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import clogo from "/assets/image/clogo.jpg"; // Make sure this path is correct

const Header = () => {
  const pages = ["Home", "About Us", "Enquiry", "Projects"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* AppBar with fixed positioning */}
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo (Visible in both desktop and mobile views) */}
            <Box
              sx={{ display: { xs: "flex", md: "flex" }, alignItems: "center" }}
            >
              <img
                src={clogo} // Corrected tag to <img />
                alt="Logo"
                style={{ width: "50px", height: "50px", marginRight: "10px" }} // Adjust size as needed
              />
              {/* Company Name (Visible only on desktop, hidden on mobile) */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home"
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                  display: { xs: "none", md: "flex" }, // Hide on mobile
                }}
              >
                Civerams International Pte Ltd
              </Typography>
            </Box>

            {/* Mobile Menu Button (Appears only in mobile view) */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              {/* Mobile Menu */}
              {anchorElNav && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "64px", // Adjust for AppBar height
                    left: 0,
                    backgroundColor: "white",
                    width: "100%",
                    boxShadow: 3,
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      component={Link}
                      to={`/${page.toLowerCase().replace(" ", "")}`}
                      onClick={handleCloseNavMenu}
                      sx={{ display: "block", padding: "10px" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>

            {/* Desktop Menu (Links aligned to the right) */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase().replace(" ", "")}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Add margin to the content to avoid overlap with the fixed header */}
      <Box sx={{ marginTop: "64px" }}>
        {/* Your other page content goes here */}
      </Box>
    </>
  );
};

export default Header;
