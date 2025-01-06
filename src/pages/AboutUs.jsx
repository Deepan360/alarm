import { Typography, Container, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "../components/Footer";

const Banner = styled(Box)({
  height: "70vh",
  width: "100%",
  backgroundImage: 'url("/assets/image/a5.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  color: "white",
  textAlign: "end",
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    zIndex: 1,
  },
  zIndex: 2,
  "& > *": {
    position: "relative",
    zIndex: 3,
  },
});

const About = () => {
const workImages = Array.from(
  { length: 15 },
  (_, index) => `/assets/image/works${index + 1}.jpg`
);


  return (
    <>
      <Container xs="12" maxWidth="xl" sx={{ py: 0 }}>
        <Banner maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "20px 40px",
              borderRadius: "12px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            }}
          >
            Welcome to CIVERAMS INTERNATIONAL PRIVATE LIMITED
          </Typography>
        </Banner>

        <Box sx={{ textAlign: "center", my: 6 }}>
          <Typography
            variant="h4"
            color="secondary.main"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              textAlign: "justify",
              lineHeight: 1.8,
              maxWidth: "80%",
              margin: "0 auto",
            }}
          >
            Registration No. / Unique Entity Number: 201842827R issued by the
            Accounting And Corporate Regulatory Authority. <br />
            CIVERAMS INTERNATIONAL PRIVATE LIMITED is an Exempt Private Company
            Limited by Shares, incorporated on 25 December 2018 (Tuesday) in
            Singapore. The address of the Company registered office is 228
            YISHUN STREET 21, #05-482, SINGAPORE (760228). <br />
            The Company’s current operating status is live and has been
            operating for 6 years. The Company’s principal activity is the
            installation of fire protection and security alarm systems, with
            electrical works as the secondary activity.
          </Typography>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography
            variant="h4"
            color="secondary.main"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
          >
            Work Progress Album
          </Typography>
          <Grid container spacing={2}>
            {workImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                ></Box>
                {/* <Typography
                  variant="body1"
                  sx={{ textAlign: "center", mt: 1, fontWeight: "bold" }}
                >
                  Work {index + 1}
                </Typography> */}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default About;
