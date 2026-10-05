import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";

import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const plans = [
  {
    icon: <LocalTaxiRoundedIcon />,
    label: "EVERYDAY TRAVEL",
    title: "City Ride",
    description:
      "A simple and comfortable option for getting around your city.",
    features: [
      "Easy city pickups",
      "Comfortable rides",
      "Flexible destinations",
      "Customer-focused service",
    ],
    featured: false,
  },
  {
    icon: <FlightTakeoffRoundedIcon />,
    label: "AIRPORT TRAVEL",
    title: "Airport Ride",
    description:
      "A convenient way to travel to or from the airport without the stress.",
    features: [
      "Airport pickup & drop",
      "Luggage-friendly rides",
      "Planned journey support",
      "Comfortable travel",
    ],
    featured: true,
  },
  {
    icon: <RouteRoundedIcon />,
    label: "LONG DISTANCE",
    title: "Outstation",
    description:
      "Travel beyond the city with a ride built around your longer journey.",
    features: [
      "Long-distance travel",
      "Flexible routes",
      "Spacious ride options",
      "Journey-focused support",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 9, md: 13 },
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <Box
        sx={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "rgba(30,64,175,0.07)",
          filter: "blur(80px)",
          top: -130,
          left: -100,
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
          right: -100,
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
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
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
            SIMPLE & FLEXIBLE
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
            Pricing that keeps
            <br />
            <Box
              component="span"
              sx={{
                color: "#1E40AF",
              }}
            >
              travel simple.
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
            Choose the type of journey you need. Your final fare can vary
            based on route, distance, timing and ride requirements.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid
              key={plan.title}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  minHeight: 455,
                  p: { xs: 3, sm: 3.5 },
                  borderRadius: 5,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: plan.featured
                    ? "#0F172A"
                    : "#F8FAFC",
                  border: plan.featured
                    ? "1px solid #0F172A"
                    : "1px solid rgba(30,64,175,0.09)",
                  boxShadow: plan.featured
                    ? "0 25px 55px rgba(15,23,42,0.20)"
                    : "0 15px 35px rgba(15,23,42,0.06)",
                  transition: "all 0.4s ease",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    background: "#FBBF24",
                    borderColor: "#FBBF24",
                    boxShadow:
                      "0 25px 50px rgba(251,191,36,0.25)",
                  },

                  "&:hover .pricing-icon": {
                    background: "#0F172A",
                    color: "#FBBF24",
                  },

                  "&:hover .pricing-label": {
                    color: "#0F172A",
                  },

                  "&:hover .pricing-title": {
                    color: "#0F172A",
                  },

                  "&:hover .pricing-description": {
                    color: "rgba(15,23,42,0.72)",
                  },

                  "&:hover .pricing-feature": {
                    color: "#0F172A",
                  },

                  "&:hover .pricing-check": {
                    color: "#0F172A",
                  },

                  "&:hover .pricing-button": {
                    background: "#0F172A",
                    color: "#FBBF24",
                  },
                }}
              >
                {/* Popular Badge */}
                {plan.featured && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      px: 1.5,
                      py: 0.7,
                      borderRadius: "50px",
                      background: "#FBBF24",
                      color: "#0F172A",
                      fontSize: "0.65rem",
                      fontWeight: 900,
                      letterSpacing: "0.8px",
                    }}
                  >
                    POPULAR
                  </Box>
                )}

                {/* Icon */}
                <Box
                  className="pricing-icon"
                  sx={{
                    width: 62,
                    height: 62,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: plan.featured
                      ? "#FBBF24"
                      : "rgba(251,191,36,0.15)",
                    color: "#0F172A",
                    mb: 3,
                    transition: "all 0.3s ease",
                  }}
                >
                  {plan.icon}
                </Box>

                {/* Label */}
                <Typography
                  className="pricing-label"
                  sx={{
                    color: plan.featured
                      ? "#FBBF24"
                      : "#1E40AF",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                    letterSpacing: "1.5px",
                    mb: 1,
                    transition: "color 0.3s ease",
                  }}
                >
                  {plan.label}
                </Typography>

                {/* Title */}
                <Typography
                  className="pricing-title"
                  sx={{
                    color: plan.featured
                      ? "#FFFFFF"
                      : "#0F172A",
                    fontSize: "2rem",
                    fontWeight: 900,
                    mb: 1.3,
                    transition: "color 0.3s ease",
                  }}
                >
                  {plan.title}
                </Typography>

                {/* Description */}
                <Typography
                  className="pricing-description"
                  sx={{
                    color: plan.featured
                      ? "rgba(255,255,255,0.65)"
                      : "#64748B",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    mb: 3,
                    transition: "color 0.3s ease",
                  }}
                >
                  {plan.description}
                </Typography>

                {/* Features */}
                <Stack
                  spacing={1.5}
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  {plan.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CheckRoundedIcon
                        className="pricing-check"
                        sx={{
                          fontSize: 19,
                          color: "#FBBF24",
                          transition: "color 0.3s ease",
                        }}
                      />

                      <Typography
                        className="pricing-feature"
                        sx={{
                          color: plan.featured
                            ? "rgba(255,255,255,0.78)"
                            : "#475569",
                          fontSize: "0.82rem",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* Button */}
                <Button
                  className="pricing-button"
                  href="#contact"
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    mt: 3,
                    py: 1.25,
                    borderRadius: 3,
                    background: plan.featured
                      ? "#FBBF24"
                      : "#1E40AF",
                    color: plan.featured
                      ? "#0F172A"
                      : "#FFFFFF",
                    fontWeight: 900,
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Get a Quote
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Note */}
        <Box
          sx={{
            mt: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "#EEF4FF",
            border: "1px solid rgba(30,64,175,0.08)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#0F172A",
              fontWeight: 800,
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
            }}
          >
            Need a specific route?
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              color: "#64748B",
              fontSize: "0.85rem",
              lineHeight: 1.7,
            }}
          >
            Tell us where you're going and we'll help you choose the right
            ride for your journey.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
