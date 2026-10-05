import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";

import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const reasons = [
  {
    icon: <ShieldRoundedIcon />,
    title: "Travel With Confidence",
    text: "Every journey is designed with safety, reliability and peace of mind in focus.",
  },
  {
    icon: <SpeedRoundedIcon />,
    title: "Simple & Convenient",
    text: "From booking to destination, we keep your travel experience smooth and easy.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Journey-Focused Support",
    text: "Helpful support whenever you need it, before, during and after your ride.",
  },
  {
    icon: <RouteRoundedIcon />,
    title: "City To Outstation",
    text: "Travel comfortably across your city or take your journey beyond city limits.",
  },
  {
    icon: <GroupsRoundedIcon />,
    title: "Made For Everyone",
    text: "Whether you're travelling alone, with friends or with family, we've got you covered.",
  },
  {
    icon: <StarRoundedIcon />,
    title: "A Better Ride Experience",
    text: "Comfort, convenience and thoughtful service come together in every journey.",
  },
];

const BuiltItem = ({ children }) => {
  return (
    <Stack
      direction="row"
      spacing={1.2}
      sx={{
        alignItems: "center",
      }}
    >
      <CheckCircleRoundedIcon
        sx={{
          fontSize: 21,
          color: "#FBBF24",
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontSize: {
            xs: "0.88rem",
            sm: "0.95rem",
          },
          color: "#475569",
          fontWeight: 600,
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

const WhyUs = () => {
  return (
    <Box
      id="why-us"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "#F8FAFC",
        py: {
          xs: 8,
          md: 13,
        },
      }}
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <Box
        sx={{
          position: "absolute",
          top: "8%",
          right: "-120px",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(30, 64, 175, 0.08)",
          filter: "blur(10px)",
          animation: "whyFloat 7s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "-100px",
          width: 230,
          height: 230,
          borderRadius: "50%",
          background: "rgba(251, 191, 36, 0.10)",
          filter: "blur(12px)",
          animation: "whyFloat 8s ease-in-out infinite reverse",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =========================================
            HEADING
        ========================================= */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 780,
            mx: "auto",
            mb: {
              xs: 5,
              md: 8,
            },
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
              background: "rgba(30, 64, 175, 0.08)",
              border: "1px solid rgba(30, 64, 175, 0.12)",
              mb: 2,
            }}
          >
            <StarRoundedIcon
              sx={{
                fontSize: 17,
                color: "#FBBF24",
              }}
            />

            <Typography
              sx={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "#1E40AF",
              }}
            >
              WHY UNION TAXI
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.4rem",
              },
              lineHeight: 1.08,
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-0.04em",
              mb: 2,
            }}
          >
            More reasons to{" "}
            <Box
              component="span"
              sx={{
                color: "#1E40AF",
              }}
            >
              ride with us.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: {
                xs: "0.95rem",
                md: "1.05rem",
              },
              lineHeight: 1.8,
            }}
          >
            We believe a great taxi experience is more than getting from
            point A to point B. It's about making every part of your journey
            comfortable, simple and dependable.
          </Typography>
        </Box>

        {/* =========================================
            REASON CARDS
        ========================================= */}

        <Grid
          container
          spacing={2.5}
          sx={{
            mb: {
              xs: 7,
              md: 10,
            },
          }}
        >
          {reasons.map((reason, index) => (
            <Grid
              key={reason.title}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  minHeight: {
                    xs: 220,
                    md: 245,
                  },
                  p: {
                    xs: 3,
                    md: 3.5,
                  },
                  borderRadius: "24px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(15, 23, 42, 0.07)",
                  boxShadow:
                    "0 15px 45px rgba(15, 23, 42, 0.06)",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                  animation: `whyCardIn 0.7s ease ${
                    index * 0.08
                  }s both`,

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 25px 60px rgba(15, 23, 42, 0.12)",
                    borderColor:
                      "rgba(30, 64, 175, 0.20)",

                    "& .reason-icon": {
                      transform:
                        "rotate(-6deg) scale(1.08)",
                      background: "#1E40AF",
                      color: "#FFFFFF",
                    },

                    "& .reason-line": {
                      width: "70px",
                    },
                  },
                }}
              >
                {/* Corner Decoration */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 70,
                    height: 70,
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(251,191,36,0.13) 50%)",
                  }}
                />

                {/* Icon */}
                <Box
                  className="reason-icon"
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: "17px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "rgba(30, 64, 175, 0.09)",
                    color: "#1E40AF",
                    mb: 2.5,
                    transition:
                      "transform 0.35s ease, background 0.35s ease, color 0.35s ease",
                  }}
                >
                  {reason.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.1rem",
                      md: "1.18rem",
                    },
                    fontWeight: 800,
                    color: "#0F172A",
                    mb: 1,
                  }}
                >
                  {reason.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {reason.text}
                </Typography>

                {/* Animated Bottom Line */}
                <Box
                  className="reason-line"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "35px",
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #1E40AF, #FBBF24)",
                    borderRadius: "0 5px 0 0",
                    transition: "width 0.35s ease",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* =========================================
            UNION TAXI PROMISE
        ========================================= */}

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: {
              xs: "28px",
              md: "36px",
            },
            background:
              "linear-gradient(120deg, #0F172A 0%, #172554 55%, #1E40AF 100%)",
            p: {
              xs: 3,
              sm: 4,
              md: 6,
            },
            mb: {
              xs: 7,
              md: 10,
            },
            boxShadow:
              "0 25px 70px rgba(15, 23, 42, 0.18)",
          }}
        >
          {/* Glow 1 */}
          <Box
            sx={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "rgba(251, 191, 36, 0.10)",
              top: -160,
              right: -100,
              filter: "blur(5px)",
            }}
          />

          {/* Glow 2 */}
          <Box
            sx={{
              position: "absolute",
              width: 220,
              height: 220,
              borderRadius: "50%",
              background:
                "rgba(59, 130, 246, 0.15)",
              bottom: -130,
              left: -80,
              filter: "blur(8px)",
            }}
          />

          <Grid
            container
            spacing={4}
            sx={{
              position: "relative",
              zIndex: 2,
              alignItems: "center",
            }}
          >
            {/* Promise Content */}
            <Grid
              size={{
                xs: 12,
                md: 7,
              }}
            >
              <Typography
                sx={{
                  color: "#FBBF24",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  letterSpacing: "0.18em",
                  mb: 1.5,
                }}
              >
                THE UNION TAXI PROMISE
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 900,
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "2.8rem",
                  },
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  mb: 2,
                }}
              >
                Every ride should feel{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#FBBF24",
                  }}
                >
                  effortless.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.8,
                  fontSize: {
                    xs: "0.9rem",
                    md: "1rem",
                  },
                  maxWidth: 650,
                }}
              >
                From the moment you book to the moment you reach your
                destination, we're focused on creating a smooth and
                comfortable travel experience.
              </Typography>

              {/* Animated Route */}
              <Box
                sx={{
                  mt: 3,
                  width: "100%",
                  maxWidth: 500,
                  height: 2,
                  background:
                    "repeating-linear-gradient(90deg, rgba(251,191,36,0.7) 0 7px, transparent 7px 15px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -5,
                    left: 0,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#FBBF24",
                    boxShadow:
                      "0 0 18px rgba(251,191,36,0.8)",
                    animation:
                      "promiseCar 4s linear infinite",
                  }}
                />
              </Box>
            </Grid>

            {/* Promise Checklist */}
            <Grid
              size={{
                xs: 12,
                md: 5,
              }}
            >
              <Box
                sx={{
                  p: {
                    xs: 2.5,
                    md: 3,
                  },
                  borderRadius: "22px",
                  background:
                    "rgba(255,255,255,0.07)",
                  border:
                    "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    mb: 2,
                  }}
                >
                  A journey you can count on
                </Typography>

                <Stack spacing={1.5}>
                  {[
                    "Safety-first travel",
                    "Comfortable rides",
                    "Simple booking experience",
                    "Customer-focused service",
                  ].map((item) => (
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        alignItems: "center",
                      }}
                      key={item}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          color: "#FBBF24",
                          fontSize: 19,
                          flexShrink: 0,
                        }}
                      />

                      <Typography
                        sx={{
                          color:
                            "rgba(255,255,255,0.75)",
                          fontSize: "0.86rem",
                        }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* =========================================
            BUILT FOR THE JOURNEY
        ========================================= */}

        <Grid
          container
          spacing={0}
          sx={{
            borderRadius: {
              xs: "28px",
              md: "36px",
            },
            overflow: "hidden",
            background: "#FFFFFF",
            border:
              "1px solid rgba(15, 23, 42, 0.07)",
            boxShadow:
              "0 20px 60px rgba(15, 23, 42, 0.08)",
            alignItems: "stretch",
          }}
        >
          {/* ================= IMAGE ================= */}

          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
            sx={{
              minHeight: {
                xs: 280,
                sm: 350,
                md: 500,
              },
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Actual Image */}
            <Box
              component="img"
              src="/why-journey.jpg"
              alt="Union Taxi journey"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition:
                  "transform 0.8s ease",

                "&:hover": {
                  transform: "scale(1.06)",
                },
              }}
            />

            {/* Image Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.05) 20%, rgba(15,23,42,0.75) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Image Text */}
            <Box
              sx={{
                position: "absolute",
                left: {
                  xs: 20,
                  md: 28,
                },
                bottom: {
                  xs: 20,
                  md: 28,
                },
                zIndex: 2,
              }}
            >
              {/* Yellow Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "50px",
                  background:
                    "rgba(251,191,36,0.95)",
                  color: "#0F172A",
                  mb: 1,
                }}
              >
                {/* Taxi Mini Icon */}
                <Box
                  sx={{
                    width: 17,
                    height: 10,
                    borderRadius:
                      "4px 4px 3px 3px",
                    background: "#0F172A",
                    position: "relative",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: 8,
                      height: 5,
                      left: 4,
                      top: -4,
                      borderRadius:
                        "4px 4px 0 0",
                      background: "#0F172A",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#FBBF24",
                      left: 2,
                      bottom: -2,
                      boxShadow:
                        "9px 0 0 #FBBF24",
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                  }}
                >
                  RIDE WITH UNION
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 900,
                  fontSize: {
                    xs: "1.45rem",
                    md: "1.8rem",
                  },
                  lineHeight: 1.15,
                  maxWidth: 300,
                }}
              >
                Your journey,
                <br />
                our priority.
              </Typography>
            </Box>
          </Grid>

          {/* ================= CONTENT ================= */}

          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
            sx={{
              p: {
                xs: 3,
                sm: 4,
                md: 6,
              },
            }}
          >
            <Typography
              sx={{
                color: "#1E40AF",
                fontSize: "0.72rem",
                fontWeight: 900,
                letterSpacing: "0.17em",
                mb: 1.5,
              }}
            >
              BUILT FOR THE JOURNEY
            </Typography>

            <Typography
              component="h3"
              sx={{
                color: "#0F172A",
                fontWeight: 900,
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.25rem",
                  md: "2.7rem",
                },
                lineHeight: 1.12,
                letterSpacing: "-0.035em",
                mb: 2,
              }}
            >
              Not just a ride.
              <br />

              <Box
                component="span"
                sx={{
                  color: "#1E40AF",
                }}
              >
                A better journey.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                lineHeight: 1.85,
                fontSize: {
                  xs: "0.9rem",
                  md: "0.98rem",
                },
                mb: 3,
              }}
            >
              Whether you're heading across town, catching a flight or
              planning a longer trip, Union Taxi is designed around the
              way you travel. We combine convenience, comfort and
              customer-focused service to make every journey count.
            </Typography>

            {/* Checklist */}
            <Stack
              spacing={1.7}
              sx={{
                mb: 3.5,
              }}
            >
              <BuiltItem>
                Comfortable travel
              </BuiltItem>

              <BuiltItem>
                Simple experience
              </BuiltItem>

              <BuiltItem>
                Flexible journey options
              </BuiltItem>

              <BuiltItem>
                Customer-focused service
              </BuiltItem>
            </Stack>

            {/* Button */}
            <Button
              href="#contact"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: "13px",
                textTransform: "none",
                fontWeight: 800,
                background: "#1E40AF",
                boxShadow:
                  "0 10px 25px rgba(30,64,175,0.22)",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  background: "#1E3A8A",
                  transform: "translateY(-3px)",
                  boxShadow:
                    "0 15px 30px rgba(30,64,175,0.28)",
                },
              }}
            >
              Choose Your Ride
            </Button>
          </Grid>
        </Grid>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <Box
          sx={{
            textAlign: "center",
            mt: {
              xs: 6,
              md: 8,
            },
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
              mb: 2,
            }}
          >
            Ready to make your next journey count?
          </Typography>

          <Button
            href="#home"
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderRadius: "50px",
              px: 3,
              py: 1.2,
              borderWidth: "1.5px",
              borderColor: "#1E40AF",
              color: "#1E40AF",
              textTransform: "none",
              fontWeight: 800,

              "&:hover": {
                borderWidth: "1.5px",
                borderColor: "#0F172A",
                background:
                  "rgba(30,64,175,0.05)",
              },
            }}
          >
            Back To Home
          </Button>
        </Box>
      </Container>

      {/* =========================================
          ANIMATIONS
      ========================================= */}

      <style>
        {`
          @keyframes whyFloat {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-22px);
            }
          }

          @keyframes whyCardIn {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes promiseCar {
            0% {
              left: -5px;
            }

            100% {
              left: calc(100% - 7px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default WhyUs;