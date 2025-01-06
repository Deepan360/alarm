// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Import the heart icon

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px", // Adjust padding for better spacing
        width: "100%",
        position: "relative",
        display: "block",
        marginBottom: 0,
        marginTop: "auto",
        bottom: 0,
        left: 0, // Ensure it spans the entire width of the viewport
        zIndex: 1000, // Ensure it's above other content
        boxSizing: "border-box", // Ensures padding is included in width/height calculations
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Footer content */}
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              © 2024 Civerams International
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href="https://www.akilamtechnology.com/">
              <Typography
                variant="body2"
                color="secondary.main"
                sx={{
                  display: "flex", // Use flexbox to align icon and text
                  alignItems: "center", // Vertically align the icon with text
                  justifyContent: "center", // Center the content
                }}
              >
                Powered By Akilam Technology{" "}
                <FavoriteIcon sx={{ marginLeft: "5px" }} />{" "}
                {/* Space between text and icon */}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
