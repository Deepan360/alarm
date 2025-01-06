// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Container,
  Slide,
  Grow,
  Zoom,
} from "@mui/material";
import Slider from "react-slick";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CheckCircle, DesignServices, Construction } from "@mui/icons-material";

// Example data
const carouselImages = [
  "/assets/image/s1.jpg",
  "/assets/image/s2.jpg",
  "/assets/image/s3.jpg",
];

const cards = [
  {
    title: "Fire Alarm Systems",
    description: "Reliable fire alarm systems for supermalls and shops.",
    image: "/assets/image/v1.jpg",
  },
  {
    title: "Security Solutions",
    description: "Advanced security systems tailored for commercial spaces.",
    image: "/assets/image/c4.jpg",
  },
  {
    title: "Emergency Lighting",
    description: "Efficient emergency lighting systems for safety compliance.",
    image: "/assets/image/v4.jpg",
  },
];

const visionCards = [
  {
    headline: "Planning",
    icon: <CheckCircle sx={{ fontSize: 50, color: "green" }} />,
    points: [
      "The decision of whether a fire alarm system is required and the type of category that should be installed must be stated and forms part of the Fire Risk Assessment.",
    ],
  },
  {
    headline: "Design",
    icon: <DesignServices sx={{ fontSize: 50, color: "#3498db" }} />,
    points: [
      "Agree the level of protection or category with Owner/Occupier. Justify any Variations and document reasons. Detail the detection & alarm zone. Prepare specification and drawings including based end user.",
    ],
  },
  {
    headline: "Implementation",
    icon: <Construction sx={{ fontSize: 50, color: "purple" }} />,
    points: [
      "Based on Singapore Standard revised SS45 2019 Fire Alarm System. Emergency Alarm and Communication Systems under the purview of the Electrical and Electronic, standards Committee. Complete projects with desired time duration.",
    ],
  },
];

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const cardHoverStyles = {
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ position: "relative" }}>
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <Zoom in timeout={1000}>
                <img
                  src={image}
                  alt={`carousel-image-${index}`}
                  style={{
                    width: "100%",
                    height: "70vh",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Zoom>
            </div>
          ))}
        </Slider>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#f1c40f",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            Protecting What Matters
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Advanced Safety and Security Solutions Tailored to Your Needs
          </Typography>
          {/* <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "600",
              padding: "12px 30px",
              fontSize: "1.1rem",
              backgroundColor: "#e67e22",
              "&:hover": { backgroundColor: "#d35400" },
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            Learn More
          </Button> */}
        </Box>
      </Box>

      {/* Solutions Section */}
      <Container sx={{ my: 6 }}>
        <Slide direction="up" in timeout={1000}>
          <Typography
            variant="h4"
            align="center"
            color="primary.main"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Our Solutions
          </Typography>
        </Slide>
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grow in timeout={1000 + index * 300} key={index}>
              <Grid item xs={12} sm={4}>
                <Card sx={cardHoverStyles}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="secondary.main"
                      sx={{ fontWeight: "600", mb: 1 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Container>

      {/* Vision Section */}
      <Container sx={{ my: 6 }}>
        <Slide direction="right" in timeout={1000}>
          <Typography
            variant="h4"
            align="center"
            color="primary.main"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Our Vision
          </Typography>
        </Slide>
        <Grid container spacing={4}>
          {visionCards.map((vision, index) => (
            <Zoom in timeout={1000 + index * 300} key={index}>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{ ...cardHoverStyles, padding: 3, maxHeight: "270px" }}
                >
                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                    >
                      {vision.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      color="secondary.main"
                      align="center"
                      sx={{ fontWeight: "600", mb: 2 }}
                    >
                      {vision.headline}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#7f8c8d", fontSize: "1rem" }}
                    >
                      {vision.points[0]}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Zoom>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
