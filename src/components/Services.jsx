import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Chip,
} from "@mui/material";

import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const services = [
  {
    number: "01",
    icon: <LocalTaxiRoundedIcon />,
    title: "City Rides",
    text: "Easy and comfortable rides for everyday travel across the city. From quick errands to important appointments, enjoy a smooth journey.",
  },
  {
    number: "02",
    icon: <FlightTakeoffRoundedIcon />,
    title: "Airport Transfers",
    text: "Make airport travel simple with convenient pickup and drop-off options designed around your travel schedule.",
  },
  {
    number: "03",
    icon: <DirectionsCarRoundedIcon />,
    title: "Outstation Trips",
    text: "Planning a long-distance journey? Travel beyond the city with a comfortable ride made for relaxed road trips.",
  },
  {
    number: "04",
    icon: <ScheduleRoundedIcon />,
    title: "Hourly Rentals",
    text: "Need a cab for multiple stops? Choose a flexible travel option when you want the vehicle available for your plans.",
  },
  {
    number: "05",
    icon: <GroupsRoundedIcon />,
    title: "Family Travel",
    text: "Enjoy comfortable journeys with your family and loved ones, with travel options suited for different occasions.",
  },
  {
    number: "06",
    icon: <TravelExploreRoundedIcon />,
    title: "Tourist Rides",
    text: "Explore destinations, attractions and local places with a convenient ride that keeps your travel experience enjoyable.",
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "#F8FAFC",
        py: { xs: 9, md: 14 },
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,64,175,0.10), transparent 70%)",
          top: -150,
          right: -100,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.12), transparent 70%)",
          bottom: -120,
          left: -100,
          pointerEvents: "none",
        }}
      />

      {/* Animated route */}
      <Box
        sx={{
          position: "absolute",
          top: "28%",
          left: 0,
          width: "100%",
          height: "1px",
          opacity: 0.5,
          background:
            "repeating-linear-gradient(to right, #1E40AF 0 8px, transparent 8px 18px)",
          animation: "routeMove 2.5s linear infinite",
          "@keyframes routeMove": {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "80px 0",
            },
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 820,
            mx: "auto",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Chip
            label="OUR SERVICES"
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
                xs: "2.25rem",
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
            One ride.

            <Box
              component="span"
              sx={{
                display: "block",
                color: "#1E40AF",
              }}
            >
              Many ways to travel.
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
              maxWidth: 680,
              mx: "auto",
            }}
          >
            Whether it is a quick city trip, an airport transfer, a family
            journey or a weekend road trip, Union Taxi is designed to make
            every journey simple, comfortable and convenient.
          </Typography>
        </Box>

        {/* Featured service */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.05fr 0.95fr",
            },
            borderRadius: {
              xs: 4,
              md: 6,
            },
            overflow: "hidden",
            background: "#0F172A",
            boxShadow: "0 25px 70px rgba(15,23,42,0.18)",
            mb: {
              xs: 6,
              md: 8,
            },
            transition: "0.45s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 32px 85px rgba(15,23,42,0.25)",
            },
          }}
        >
          {/* Featured image */}
          <Box
            sx={{
              minHeight: {
                xs: 300,
                sm: 380,
                md: 470,
              },
              position: "relative",
              overflow: "hidden",
              backgroundImage: "url('/services-taxi.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(15,23,42,0.08), rgba(15,23,42,0.42))",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(135deg, rgba(30,64,175,0.12), transparent 55%)",
                zIndex: 1,
              }}
            />

            {/* Image label */}
            <Box
              sx={{
                position: "absolute",
                zIndex: 3,
                top: 22,
                left: 22,
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: "999px",
                background: "rgba(15,23,42,0.78)",
                backdropFilter: "blur(10px)",
                color: "#FFFFFF",
              }}
            >
              <LocalTaxiRoundedIcon
                sx={{
                  color: "#FBBF24",
                  fontSize: 20,
                }}
              />

              <Typography
                sx={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                RIDE TOGETHER
              </Typography>
            </Box>

            {/* Yellow icon */}
            <Box
              sx={{
                position: "absolute",
                zIndex: 3,
                right: 22,
                bottom: 22,
                width: 58,
                height: 58,
                borderRadius: "18px",
                background: "#FBBF24",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "taxiFloat 3s ease-in-out infinite",
                "@keyframes taxiFloat": {
                  "0%, 100%": {
                    transform: "translateY(0)",
                  },
                  "50%": {
                    transform: "translateY(-8px)",
                  },
                },
              }}
            >
              <LocalTaxiRoundedIcon
                sx={{
                  color: "#0F172A",
                  fontSize: 30,
                }}
              />
            </Box>
          </Box>

          {/* Featured content */}
          <Box
            sx={{
              p: {
                xs: 3.5,
                sm: 5,
                md: 6,
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FBBF24",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "2px",
                mb: 2,
              }}
            >
              YOUR JOURNEY, YOUR WAY
            </Typography>

            <Typography
              component="h3"
              sx={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
                },
                lineHeight: 1.1,
                letterSpacing: "-1px",
                mb: 2,
              }}
            >
              Travel beyond.

              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#60A5FA",
                }}
              >
                the ordinary.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.8,
                fontSize: "0.98rem",
                mb: 3,
              }}
            >
              From everyday city rides to memorable road journeys, choose a
              service that fits your destination and your plans. Union Taxi
              brings together convenience, comfort and a simple travel
              experience.
            </Typography>

            <Stack
              spacing={1.4}
              sx={{
                mb: 4,
              }}
            >
              {[
                "Flexible travel options",
                "City and long-distance journeys",
                "Comfortable travel experience",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      color: "#FBBF24",
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              href="#contact"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                alignSelf: "flex-start",
                borderRadius: "14px",
                px: 3,
                py: 1.35,
                textTransform: "none",
                fontWeight: 800,
                background: "#FBBF24",
                color: "#0F172A",
                boxShadow: "none",
                transition: "0.3s ease",
                "&:hover": {
                  background: "#FBBF24",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 30px rgba(251,191,36,0.25)",
                },
              }}
            >
              Plan Your Journey
            </Button>
          </Box>
        </Box>

        {/* Service cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: {
              xs: 2.5,
              md: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.number}
              sx={{
                position: "relative",
                minHeight: {
                  xs: 285,
                  md: 305,
                },
                p: {
                  xs: 3,
                  md: 3.5,
                },
                borderRadius: 4,
                background: "#FFFFFF",
                border: "1px solid rgba(15,23,42,0.07)",
                overflow: "hidden",
                cursor: "pointer",
                opacity: 0,
                animation: `serviceAppear 0.7s ease ${
                  index * 0.1
                }s forwards`,
                transition: "0.4s ease",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: 4,
                  background:
                    "linear-gradient(90deg, #1E40AF, #FBBF24)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "0.4s ease",
                },

                "&:hover": {
                  transform: "translateY(-10px)",
                  borderColor: "rgba(30,64,175,0.2)",
                  boxShadow:
                    "0 20px 45px rgba(15,23,42,0.11)",

                  "&::before": {
                    transform: "scaleX(1)",
                  },

                  "& .service-icon": {
                    background: "#FBBF24",
                    color: "#0F172A",
                    transform: "rotate(-7deg) scale(1.08)",
                  },

                  "& .service-arrow": {
                    transform: "translateX(5px)",
                    color: "#1E40AF",
                  },

                  "& .service-number": {
                    color: "#1E40AF",
                  },
                },

                "@keyframes serviceAppear": {
                  from: {
                    opacity: 0,
                    transform: "translateY(25px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {/* Number */}
              <Typography
                className="service-number"
                sx={{
                  position: "absolute",
                  top: 18,
                  right: 22,
                  color: "#CBD5E1",
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  transition: "0.3s ease",
                }}
              >
                {service.number}
              </Typography>

              {/* Icon */}
              <Box
                className="service-icon"
                sx={{
                  width: 62,
                  height: 62,
                  borderRadius: "19px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(30,64,175,0.08)",
                  color: "#1E40AF",
                  mb: 3,
                  transition: "0.4s ease",
                }}
              >
                {service.icon}
              </Box>

              <Typography
                component="h3"
                sx={{
                  color: "#0F172A",
                  fontWeight: 850,
                  fontSize: "1.3rem",
                  mb: 1.3,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  maxWidth: 340,
                }}
              >
                {service.text}
              </Typography>

              {/* Arrow */}
              <Box
                className="service-arrow"
                sx={{
                  position: "absolute",
                  right: 22,
                  bottom: 20,
                  color: "#94A3B8",
                  transition: "0.3s ease",
                }}
              >
                <ArrowForwardRoundedIcon fontSize="small" />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom Journey Box */}
        <Box
          sx={{
            mt: {
              xs: 6,
              md: 8,
            },
            textAlign: "center",
            p: {
              xs: 3,
              md: 4,
            },
            borderRadius: 4,
            background:
              "linear-gradient(135deg, rgba(30,64,175,0.06), rgba(251,191,36,0.10))",
            border: "1px solid rgba(30,64,175,0.08)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              color: "#0F172A",
              fontSize: {
                xs: "1.15rem",
                md: "1.4rem",
              },
              fontWeight: 800,
              mb: 0.7,
            }}
          >
            Wherever you're going, make the journey count.
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: "0.9rem",
              mb: 4,
            }}
          >
            Choose your ride and let the journey begin.
          </Typography>

          {/* Animated Road */}
          <Box
            sx={{
              position: "relative",
              height: 65,
              width: "100%",
              maxWidth: 850,
              mx: "auto",
            }}
          >
            {/* Dotted road */}
            <Box
              sx={{
                position: "absolute",
                left: 12,
                right: 12,
                top: 35,
                height: 3,
                borderRadius: 10,
                background:
                  "repeating-linear-gradient(to right, #1E40AF 0 8px, transparent 8px 17px)",
                opacity: 0.35,
              }}
            />

            {/* Start point */}
            <Box
              sx={{
                position: "absolute",
                left: 4,
                top: 28,
                width: 15,
                height: 15,
                borderRadius: "50%",
                background: "#1E40AF",
                border: "3px solid #FFFFFF",
                boxShadow:
                  "0 0 0 3px rgba(30,64,175,0.15)",
                zIndex: 3,
              }}
            />

            {/* End point */}
            <Box
              sx={{
                position: "absolute",
                right: 4,
                top: 28,
                width: 15,
                height: 15,
                borderRadius: "50%",
                background: "#FBBF24",
                border: "3px solid #FFFFFF",
                boxShadow:
                  "0 0 0 3px rgba(251,191,36,0.2)",
                zIndex: 3,
              }}
            />

            {/* Moving Taxi */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 2,
                zIndex: 5,
                animation:
                  "driveAcross 5s ease-in-out infinite",

                "@keyframes driveAcross": {
                  "0%": {
                    left: "0%",
                    transform: "translateX(0)",
                  },
                  "45%": {
                    left: "45%",
                    transform: "translateX(0)",
                  },
                  "50%": {
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                  "95%": {
                    left: "95%",
                    transform: "translateX(-100%)",
                  },
                  "100%": {
                    left: "100%",
                    transform: "translateX(-100%)",
                  },
                },
              }}
            >
              {/* Taxi body */}
              <Box
                sx={{
                  width: {
                    xs: 58,
                    md: 72,
                  },
                  height: {
                    xs: 32,
                    md: 38,
                  },
                  borderRadius:
                    "12px 14px 8px 8px",
                  background: "#FBBF24",
                  border: "2px solid #0F172A",
                  position: "relative",
                  boxShadow:
                    "0 8px 18px rgba(15,23,42,0.18)",
                }}
              >
                {/* Taxi roof */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "38%",
                    height: 12,
                    left: "31%",
                    top: -9,
                    borderRadius:
                      "10px 10px 2px 2px",
                    background: "#FBBF24",
                    border: "2px solid #0F172A",
                    borderBottom: "none",
                  }}
                />

                {/* Windows */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "36%",
                    top: -6,
                    width: "28%",
                    height: 7,
                    background: "#1E40AF",
                    borderRadius: 3,
                  }}
                />

                {/* Front light */}
                <Box
                  sx={{
                    position: "absolute",
                    right: 2,
                    top: 11,
                    width: 5,
                    height: 6,
                    borderRadius: 2,
                    background: "#FFFFFF",
                  }}
                />

                {/* Back light */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 2,
                    top: 11,
                    width: 5,
                    height: 6,
                    borderRadius: 2,
                    background: "#EF4444",
                  }}
                />

                {/* Left wheel */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "12%",
                    bottom: -7,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#0F172A",
                    border: "3px solid #475569",
                  }}
                />

                {/* Right wheel */}
                <Box
                  sx={{
                    position: "absolute",
                    right: "12%",
                    bottom: -7,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#0F172A",
                    border: "3px solid #475569",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;