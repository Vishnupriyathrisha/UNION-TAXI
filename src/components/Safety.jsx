import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
} from "@mui/material";

import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const safetyFeatures = [
  {
    icon: <VerifiedUserRoundedIcon />,
    title: "Trusted Drivers",
    description:
      "Ride with professional drivers who are focused on providing a comfortable and dependable journey.",
  },
  {
    icon: <LocationOnRoundedIcon />,
    title: "Ride Visibility",
    description:
      "Stay informed about your journey with clear pickup, destination and route details.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Journey Support",
    description:
      "Our support-focused experience helps you feel confident from pickup to destination.",
  },
  {
    icon: <ShieldRoundedIcon />,
    title: "Safety First",
    description:
      "Every journey is designed with comfort, reliability and passenger safety in mind.",
  },
];

function Safety() {
  return (
    <Box
      id="safety"
      sx={{
        py: { xs: 9, md: 13 },
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 55%, #EEF4FF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(30,64,175,0.07)",
          filter: "blur(70px)",
          top: -120,
          right: -100,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(251,191,36,0.10)",
          filter: "blur(65px)",
          bottom: -100,
          left: -80,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "1.5px",
              mb: 2,
            }}
          >
            <ShieldRoundedIcon sx={{ fontSize: 18, color: "#FBBF24" }} />
            SAFETY FIRST
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#0F172A",
              letterSpacing: "-1.5px",
            }}
          >
            Your safety comes{" "}
            <Box component="span" sx={{ color: "#1E40AF" }}>
              first.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              color: "#64748B",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.8,
            }}
          >
            A great ride is more than reaching your destination. Union Taxi
            focuses on creating a journey where you feel comfortable,
            informed and confident every step of the way.
          </Typography>
        </Box>

        {/* Main Safety Card */}
        <Box
          sx={{
            borderRadius: { xs: 4, md: 6 },
            overflow: "hidden",
            background: "#0F172A",
            boxShadow: "0 30px 70px rgba(15,23,42,0.18)",
            mb: 7,
          }}
        >
          <Grid container>
            {/* Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 280, sm: 360, md: "100%" },
                  minHeight: { md: 430 },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/safety-taxi.jpg"
                  alt="Union Taxi safety"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.8s ease",
                    "&:hover": {
                      transform: "scale(1.06)",
                    },
                  }}
                />

                {/* Image overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(15,23,42,0.08), rgba(15,23,42,0.72))",
                  }}
                />

                {/* Safety badge */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 18, md: 25 },
                    bottom: { xs: 18, md: 25 },
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    px: 2,
                    py: 1.2,
                    borderRadius: 3,
                    background: "#FBBF24",
                    color: "#0F172A",
                    fontWeight: 900,
                    fontSize: "0.78rem",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                  }}
                >
                  <ShieldRoundedIcon sx={{ fontSize: 20 }} />
                  RIDE WITH CONFIDENCE
                </Box>
              </Box>
            </Grid>

            {/* Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 3, sm: 4, md: 6 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#FBBF24",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    mb: 1.5,
                  }}
                >
                  TRAVEL WITH CONFIDENCE
                </Typography>

                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "1.9rem", md: "2.7rem" },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  Designed around a{" "}
                  <Box component="span" sx={{ color: "#FBBF24" }}>
                    safer journey.
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.68)",
                    lineHeight: 1.8,
                    fontSize: "0.98rem",
                    maxWidth: 650,
                    mb: 3.5,
                  }}
                >
                  From the moment you book to the time you reach your
                  destination, Union Taxi keeps the journey simple,
                  transparent and passenger-focused.
                </Typography>

                <Stack spacing={1.8}>
                  {[
                    "Professional and customer-focused rides",
                    "Clear pickup and destination information",
                    "Comfortable travel for everyday journeys",
                    "Support-focused experience throughout your ride",
                  ].map((text, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          minWidth: 28,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(251,191,36,0.15)",
                          color: "#FBBF24",
                        }}
                      >
                        <ShieldRoundedIcon sx={{ fontSize: 16 }} />
                      </Box>

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.82)",
                          fontSize: "0.9rem",
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Safety Features */}
        <Grid container spacing={2.5}>
          {safetyFeatures.map((feature, index) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 2.8, md: 3 },
                  borderRadius: 4,
                  background: "#FFFFFF",
                  border: "1px solid rgba(30,64,175,0.09)",
                  boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    background: "#FBBF24",
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 20px 40px rgba(251,191,36,0.25)",
                  },
                  "&:hover .safety-icon": {
                    background: "#0F172A",
                    color: "#FBBF24",
                  },
                  "&:hover .safety-title": {
                    color: "#0F172A",
                  },
                  "&:hover .safety-description": {
                    color: "rgba(15,23,42,0.72)",
                  },
                }}
              >
                <Box
                  className="safety-icon"
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(251,191,36,0.14)",
                    color: "#FBBF24",
                    mb: 2.2,
                    transition: "all 0.3s ease",
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  className="safety-title"
                  sx={{
                    color: "#0F172A",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    mb: 1,
                    transition: "color 0.3s ease",
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  className="safety-description"
                  sx={{
                    color: "#64748B",
                    fontSize: "0.87rem",
                    lineHeight: 1.7,
                    transition: "color 0.3s ease",
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 7,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "#1E40AF",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
            boxShadow: "0 20px 45px rgba(30,64,175,0.2)",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#FBBF24",
                fontSize: "0.72rem",
                fontWeight: 900,
                letterSpacing: "1.5px",
                mb: 0.8,
              }}
            >
              READY WHEN YOU ARE
            </Typography>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: { xs: "1.25rem", md: "1.55rem" },
              }}
            >
              Travel with confidence. Ride with Union Taxi.
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
              py: 1.3,
              fontWeight: 900,
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": {
                background: "#F59E0B",
                transform: "translateY(-2px)",
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

export default Safety;
