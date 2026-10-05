import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Chip,
} from "@mui/material";

import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const steps = [
  {
    number: "01",
    icon: <TouchAppRoundedIcon />,
    title: "Book Your Ride",
    text: "Choose your pickup point and destination, then select the travel option that works best for your journey.",
  },
  {
    number: "02",
    icon: <CheckCircleRoundedIcon />,
    title: "Confirm Your Trip",
    text: "Review your journey details and confirm your ride with a simple, straightforward booking experience.",
  },
  {
    number: "03",
    icon: <RouteRoundedIcon />,
    title: "Follow Your Journey",
    text: "Stay informed about your trip as you make your way from the pickup point towards your destination.",
  },
  {
    number: "04",
    icon: <LocalTaxiRoundedIcon />,
    title: "Enjoy The Ride",
    text: "Sit back, relax and enjoy a comfortable journey while Union Taxi takes you where you need to go.",
  },
];

const HowItWorks = () => {
  return (
    <Box
      id="how-it-works"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFFFFF",
        py: { xs: 9, md: 14 },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,64,175,0.09), transparent 70%)",
          top: -180,
          left: -150,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.12), transparent 70%)",
          bottom: -150,
          right: -120,
          pointerEvents: "none",
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
            maxWidth: 780,
            mx: "auto",
            mb: { xs: 7, md: 10 },
          }}
        >
          <Chip
            label="HOW IT WORKS"
            sx={{
              mb: 2,
              px: 1.5,
              height: 34,
              borderRadius: "999px",
              background: "rgba(30,64,175,0.08)",
              color: "#1E40AF",
              fontWeight: 800,
              letterSpacing: "1.5px",
              fontSize: "0.72rem",
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2.35rem",
                sm: "3rem",
                md: "4rem",
              },
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-2px",
              color: "#0F172A",
              mb: 2,
            }}
          >
            Your ride,
            <Box
              component="span"
              sx={{
                display: "block",
                color: "#1E40AF",
              }}
            >
              made simple.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: {
                xs: "0.98rem",
                md: "1.08rem",
              },
              lineHeight: 1.8,
              maxWidth: 650,
              mx: "auto",
            }}
          >
            Getting where you need to go should feel easy. With Union Taxi,
            your journey moves through four simple steps.
          </Typography>
        </Box>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          {/* Desktop Route */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              position: "absolute",
              top: 55,
              left: "10%",
              right: "10%",
              height: 3,
              borderRadius: 10,
              background:
                "repeating-linear-gradient(to right, #1E40AF 0 9px, transparent 9px 18px)",
              opacity: 0.22,
              animation: "routeMove 3s linear infinite",
              "@keyframes routeMove": {
                from: {
                  backgroundPosition: "0 0",
                },
                to: {
                  backgroundPosition: "90px 0",
                },
              },
            }}
          />

          {/* Moving Taxi */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              position: "absolute",
              top: 34,
              left: "8%",
              zIndex: 4,
              animation: "timelineTaxi 7s ease-in-out infinite",
              "@keyframes timelineTaxi": {
                "0%": {
                  left: "8%",
                },
                "25%": {
                  left: "33%",
                },
                "50%": {
                  left: "58%",
                },
                "75%": {
                  left: "83%",
                },
                "100%": {
                  left: "8%",
                },
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 30,
                borderRadius: "10px 12px 7px 7px",
                background: "#FBBF24",
                border: "2px solid #0F172A",
                position: "relative",
                boxShadow: "0 7px 16px rgba(15,23,42,0.18)",
              }}
            >
              {/* Roof */}
              <Box
                sx={{
                  position: "absolute",
                  width: "42%",
                  height: 10,
                  left: "29%",
                  top: -8,
                  borderRadius: "8px 8px 2px 2px",
                  background: "#FBBF24",
                  border: "2px solid #0F172A",
                  borderBottom: "none",
                }}
              />

              {/* Window */}
              <Box
                sx={{
                  position: "absolute",
                  width: "24%",
                  height: 6,
                  left: "38%",
                  top: -4,
                  borderRadius: 2,
                  background: "#1E40AF",
                }}
              />

              {/* Wheels */}
              <Box
                sx={{
                  position: "absolute",
                  left: "12%",
                  bottom: -6,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#0F172A",
                  border: "2px solid #475569",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: "12%",
                  bottom: -6,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#0F172A",
                  border: "2px solid #475569",
                }}
              />
            </Box>
          </Box>

          {/* Step Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: {
                xs: 3,
                md: 2.5,
              },
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={step.number}
                sx={{
                  position: "relative",
                  textAlign: "center",
                  px: {
                    xs: 2,
                    md: 1.5,
                  },
                  opacity: 0,
                  animation: `stepAppear 0.75s ease ${
                    index * 0.15
                  }s forwards`,

                  "@keyframes stepAppear": {
                    from: {
                      opacity: 0,
                      transform: "translateY(30px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },

                  "&:hover .step-circle": {
                    background: "#FBBF24",
                    color: "#0F172A",
                    transform: "scale(1.08) rotate(-6deg)",
                    boxShadow:
                      "0 15px 35px rgba(251,191,36,0.28)",
                  },

                  "&:hover .step-number": {
                    color: "#1E40AF",
                  },

                  "&:hover .step-card": {
                    transform: "translateY(-7px)",
                    borderColor: "rgba(30,64,175,0.18)",
                    boxShadow:
                      "0 18px 40px rgba(15,23,42,0.09)",
                  },
                }}
              >
                {/* Number */}
                <Typography
                  className="step-number"
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    color: "#CBD5E1",
                    letterSpacing: "2px",
                    mb: 1.5,
                    transition: "0.3s ease",
                  }}
                >
                  STEP {step.number}
                </Typography>

                {/* Icon Circle */}
                <Box
                  className="step-circle"
                  sx={{
                    width: 72,
                    height: 72,
                    mx: "auto",
                    mb: 3,
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0F172A",
                    color: "#FBBF24",
                    position: "relative",
                    zIndex: 5,
                    transition: "0.4s ease",
                    boxShadow:
                      "0 10px 25px rgba(15,23,42,0.16)",
                  }}
                >
                  {step.icon}

                  {/* Small Number */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      width: 25,
                      height: 25,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#1E40AF",
                      color: "#FFFFFF",
                      fontSize: "0.62rem",
                      fontWeight: 900,
                      border: "3px solid #FFFFFF",
                    }}
                  >
                    {index + 1}
                  </Box>
                </Box>

                {/* Card */}
                <Box
                  className="step-card"
                  sx={{
                    minHeight: {
                      xs: 215,
                      md: 235,
                    },
                    p: {
                      xs: 3,
                      md: 2.7,
                    },
                    borderRadius: 4,
                    background: "#FFFFFF",
                    border: "1px solid rgba(15,23,42,0.07)",
                    transition: "0.4s ease",
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      color: "#0F172A",
                      fontSize: "1.2rem",
                      fontWeight: 850,
                      mb: 1.5,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "0.88rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: {
              xs: 7,
              md: 10,
            },
            borderRadius: {
              xs: 4,
              md: 5,
            },
            p: {
              xs: 3.5,
              sm: 5,
              md: 6,
            },
            background:
              "linear-gradient(135deg, #0F172A 0%, #172554 100%)",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0 25px 60px rgba(15,23,42,0.16)",
          }}
        >
          {/* Decorative Circle */}
          <Box
            sx={{
              position: "absolute",
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
              top: -110,
              left: -70,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "1px solid rgba(251,191,36,0.14)",
              bottom: -90,
              right: -50,
            }}
          />

          {/* Taxi Icon */}
          <Box
            sx={{
              width: 58,
              height: 58,
              mx: "auto",
              mb: 2.5,
              borderRadius: "18px",
              background: "#FBBF24",
              color: "#0F172A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "ctaTaxi 2.5s ease-in-out infinite",
              "@keyframes ctaTaxi": {
                "0%, 100%": {
                  transform: "translateX(0)",
                },
                "50%": {
                  transform: "translateX(8px)",
                },
              },
            }}
          >
            <LocalTaxiRoundedIcon fontSize="medium" />
          </Box>

          <Typography
            sx={{
              position: "relative",
              color: "#FBBF24",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "2px",
              mb: 1.5,
            }}
          >
            READY WHEN YOU ARE
          </Typography>

          <Typography
            component="h3"
            sx={{
              position: "relative",
              color: "#FFFFFF",
              fontWeight: 900,
              fontSize: {
                xs: "1.8rem",
                md: "2.5rem",
              },
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            Your next journey starts here.
          </Typography>

          <Typography
            sx={{
              position: "relative",
              color: "rgba(255,255,255,0.68)",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.75,
              fontSize: "0.92rem",
              mb: 3.5,
            }}
          >
            Simple steps, comfortable travel and a journey designed around
            you. Wherever you're headed, make the ride count.
          </Typography>

          <Button
            href="#contact"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              position: "relative",
              borderRadius: "14px",
              px: 3.5,
              py: 1.4,
              textTransform: "none",
              fontWeight: 800,
              background: "#FBBF24",
              color: "#0F172A",
              boxShadow: "none",
              transition: "0.3s ease",
              "&:hover": {
                background: "#FBBF24",
                transform: "translateY(-3px)",
                boxShadow:
                  "0 12px 30px rgba(251,191,36,0.25)",
              },
            }}
          >
            Start Your Journey
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
