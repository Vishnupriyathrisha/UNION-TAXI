import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const rides = [
  {
    image: "/fleet-mini.jpg",
    type: "ECONOMY RIDE",
    title: "Mini",
    description:
      "A smart and comfortable choice for quick everyday city journeys.",
    features: ["Affordable", "City Friendly", "Easy Pickup"],
  },
  {
    image: "/fleet-sedan.jpg",
    type: "EVERYDAY COMFORT",
    title: "Sedan",
    description:
      "Enjoy extra comfort and space for daily rides, work trips and longer journeys.",
    features: ["Comfortable", "Spacious", "Smooth Ride"],
  },
  {
    image: "/fleet-suv.jpg",
    type: "PREMIUM SPACE",
    title: "SUV",
    description:
      "More room for passengers and luggage when your journey needs extra space.",
    features: ["More Space", "Luggage Ready", "Long Trips"],
  },
  {
    image: "/fleet-family.jpg",
    type: "FAMILY RIDE",
    title: "Family",
    description:
      "A relaxed travel option designed for family journeys and group outings.",
    features: ["Family Friendly", "Comfort First", "Group Travel"],
  },
];

function Fleet() {
  return (
    <Box
      id="fleet"
      sx={{
        py: { xs: 9, md: 13 },
        background: "#F8FAFC",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(30,64,175,0.07)",
          filter: "blur(80px)",
          top: -150,
          right: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(251,191,36,0.10)",
          filter: "blur(75px)",
          bottom: -130,
          left: -100,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.8,
              borderRadius: "50px",
              background: "rgba(251,191,36,0.14)",
              color: "#0F172A",
              fontSize: "0.74rem",
              fontWeight: 900,
              letterSpacing: "1.5px",
              mb: 2,
            }}
          >
            <LocalTaxiRoundedIcon
              sx={{
                fontSize: 18,
                color: "#FBBF24",
              }}
            />
            CHOOSE YOUR RIDE
          </Box>

          <Typography
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "4rem",
              },
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              color: "#0F172A",
            }}
          >
            The right ride
            <br />
            <Box
              component="span"
              sx={{
                color: "#1E40AF",
              }}
            >
              for every journey.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              color: "#64748B",
              fontSize: {
                xs: "0.95rem",
                md: "1.05rem",
              },
              lineHeight: 1.8,
            }}
          >
            From quick city trips to spacious family journeys, choose a ride
            that fits the way you travel.
          </Typography>
        </Box>

        {/* Fleet Cards */}
        <Grid container spacing={3}>
          {rides.map((ride, index) => (
            <Grid
              key={ride.title}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  background: "#FFFFFF",
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid rgba(15,23,42,0.07)",
                  boxShadow: "0 12px 35px rgba(15,23,42,0.06)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    background: "#FBBF24",
                    boxShadow:
                      "0 25px 50px rgba(251,191,36,0.24)",
                  },
                  "&:hover .fleet-image": {
                    transform: "scale(1.07)",
                  },
                  "&:hover .fleet-icon": {
                    background: "#0F172A",
                    color: "#FBBF24",
                  },
                  "&:hover .fleet-type": {
                    color: "#0F172A",
                  },
                  "&:hover .fleet-title": {
                    color: "#0F172A",
                  },
                  "&:hover .fleet-description": {
                    color: "rgba(15,23,42,0.72)",
                  },
                  "&:hover .fleet-feature": {
                    background: "rgba(15,23,42,0.10)",
                    color: "#0F172A",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: {
                      xs: 220,
                      sm: 200,
                      md: 180,
                    },
                    overflow: "hidden",
                    position: "relative",
                    background: "#E2E8F0",
                  }}
                >
                  <Box
                    component="img"
                    className="fleet-image"
                    src={ride.image}
                    alt={`Union Taxi ${ride.title}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* Number */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(15,23,42,0.88)",
                      color: "#FBBF24",
                      fontWeight: 900,
                      fontSize: "0.78rem",
                    }}
                  >
                    0{index + 1}
                  </Box>

                  {/* Taxi icon */}
                  <Box
                    className="fleet-icon"
                    sx={{
                      position: "absolute",
                      right: 14,
                      bottom: 14,
                      width: 44,
                      height: 44,
                      borderRadius: 2.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#FBBF24",
                      color: "#0F172A",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <LocalTaxiRoundedIcon />
                  </Box>
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    p: 2.8,
                  }}
                >
                  <Typography
                    className="fleet-type"
                    sx={{
                      color: "#1E40AF",
                      fontSize: "0.68rem",
                      fontWeight: 900,
                      letterSpacing: "1.5px",
                      mb: 0.8,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {ride.type}
                  </Typography>

                  <Typography
                    className="fleet-title"
                    sx={{
                      color: "#0F172A",
                      fontSize: "1.65rem",
                      fontWeight: 900,
                      mb: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {ride.title}
                  </Typography>

                  <Typography
                    className="fleet-description"
                    sx={{
                      color: "#64748B",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      mb: 2.2,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {ride.description}
                  </Typography>

                  {/* Features */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.8,
                    }}
                  >
                    {ride.features.map((feature) => (
                      <Box
                        key={feature}
                        className="fleet-feature"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          px: 1,
                          py: 0.55,
                          borderRadius: "50px",
                          background: "#F1F5F9",
                          color: "#475569",
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            fontSize: 13,
                            color: "#1E40AF",
                          }}
                        />

                        {feature}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 6,
            borderRadius: 5,
            background: "#0F172A",
            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            justifyContent: "space-between",
            gap: 3,
            boxShadow: "0 25px 55px rgba(15,23,42,0.15)",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#FBBF24",
                fontSize: "0.72rem",
                fontWeight: 900,
                letterSpacing: "1.6px",
                mb: 1,
              }}
            >
              ONE FLEET. MANY JOURNEYS.
            </Typography>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: {
                  xs: "1.3rem",
                  md: "1.65rem",
                },
                lineHeight: 1.25,
              }}
            >
              Pick the ride that feels right for you.
            </Typography>
          </Box>

          <Button
            href="#contact"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              background: "#FBBF24",
              color: "#0F172A",
              borderRadius: 3,
              px: 3,
              py: 1.35,
              fontWeight: 900,
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": {
                background: "#F59E0B",
                transform: "translateY(-3px)",
              },
              transition: "all 0.25s ease",
            }}
          >
            Book Your Ride
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Fleet;
