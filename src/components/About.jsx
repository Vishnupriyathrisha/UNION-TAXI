import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";

const About = () => {
  const highlights = [
    {
      icon: <LocalTaxiRoundedIcon />,
      title: "Comfortable Rides",
      text: "Enjoy a smooth and relaxed travel experience for everyday journeys.",
    },
    {
      icon: <LocationOnRoundedIcon />,
      title: "Easy Pickup",
      text: "Convenient pickup and drop points make your journey simpler.",
    },
    {
      icon: <AirportShuttleRoundedIcon />,
      title: "Airport Travel",
      text: "Reliable travel options for airport transfers and important trips.",
    },
    {
      icon: <GroupsRoundedIcon />,
      title: "Family Friendly",
      text: "Comfortable travel designed for individuals, families and groups.",
    },
  ];

  const points = [
    "City rides for everyday travel",
    "Airport and long-distance journeys",
    "Flexible travel options",
    "Customer-focused service",
  ];

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "#F8FAFC",
        py: {
          xs: 8,
          md: 12,
        },

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        "@keyframes aboutFadeUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(35px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes aboutImageFloat": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        "@keyframes aboutGlow": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: 0.5,
          },
          "50%": {
            transform: "scale(1.15)",
            opacity: 0.8,
          },
        },

        "@keyframes aboutLine": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },

        "@keyframes routeSlide": {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "40px 0",
          },
        },

        "@keyframes cardEntrance": {
          "0%": {
            opacity: 0,
            transform: "translateY(25px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes iconPulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(251,191,36,0)",
          },
          "50%": {
            boxShadow: "0 0 0 8px rgba(251,191,36,0.08)",
          },
        },
      }}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 180,
            md: 320,
          },
          height: {
            xs: 180,
            md: 320,
          },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.07)",
          filter: "blur(70px)",
          top: "-80px",
          left: "-100px",
          pointerEvents: "none",
          animation: "aboutGlow 7s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 160,
            md: 280,
          },
          height: {
            xs: 160,
            md: 280,
          },
          borderRadius: "50%",
          background: "rgba(251,191,36,0.08)",
          filter: "blur(70px)",
          bottom: "-80px",
          right: "-80px",
          pointerEvents: "none",
          animation: "aboutGlow 8s ease-in-out infinite",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =====================================================
            TOP HEADING
        ===================================================== */}

        <Box
          sx={{
            maxWidth: 760,
            mb: {
              xs: 6,
              md: 8,
            },
            animation: "aboutFadeUp 0.8s ease-out both",
          }}
        >
          <Chip
            icon={
              <LocalTaxiRoundedIcon
                sx={{
                  color: "#2563EB !important",
                }}
              />
            }
            label="ABOUT UNION TAXI"
            sx={{
              mb: 2.5,
              height: 38,
              px: 1,
              borderRadius: "999px",
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.14)",
              color: "#1E40AF",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          />

          <Typography
            sx={{
              color: "#0F172A",
              fontSize: {
                xs: "38px",
                sm: "48px",
                md: "60px",
              },
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-2.5px",
            }}
          >
            Moving people.
          </Typography>

          <Typography
            sx={{
              color: "#2563EB",
              fontSize: {
                xs: "38px",
                sm: "48px",
                md: "60px",
              },
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-2.5px",
            }}
          >
            Connecting places.
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              color: "#64748B",
              fontSize: {
                xs: 16,
                md: 18,
              },
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            Union Taxi is built around a simple idea — every journey should
            feel comfortable, dependable and easy. From quick city rides to
            longer journeys, we want to make every mile a better experience.
          </Typography>
        </Box>

        {/* =====================================================
            MAIN ABOUT GRID
        ===================================================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "0.95fr 1.05fr",
            },
            gap: {
              xs: 6,
              lg: 9,
            },
            alignItems: "center",
          }}
        >
          {/* =================================================
              IMAGE AREA
          ================================================= */}

          <Box
            sx={{
              position: "relative",
              minHeight: {
                xs: 400,
                sm: 480,
                md: 540,
              },
              animation: "aboutFadeUp 0.9s ease-out 0.1s both",
            }}
          >
            {/* MAIN IMAGE */}

            <Box
              component="img"
              src="/about-taxi.webp"
              alt="Union Taxi travel"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: {
                  xs: "90%",
                  sm: "88%",
                },
                height: {
                  xs: 330,
                  sm: 410,
                  md: 470,
                },
                objectFit: "cover",
                borderRadius: {
                  xs: "24px",
                  md: "32px",
                },
                boxShadow:
                  "0 25px 60px rgba(15,23,42,0.18)",
                border: "6px solid #FFFFFF",
                animation:
                  "aboutImageFloat 6s ease-in-out infinite",
              }}
            />

            {/* BLUE DECORATIVE BORDER */}

            <Box
              sx={{
                position: "absolute",
                top: 22,
                left: 22,
                width: {
                  xs: "90%",
                  sm: "88%",
                },
                height: {
                  xs: 330,
                  sm: 410,
                  md: 470,
                },
                borderRadius: {
                  xs: "24px",
                  md: "32px",
                },
                border: "2px solid rgba(37,99,235,0.20)",
                pointerEvents: "none",
              }}
            />

            {/* SMALL FAMILY IMAGE */}

            <Box
              sx={{
                position: "absolute",
                right: {
                  xs: 0,
                  sm: 10,
                  md: 0,
                },
                bottom: {
                  xs: 5,
                  sm: 0,
                },
                width: {
                  xs: 155,
                  sm: 205,
                  md: 235,
                },
                height: {
                  xs: 145,
                  sm: 185,
                  md: 210,
                },
                borderRadius: {
                  xs: "20px",
                  md: "26px",
                },
                overflow: "hidden",
                border: "6px solid #FFFFFF",
                boxShadow:
                  "0 20px 45px rgba(15,23,42,0.22)",
                zIndex: 3,
                animation:
                  "aboutImageFloat 5s ease-in-out 0.5s infinite",
              }}
            >
              <Box
                component="img"
                src="/about-family.png"
                alt="Family taxi journey"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* YELLOW BADGE */}

            <Box
              sx={{
                position: "absolute",
                left: {
                  xs: 15,
                  sm: 20,
                },
                bottom: {
                  xs: 35,
                  sm: 25,
                  md: 20,
                },
                zIndex: 4,
                px: 2,
                py: 1.5,
                borderRadius: "16px",
                background: "#FBBF24",
                color: "#0F172A",
                boxShadow:
                  "0 15px 35px rgba(251,191,36,0.30)",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <RouteRoundedIcon />

              <Box>
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    opacity: 0.7,
                  }}
                >
                  EVERY JOURNEY
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 900,
                  }}
                >
                  Matters
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* =================================================
              CONTENT AREA
          ================================================= */}

          <Box
            sx={{
              animation: "aboutFadeUp 0.9s ease-out 0.25s both",
            }}
          >
            <Typography
              sx={{
                color: "#0F172A",
                fontSize: {
                  xs: 28,
                  md: 38,
                },
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-1.2px",
              }}
            >
              More than a ride,

              <Box
                component="span"
                sx={{
                  color: "#2563EB",
                  display: {
                    xs: "inline",
                    md: "block",
                  },
                  ml: {
                    xs: 1,
                    md: 0,
                  },
                }}
              >
                {" "}
                it's your journey.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                color: "#64748B",
                fontSize: 16,
                lineHeight: 1.85,
              }}
            >
              With a strong local travel focus, Union Taxi brings together
              convenient booking, comfortable rides, professional service and
              a customer-first approach. We believe a taxi service is not just
              about getting from one place to another — it is about making the
              journey itself better.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#64748B",
                fontSize: 16,
                lineHeight: 1.85,
              }}
            >
              From busy city roads to long-distance highways, every journey
              is different. Union Taxi is designed to support everyday
              commuters, families, professionals and travellers with flexible
              travel options that keep things simple.
            </Typography>

            {/* =================================================
                POINTS
            ================================================= */}

            <Stack
              spacing={1.6}
              sx={{
                mt: 3.5,
              }}
            >
              {points.map((point) => (
                <Stack
                  key={point}
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      color: "#2563EB",
                      fontSize: 21,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#334155",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {point}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* =================================================
                MINI STATS
            ================================================= */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                  sm: "repeat(3, 1fr)",
                },
                gap: 1.5,
                mt: 4,
              }}
            >
              {[
                {
                  value: "24/7",
                  label: "Travel Support",
                },
                {
                  value: "City +",
                  label: "Outstation",
                },
                {
                  value: "1 Goal",
                  label: "Better Travel",
                },
              ].map((stat) => (
                <Box
                  key={stat.value}
                  sx={{
                    p: 2,
                    borderRadius: "18px",
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    transition:
                      "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#93C5FD",
                      boxShadow:
                        "0 12px 30px rgba(15,23,42,0.08)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0F172A",
                      fontSize: 20,
                      fontWeight: 900,
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 11,
                      mt: 0.4,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* SMALL CTA */}

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                mt: 4,
                color: "#2563EB",
                cursor: "pointer",
                width: "fit-content",

                "&:hover .about-arrow": {
                  transform: "translateX(6px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Discover the Union Taxi experience
              </Typography>

              <ArrowForwardRoundedIcon
                className="about-arrow"
                sx={{
                  fontSize: 20,
                  transition:
                    "transform 0.25s ease",
                }}
              />
            </Stack>
          </Box>
        </Box>

        {/* =====================================================
            BUILT AROUND YOUR JOURNEY
        ===================================================== */}

        <Box
          sx={{
            mt: {
              xs: 8,
              md: 11,
            },
            animation:
              "aboutFadeUp 0.9s ease-out 0.4s both",
          }}
        >
          {/* SECTION HEADER */}

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="space-between"
            alignItems={{
              xs: "flex-start",
              md: "flex-end",
            }}
            spacing={2}
            sx={{
              mb: 4,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#0F172A",
                  fontSize: {
                    xs: 27,
                    md: 34,
                  },
                  fontWeight: 900,
                  letterSpacing: "-1px",
                }}
              >
                Built around your journey
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748B",
                  fontSize: 15,
                }}
              >
                Simple travel experiences designed for everyday needs.
              </Typography>
            </Box>

            {/* ANIMATED LINE */}

            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: 190,
                },
                height: 4,
                borderRadius: "999px",
                background: "#E2E8F0",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #2563EB, #FBBF24)",
                  animation:
                    "aboutLine 1.5s ease-out 0.6s both",
                }}
              />
            </Box>
          </Stack>

          {/* =================================================
              ANIMATED ROUTE BACKGROUND
          ================================================= */}

          <Box
            sx={{
              position: "relative",
              borderRadius: {
                xs: "26px",
                md: "32px",
              },
              p: {
                xs: 1,
                md: 1.5,
              },
              overflow: "hidden",

              background:
                "linear-gradient(135deg, rgba(37,99,235,0.035), rgba(251,191,36,0.045))",

              border:
                "1px solid rgba(226,232,240,0.9)",
            }}
          >
            {/* MOVING ROUTE */}

            <Box
              sx={{
                position: "absolute",
                left: "-10%",
                right: "-10%",
                top: "50%",
                height: 2,
                opacity: 0.45,

                backgroundImage:
                  "repeating-linear-gradient(90deg, #2563EB 0px, #2563EB 10px, transparent 10px, transparent 20px)",

                animation:
                  "routeSlide 2.5s linear infinite",

                pointerEvents: "none",
              }}
            />

            {/* =================================================
                CARDS
            ================================================= */}

            <Box
              sx={{
                position: "relative",
                zIndex: 2,

                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  lg: "repeat(4, 1fr)",
                },
                gap: 2,
              }}
            >
              {highlights.map((item, index) => (
                <Box
                  key={item.title}
                  sx={{
                    position: "relative",
                    overflow: "hidden",

                    p: {
                      xs: 2.5,
                      md: 3,
                    },

                    minHeight: {
                      xs: "auto",
                      lg: 250,
                    },

                    borderRadius: {
                      xs: "22px",
                      md: "26px",
                    },

                    background:
                      "rgba(255,255,255,0.96)",

                    border:
                      "1px solid #E2E8F0",

                    boxShadow:
                      "0 8px 25px rgba(15,23,42,0.035)",

                    animation: `cardEntrance 0.7s ease-out ${
                      0.2 + index * 0.12
                    }s both`,

                    transition:
                      "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: 4,

                      background:
                        "linear-gradient(90deg, #2563EB, #FBBF24)",

                      transform:
                        "scaleX(0)",
                      transformOrigin:
                        "left",
                      transition:
                        "transform 0.35s ease",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background:
                        "rgba(251,191,36,0.10)",
                      right: -45,
                      bottom: -45,
                      opacity: 0,
                      transform: "scale(0.7)",
                      transition:
                        "all 0.4s ease",
                    },

                    "&:hover": {
                      transform:
                        "translateY(-10px)",
                      borderColor:
                        "#93C5FD",
                      background:
                        "linear-gradient(145deg, #FFFFFF, #FFFEF5)",
                      boxShadow:
                        "0 25px 50px rgba(15,23,42,0.11)",

                      "&::before": {
                        transform:
                          "scaleX(1)",
                      },

                      "&::after": {
                        opacity: 1,
                        transform:
                          "scale(1)",
                      },

                      "& .highlight-icon": {
                        background:
                          "#FBBF24",
                        color:
                          "#0F172A",
                        transform:
                          "scale(1.08) rotate(-5deg)",
                        boxShadow:
                          "0 10px 25px rgba(251,191,36,0.22)",
                      },

                      "& .highlight-title": {
                        color:
                          "#1E40AF",
                      },

                      "& .highlight-arrow": {
                        opacity: 1,
                        transform:
                          "translateX(5px)",
                      },
                    },
                  }}
                >
                  {/* ICON */}

                  <Box
                    className="highlight-icon"
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      background:
                        "rgba(37,99,235,0.08)",
                      color: "#2563EB",

                      mb: 2.5,

                      transition:
                        "all 0.35s ease",

                      animation:
                        index === 0
                          ? "iconPulse 3s ease-in-out infinite"
                          : "none",
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* NUMBER */}

                  <Typography
                    sx={{
                      position: "absolute",
                      top: 18,
                      right: 20,
                      color: "#CBD5E1",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    0{index + 1}
                  </Typography>

                  {/* TITLE */}

                  <Typography
                    className="highlight-title"
                    sx={{
                      color: "#0F172A",
                      fontSize: 17,
                      fontWeight: 850,

                      transition:
                        "color 0.3s ease",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* TEXT */}

                  <Typography
                    sx={{
                      mt: 1,
                      color: "#64748B",
                      fontSize: 13,
                      lineHeight: 1.75,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {item.text}
                  </Typography>

                  {/* ARROW */}

                  <ArrowForwardRoundedIcon
                    className="highlight-arrow"
                    sx={{
                      position: "absolute",
                      right: 22,
                      bottom: 20,
                      fontSize: 19,
                      color: "#FBBF24",
                      opacity: 0,
                      transform:
                        "translateX(0)",
                      transition:
                        "all 0.3s ease",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* =====================================================
            BOTTOM TAGLINE
        ===================================================== */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 9,
            },
            py: 3,
            px: {
              xs: 2.5,
              md: 4,
            },
            borderRadius: "24px",

            background:
              "linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)",

            position: "relative",
            overflow: "hidden",

            animation:
              "aboutFadeUp 0.9s ease-out 0.5s both",
          }}
        >
          {/* YELLOW GLOW */}

          <Box
            sx={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              background:
                "rgba(251,191,36,0.10)",
              right: -50,
              top: -80,

              animation:
                "aboutGlow 6s ease-in-out infinite",
            }}
          />

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            justifyContent="space-between"
            alignItems={{
              xs: "flex-start",
              sm: "center",
            }}
            spacing={2}
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: {
                    xs: 20,
                    md: 24,
                  },
                  fontWeight: 900,
                }}
              >
                Ride together. Go further.
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color:
                    "rgba(255,255,255,0.65)",
                  fontSize: 13,
                }}
              >
                Travel better with Union Taxi.
              </Typography>
            </Box>

            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "15px",
                background: "#FBBF24",
                color: "#0F172A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,

                transition:
                  "transform 0.3s ease",

                "&:hover": {
                  transform:
                    "rotate(-8deg) scale(1.08)",
                },
              }}
            >
              <LocalTaxiRoundedIcon />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default About;