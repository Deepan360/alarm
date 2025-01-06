// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import EnquiryPage from "./pages/EnquiryPage";
import OurProjects from "./pages/OurProjects";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2c387e", // Red as the primary color
      },
      secondary: {
        main: "#e67e22", // Light grey as the secondary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Header at the top of the page */}
        <Header />

        {/* Main content */}

            {/* Routing setup for different pages */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/enquiry" element={<EnquiryPage />} />
              <Route path="/projects" element={<OurProjects />} />
            </Routes>

      </Router>
    </ThemeProvider>
  );
}

export default App;
