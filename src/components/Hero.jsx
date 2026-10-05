import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 82px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",

        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(15, 23, 42, 0.96) 0%,
            rgba(15, 23, 42, 0.82) 38%,
            rgba(15, 23, 42, 0.55) 68%,
            rgba(15, 23, 42, 0.32) 100%
          ),
          url("/taxi-hero.jpg")
        `,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        py: {
          xs: 7,
          md: 9,
        },

        "@keyframes heroFadeUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(35px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes heroFadeRight": {
          "0%": {
            opacity: 0,
            transform: "translateX(45px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },

        "@keyframes glowFloat": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "translate(-20px, 20px) scale(1.08)",
          },
        },

        "@keyframes glowFloatTwo": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "translate(20px, -15px) scale(1.06)",
          },
        },

        "@keyframes taxiMove": {
          "0%": {
            transform: "translateX(-12px) rotate(-15deg)",
          },
          "50%": {
            transform: "translateX(18px) rotate(-15deg)",
          },
          "100%": {
            transform: "translateX(-12px) rotate(-15deg)",
          },
        },

        "@keyframes pulseBlue": {
          "0%, 100%": {
            boxShadow: "0 0 0 5px rgba(96,165,250,0.12)",
          },
          "50%": {
            boxShadow: "0 0 0 13px rgba(96,165,250,0.02)",
          },
        },

        "@keyframes pulseYellow": {
          "0%, 100%": {
            boxShadow: "0 0 0 5px rgba(251,191,36,0.12)",
          },
          "50%": {
            boxShadow: "0 0 0 13px rgba(251,191,36,0.02)",
          },
        },

        "@keyframes routeMove": {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "24px 0",
          },
        },

        "@keyframes cardFloat": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-7px)",
          },
        },
      }}
    >
      {/* ================= DECORATIVE GLOW ================= */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 360 },
          height: { xs: 180, md: 360 },
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.18)",
          filter: "blur(70px)",
          top: "-80px",
          right: "-80px",
          pointerEvents: "none",
          animation: "glowFloat 7s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderRadius: "50%",
          background: "rgba(251, 191, 36, 0.12)",
          filter: "blur(70px)",
          bottom: "-100px",
          left: "-80px",
          pointerEvents: "none",
          animation: "glowFloatTwo 8s ease-in-out infinite",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.05fr 0.95fr",
            },
            gap: {
              xs: 5,
              md: 7,
            },
            alignItems: "center",
          }}
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <Box
            sx={{
              animation: "heroFadeUp 0.9s ease-out both",
            }}
          >
            {/* BADGE */}

            <Chip
              icon={
                <LocalTaxiRoundedIcon
                  sx={{
                    color: "#FBBF24 !important",
                  }}
                />
              }
              label="TAMIL NADU'S SMART RIDE"
              sx={{
                mb: 3,
                height: 38,
                px: 1,
                borderRadius: "999px",
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#FFFFFF",
                fontWeight: 700,
                letterSpacing: "1px",
                backdropFilter: "blur(12px)",
                animation: "heroFadeUp 0.7s ease-out both",
              }}
            />

            {/* HEADING */}

            <Typography
              sx={{
                fontSize: {
                  xs: "42px",
                  sm: "54px",
                  md: "68px",
                  lg: "76px",
                },
                lineHeight: 0.98,
                fontWeight: 900,
                letterSpacing: "-3px",
                color: "#FFFFFF",
                maxWidth: 720,
                animation: "heroFadeUp 0.9s ease-out 0.1s both",
              }}
            >
              Your journey.

              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#FBBF24",
                }}
              >
                Our priority.
              </Box>
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                mt: 3,
                maxWidth: 610,
                color: "rgba(255,255,255,0.78)",
                fontSize: {
                  xs: "16px",
                  md: "19px",
                },
                lineHeight: 1.7,
                animation: "heroFadeUp 0.9s ease-out 0.2s both",
              }}
            >
              Comfortable city rides, airport trips and outstation journeys
              designed to make every mile simple, smooth and stress-free.
            </Typography>

            {/* ================= FEATURES ================= */}

            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1.2}
              sx={{
                mt: 3.5,
                animation: "heroFadeUp 0.9s ease-out 0.3s both",
              }}
            >
              {[
                {
                  icon: <BoltRoundedIcon />,
                  text: "Quick Pickup",
                },
                {
                  icon: <ShieldRoundedIcon />,
                  text: "Safe Rides",
                },
                {
                  icon: <RouteRoundedIcon />,
                  text: "Easy Routes",
                },
              ].map((item) => (
                <Box
                  key={item.text}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 1.8,
                    py: 1,
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    color: "#FFFFFF",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-4px)",
                      background: "rgba(37,99,235,0.20)",
                      borderColor: "rgba(96,165,250,0.45)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      color: "#FBBF24",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* ================= BUTTONS ================= */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              sx={{
                mt: 4,
                animation: "heroFadeUp 0.9s ease-out 0.4s both",
              }}
            >
              <Button
                href="#contact"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  minHeight: 54,
                  px: 3,
                  borderRadius: "14px",
                  background: "#FBBF24",
                  color: "#0F172A",
                  fontSize: 15,
                  fontWeight: 800,
                  textTransform: "none",
                  boxShadow: "0 12px 30px rgba(251,191,36,0.25)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    background: "#F59E0B",
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 35px rgba(251,191,36,0.35)",
                  },
                }}
              >
                Book Your Ride
              </Button>

              <Button
                href="#services"
                variant="outlined"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  minHeight: 54,
                  px: 3,
                  borderRadius: "14px",
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    borderColor: "#FBBF24",
                    color: "#FBBF24",
                    background: "rgba(251,191,36,0.06)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                Explore Services
              </Button>
            </Stack>

            {/* ================= TRUST INFO ================= */}

            <Stack
              direction="row"
              spacing={3}
              sx={{
                mt: 4,
                flexWrap: "wrap",
                rowGap: 1.5,
                animation: "heroFadeUp 0.9s ease-out 0.5s both",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: 24,
                    fontWeight: 900,
                  }}
                >
                  24/7
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.60)",
                    fontSize: 12,
                  }}
                >
                  Ride availability
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "1px",
                  background: "rgba(255,255,255,0.20)",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: 24,
                    fontWeight: 900,
                  }}
                >
                  Easy
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.60)",
                    fontSize: 12,
                  }}
                >
                  Booking experience
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "1px",
                  background: "rgba(255,255,255,0.20)",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: 24,
                    fontWeight: 900,
                  }}
                >
                  TN
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.60)",
                    fontSize: 12,
                  }}
                >
                  Local travel spirit
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* =====================================================
              RIGHT BOOKING CARD
          ===================================================== */}

          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                lg: "flex-end",
              },
              animation: "heroFadeRight 1s ease-out 0.2s both",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 450,
                p: {
                  xs: 2,
                  sm: 2.5,
                },
                borderRadius: "28px",
                background: "rgba(15,23,42,0.76)",
                border: "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.35)",

                animation: "cardFloat 5s ease-in-out infinite",

                transition: "all 0.3s ease",

                "&:hover": {
                  borderColor: "rgba(251,191,36,0.35)",
                  boxShadow: "0 35px 90px rgba(0,0,0,0.45)",
                },
              }}
            >
              {/* ================= CARD HEADER ================= */}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  mb: 2.5,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: 20,
                    }}
                  >
                    Where to?
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 12,
                      mt: 0.3,
                    }}
                  >
                    Plan your next ride
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "14px",
                    background: "#FBBF24",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0F172A",
                    animation: "pulseYellow 2.5s ease-in-out infinite",
                  }}
                >
                  <LocalTaxiRoundedIcon />
                </Box>
              </Stack>

              {/* ================= LOCATION BOX ================= */}

              <Box
                sx={{
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  p: 2,
                }}
              >
                <Stack spacing={2}>
                  {/* PICKUP */}

                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "12px",
                        background: "rgba(37,99,235,0.20)",
                        color: "#60A5FA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOnRoundedIcon />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        Pickup
                      </Typography>

                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: 14,
                        }}
                      >
                        Your current location
                      </Typography>
                    </Box>
                  </Stack>

                  {/* VERTICAL ROUTE */}

                  <Box
                    sx={{
                      ml: 2.2,
                      borderLeft: "1px dashed rgba(255,255,255,0.25)",
                      height: 20,
                    }}
                  />

                  {/* DESTINATION */}

                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "12px",
                        background: "rgba(251,191,36,0.16)",
                        color: "#FBBF24",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RouteRoundedIcon />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        Destination
                      </Typography>

                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: 14,
                        }}
                      >
                        Where are you going?
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>

              {/* ================= MAP AREA ================= */}

              <Box
                sx={{
                  mt: 2,
                  height: 170,
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",

                  background: `
                    linear-gradient(
                      135deg,
                      rgba(37,99,235,0.35),
                      rgba(15,23,42,0.90)
                    )
                  `,

                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {/* ROAD LINE 1 */}

                <Box
                  sx={{
                    position: "absolute",
                    width: "150%",
                    height: 2,
                    background: "rgba(255,255,255,0.18)",
                    transform: "rotate(-22deg)",
                    top: "45%",
                    left: "-20%",
                  }}
                />

                {/* ROAD LINE 2 */}

                <Box
                  sx={{
                    position: "absolute",
                    width: "150%",
                    height: 2,
                    background: "rgba(255,255,255,0.10)",
                    transform: "rotate(18deg)",
                    top: "58%",
                    left: "-20%",
                  }}
                />

                {/* VERTICAL ROAD */}

                <Box
                  sx={{
                    position: "absolute",
                    width: "2px",
                    height: "150%",
                    background: "rgba(255,255,255,0.10)",
                    transform: "rotate(28deg)",
                    left: "48%",
                    top: "-20%",
                  }}
                />

                {/* ================= ANIMATED ROUTE ================= */}

                <Box
                  sx={{
                    position: "absolute",
                    width: "58%",
                    height: 4,
                    left: "20%",
                    top: "52%",

                    borderTop: "3px dashed #FBBF24",

                    transform: "rotate(-15deg)",

                    animation: "routeMove 1.2s linear infinite",
                  }}
                />

                {/* ================= PICKUP POINT ================= */}

                <Box
                  sx={{
                    position: "absolute",
                    left: "18%",
                    top: "65%",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#60A5FA",
                    border: "3px solid rgba(255,255,255,0.85)",

                    animation:
                      "pulseBlue 2s ease-in-out infinite",
                  }}
                />

                {/* ================= DESTINATION POINT ================= */}

                <Box
                  sx={{
                    position: "absolute",
                    right: "20%",
                    top: "27%",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#FBBF24",
                    border: "3px solid rgba(255,255,255,0.85)",

                    animation:
                      "pulseYellow 2s ease-in-out infinite",
                  }}
                />

                {/* ================= ANIMATED TAXI ================= */}

                <Box
                  sx={{
                    position: "absolute",
                    left: "42%",
                    top: "44%",
                    width: 58,
                    height: 28,
                    borderRadius: "9px 9px 6px 6px",
                    background: "#FBBF24",

                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.3)",

                    animation:
                      "taxiMove 4s ease-in-out infinite",
                  }}
                >
                  {/* TAXI ROOF */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: 27,
                      height: 11,
                      borderRadius: "6px 6px 2px 2px",
                      background: "#1E293B",
                      left: 15,
                      top: -7,
                    }}
                  />

                  {/* LEFT WHEEL */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#111827",
                      left: 7,
                      bottom: -5,
                    }}
                  />

                  {/* RIGHT WHEEL */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#111827",
                      right: 7,
                      bottom: -5,
                    }}
                  />
                </Box>
              </Box>

              {/* ================= CARD FOOTER ================= */}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  mt: 2,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <AccessTimeRoundedIcon
                    sx={{
                      color: "#FBBF24",
                      fontSize: 20,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 10,
                      }}
                    >
                      Estimated pickup
                    </Typography>

                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      A few minutes
                    </Typography>
                  </Box>
                </Stack>

                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    minWidth: 105,
                    borderRadius: "12px",
                    background: "#2563EB",
                    color: "#FFFFFF",
                    fontWeight: 800,
                    textTransform: "none",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#1D4ED8",
                      transform: "translateY(-3px)",
                      boxShadow:
                        "0 10px 25px rgba(37,99,235,0.35)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;