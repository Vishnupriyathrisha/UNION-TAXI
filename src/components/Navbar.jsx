import { useState } from "react";

import {
  AppBar,
  Container,
  Box,
  Button,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import unionLogo from "../assets/union-logo.jpeg";

const navItems = [
  {
    label: "Home",
    icon: <HomeOutlinedIcon />,
    href: "#home",
  },
  {
    label: "About",
    icon: <InfoOutlinedIcon />,
    href: "#about",
  },
  {
    label: "Services",
    icon: <LocalTaxiIcon />,
    href: "#services",
  },
  {
    label: "Why Us",
    icon: <AutoAwesomeOutlinedIcon />,
    href: "#why-us",
  },
  {
    label: "Pricing",
    icon: <PaymentsOutlinedIcon />,
    href: "#pricing",
  },
  {
    label: "Contact",
    icon: <CallOutlinedIcon />,
    href: "#contact",
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(251, 249, 255, 0.96)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        borderBottom:
          "1px solid rgba(23, 35, 63, 0.08)",

        color: "#17233f",

        zIndex: 1200,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 0.45,
            sm: 1.5,
            md: 3,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",

            minHeight: {
              xs: 58,
              sm: 66,
              md: 76,
            },

            display: "flex",

            alignItems: "center",

            gap: {
              xs: 0.15,
              sm: 0.7,
              md: 1.8,
            },

            overflow: "hidden",
          }}
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Box
            component="a"
            href="#home"
            onClick={() => setActiveItem("Home")}
            sx={{
              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              flexShrink: 0,

              textDecoration: "none",

              width: {
                xs: 34,
                sm: 44,
                md: 50,
              },

              height: {
                xs: 34,
                sm: 44,
                md: 50,
              },
            }}
          >
            <Box
              component="img"
              src={unionLogo}
              alt="Union Taxi"
              sx={{
                width: "100%",
                height: "100%",

                display: "block",

                objectFit: "contain",

                borderRadius: 0,

                boxShadow: "none",

                transition:
                  "transform 0.25s ease",

                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            />
          </Box>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <Box
            sx={{
              flex: 1,

              minWidth: 0,

              display: "flex",

              alignItems: "center",

              justifyContent: "space-between",

              gap: {
                xs: 0,
                sm: 0.25,
                md: 0.6,
              },
            }}
          >
            {navItems.map((item) => {
              const isActive =
                activeItem === item.label;

              return (
                <Button
                  key={item.label}
                  component="a"
                  href={item.href}
                  startIcon={item.icon}
                  onClick={() =>
                    setActiveItem(item.label)
                  }
                  sx={{
                    position: "relative",

                    minWidth: 0,

                    flex: 1,

                    px: {
                      xs: 0,
                      sm: 0.4,
                      md: 0.9,
                    },

                    py: {
                      xs: 0.55,
                      sm: 0.7,
                      md: 0.9,
                    },

                    borderRadius: {
                      xs: "6px",
                      sm: "8px",
                      md: "10px",
                    },

                    background: isActive
                      ? "#eaf3f3"
                      : "transparent",

                    color: "#17233f",

                    fontSize: {
                      xs: "7px",
                      sm: "10px",
                      md: "13px",
                    },

                    fontWeight: isActive
                      ? 800
                      : 700,

                    textTransform: "none",

                    whiteSpace: "nowrap",

                    lineHeight: 1,

                    transition:
                      "background 0.25s ease, transform 0.25s ease",

                    "& .MuiButton-startIcon": {
                      marginRight: {
                        xs: "1px",
                        sm: "3px",
                        md: "5px",
                      },

                      "& svg": {
                        fontSize: {
                          xs: 10,
                          sm: 15,
                          md: 18,
                        },
                      },
                    },

                    /* =========================
                       ACTIVE UNDERLINE
                    ========================= */

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      left: "18%",

                      right: "18%",

                      bottom: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                      },

                      height: {
                        xs: "2px",
                        md: "3px",
                      },

                      borderRadius: "20px",

                      background: isActive
                        ? "#e7693f"
                        : "transparent",

                      transform: isActive
                        ? "scaleX(1)"
                        : "scaleX(0)",

                      transition:
                        "transform 0.3s ease",
                    },

                    "&:hover": {
                      background: isActive
                        ? "#f5c542"
                        : "rgba(245,197,66,0.12)",

                      color: "#17233f",

                      transform:
                        "translateY(-1px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* =====================================================
              BOOK A RIDE
          ===================================================== */}

          <Button
            component="a"
            href="#contact"
            variant="contained"
            endIcon={
              <ArrowForwardRoundedIcon />
            }
            onClick={() => setActiveItem("Contact")}
            sx={{
              flexShrink: 0,

              minWidth: "auto",

              px: {
                xs: 0.4,
                sm: 0.9,
                md: 1.6,
              },

              py: {
                xs: 0.55,
                sm: 0.75,
                md: 1,
              },

              borderRadius: {
                xs: "7px",
                sm: "9px",
                md: "11px",
              },

              background:
                "linear-gradient(135deg, #dba66a, #e6be5a)",

              color: "#17233f",

              fontSize: {
                xs: "7px",
                sm: "10px",
                md: "12px",
              },

              fontWeight: 900,

              textTransform: "none",

              whiteSpace: "nowrap",

              lineHeight: 1,

              boxShadow:
                "0 5px 14px rgba(245,197,66,0.23)",

              transition:
                "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",

              "& .MuiButton-endIcon": {
                marginLeft: {
                  xs: "1px",
                  sm: "3px",
                },

                "& svg": {
                  fontSize: {
                    xs: 10,
                    sm: 14,
                    md: 18,
                  },
                },
              },

              "&:hover": {
                background:
                  "linear-gradient(135deg, #f3b51b, #e9a900)",

                transform:
                  "translateY(-1px)",

                boxShadow:
                  "0 8px 18px rgba(245,197,66,0.30)",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                },
              }}
            >
              Book a Ride
            </Box>

            <Box
              component="span"
              sx={{
                display: {
                  xs: "inline",
                  sm: "none",
                },
              }}
            >
              Book
            </Box>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
