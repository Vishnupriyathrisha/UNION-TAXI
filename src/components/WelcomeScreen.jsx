import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  LinearProgress,
  Chip,
} from "@mui/material";

import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import unionLogo from "../assets/union-logo.jpeg";

const WelcomeScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return prev + 2;
      });
    }, 45);

    const exitTimer = setTimeout(() => {
      setExiting(true);

      setTimeout(() => {
        onComplete();
      }, 650);
    }, 3000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f7f4fc 0%, #eeeafd 48%, #fdfbf4 100%)",
        opacity: exiting ? 0 : 1,
        transform: exiting
          ? "scale(1.03)"
          : "scale(1)",
        transition:
          "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {/* BACKGROUND GLOW - TOP LEFT */}
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 220,
            sm: 320,
            md: 430,
          },
          height: {
            xs: 220,
            sm: 320,
            md: 430,
          },
          borderRadius: "50%",
          left: {
            xs: -120,
            sm: -130,
            md: -160,
          },
          top: {
            xs: -100,
            sm: -130,
            md: -160,
          },
          background:
            "radial-gradient(circle, rgba(125,95,220,0.20), rgba(125,95,220,0))",
          pointerEvents: "none",
        }}
      />

      {/* BACKGROUND GLOW - RIGHT */}
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 230,
            sm: 340,
            md: 470,
          },
          height: {
            xs: 230,
            sm: 340,
            md: 470,
          },
          borderRadius: "50%",
          right: {
            xs: -130,
            sm: -150,
            md: -190,
          },
          bottom: {
            xs: -100,
            sm: -130,
            md: -170,
          },
          background:
            "radial-gradient(circle, rgba(245,197,66,0.19), rgba(245,197,66,0))",
          pointerEvents: "none",
        }}
      />

      {/* SOFT MAP GRID */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.16,
          backgroundImage: `
            linear-gradient(
              rgba(23,35,63,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(23,35,63,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: {
            xs: "55px 55px",
            sm: "70px 70px",
            md: "85px 85px",
          },
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* DECORATIVE CIRCLES */}
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 180,
            sm: 250,
            md: 330,
          },
          height: {
            xs: 180,
            sm: 250,
            md: 330,
          },
          borderRadius: "50%",
          border:
            "1px solid rgba(112,88,205,0.13)",
          left: {
            xs: "-20%",
            sm: "-10%",
            md: "4%",
          },
          top: {
            xs: "28%",
            sm: "24%",
            md: "18%",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 130,
            sm: 190,
            md: 240,
          },
          height: {
            xs: 130,
            sm: 190,
            md: 240,
          },
          borderRadius: "50%",
          border:
            "1px solid rgba(245,197,66,0.20)",
          right: {
            xs: "-12%",
            sm: "-7%",
            md: "8%",
          },
          top: {
            xs: "17%",
            sm: "15%",
            md: "13%",
          },
        }}
      />

      {/* TOP MINI LABEL */}
      <Box
        sx={{
          position: "absolute",
          top: {
            xs: 18,
            sm: 25,
            md: 34,
          },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
        }}
      >
        <Chip
          icon={
            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: {
                  xs: 13,
                  sm: 15,
                  md: 17,
                },
              }}
            />
          }
          label="YOUR JOURNEY STARTS HERE"
          sx={{
            height: {
              xs: 26,
              sm: 30,
              md: 34,
            },
            px: {
              xs: 0.5,
              sm: 1,
              md: 1.5,
            },
            borderRadius: "30px",
            background:
              "rgba(255,255,255,0.72)",
            border:
              "1px solid rgba(23,35,63,0.08)",
            backdropFilter: "blur(12px)",
            color: "#17233f",
            fontSize: {
              xs: "7px",
              sm: "9px",
              md: "11px",
            },
            fontWeight: 800,
            letterSpacing: {
              xs: "0.7px",
              md: "1.2px",
            },
            boxShadow:
              "0 8px 25px rgba(23,35,63,0.06)",
            "& .MuiChip-icon": {
              color: "#f5b91c",
            },
          }}
        />
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          px: {
            xs: 2,
            sm: 4,
            md: 6,
          },
          pt: {
            xs: 3,
            sm: 4,
            md: 5,
          },
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            width: {
              xs: 76,
              sm: 92,
              md: 112,
            },
            height: {
              xs: 76,
              sm: 92,
              md: 112,
            },
            borderRadius: {
              xs: "20px",
              sm: "24px",
              md: "28px",
            },
            overflow: "hidden",
            background: "#ffffff",
            border:
              "5px solid rgba(255,255,255,0.8)",
            boxShadow:
              "0 18px 50px rgba(23,35,63,0.13)",
            animation:
              "logoFloat 2.8s ease-in-out infinite",
            mb: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },
            "@keyframes logoFloat": {
              "0%, 100%": {
                transform: "translateY(0)",
              },
              "50%": {
                transform: "translateY(-7px)",
              },
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
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

        {/* TITLE */}
        <Typography
          sx={{
            color: "#17233f",
            fontSize: {
              xs: "28px",
              sm: "40px",
              md: "58px",
            },
            lineHeight: 1,
            fontWeight: 950,
            letterSpacing: {
              xs: "-1.2px",
              sm: "-1.8px",
              md: "-2.8px",
            },
            textAlign: "center",
          }}
        >
          UNION
          <Box
            component="span"
            sx={{
              color: "#e5aa00",
              ml: 1,
            }}
          >
            TAXI
          </Box>
        </Typography>

        {/* TAGLINE */}
        <Typography
          sx={{
            mt: {
              xs: 1,
              sm: 1.3,
              md: 1.6,
            },
            color: "#536079",
            fontSize: {
              xs: "10px",
              sm: "13px",
              md: "16px",
            },
            fontWeight: 650,
            letterSpacing: {
              xs: "0.7px",
              sm: "1px",
              md: "1.5px",
            },
            textAlign: "center",
          }}
        >
          RIDE TOGETHER • ARRIVE BETTER
        </Typography>

        {/* JOURNEY BADGE */}
        <Box
          sx={{
            mt: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
            px: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },
            py: {
              xs: 0.7,
              sm: 0.9,
              md: 1.1,
            },
            borderRadius: "50px",
            background:
              "rgba(255,255,255,0.70)",
            border:
              "1px solid rgba(23,35,63,0.08)",
            boxShadow:
              "0 10px 30px rgba(23,35,63,0.06)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 0.7,
              sm: 1,
            },
          }}
        >
          <LocationOnRoundedIcon
            sx={{
              color: "#eab319",
              fontSize: {
                xs: 16,
                sm: 19,
                md: 21,
              },
            }}
          />

          <Typography
            sx={{
              color: "#17233f",
              fontSize: {
                xs: "8px",
                sm: "10px",
                md: "12px",
              },
              fontWeight: 800,
            }}
          >
            PICK UP
          </Typography>

          <ArrowForwardRoundedIcon
            sx={{
              color: "#7c72aa",
              fontSize: {
                xs: 14,
                sm: 17,
                md: 19,
              },
            }}
          />

          <Typography
            sx={{
              color: "#17233f",
              fontSize: {
                xs: "8px",
                sm: "10px",
                md: "12px",
              },
              fontWeight: 800,
            }}
          >
            DESTINATION
          </Typography>

          <FlagRoundedIcon
            sx={{
              color: "#596fe0",
              fontSize: {
                xs: 15,
                sm: 18,
                md: 20,
              },
            }}
          />
        </Box>
      </Box>
      {/* ROUTE AREA */}
<Box
  sx={{
    position: "absolute",
    inset: 0,
    zIndex: 2,
    pointerEvents: "none",
  }}
>
  <svg
    viewBox="0 0 1000 700"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      overflow: "visible",
    }}
  >
    {/* MAIN ROUTE */}
    <path
      d="
        M 80 475
        C 180 500,
          230 455,
          315 405
        C 400 350,
          430 270,
          535 235
        C 650 195,
          735 150,
          920 95
      "
      fill="none"
      stroke="rgba(112,88,205,0.42)"
      strokeWidth="5"
      strokeDasharray="12 13"
      strokeLinecap="round"
    />

    {/* YELLOW INNER ROUTE */}
    <path
      d="
        M 80 475
        C 180 500,
          230 455,
          315 405
        C 400 350,
          430 270,
          535 235
        C 650 195,
          735 150,
          920 95
      "
      fill="none"
      stroke="rgba(245,197,66,0.72)"
      strokeWidth="2.5"
      strokeDasharray="4 13"
      strokeLinecap="round"
    />

    {/* START PIN */}
    <g>
      <circle
        cx="80"
        cy="475"
        r="23"
        fill="white"
        stroke="rgba(245,197,66,0.35)"
        strokeWidth="4"
      />

      <circle
        cx="80"
        cy="475"
        r="8"
        fill="#f5c542"
      />
    </g>

    {/* DESTINATION PIN */}
    <g>
      <circle
        cx="920"
        cy="95"
        r="23"
        fill="white"
        stroke="rgba(89,111,224,0.28)"
        strokeWidth="4"
      />

      <circle
        cx="920"
        cy="95"
        r="8"
        fill="#596fe0"
      />
    </g>
  </svg>

  {/* MOVING TAXI */}
  <Box
    sx={{
      position: "absolute",
      left: "8%",
      top: "68%",
      width: {
        xs: 46,
        sm: 55,
        md: 64,
      },
      height: {
        xs: 46,
        sm: 55,
        md: 64,
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      animation:
        "taxiExactRoute 3.2s linear infinite",

      "@keyframes taxiExactRoute": {
        "0%": {
          left: "8%",
          top: "68%",
          transform:
            "translate(-50%, -50%) rotate(8deg) scale(0.9)",
        },

        "8%": {
          left: "17%",
          top: "70%",
          transform:
            "translate(-50%, -50%) rotate(5deg) scale(0.94)",
        },

        "18%": {
          left: "27%",
          top: "64%",
          transform:
            "translate(-50%, -50%) rotate(-15deg) scale(0.98)",
        },

        "30%": {
          left: "37%",
          top: "55%",
          transform:
            "translate(-50%, -50%) rotate(-24deg) scale(1)",
        },

        "42%": {
          left: "47%",
          top: "44%",
          transform:
            "translate(-50%, -50%) rotate(-20deg) scale(1.02)",
        },

        "55%": {
          left: "58%",
          top: "35%",
          transform:
            "translate(-50%, -50%) rotate(-18deg) scale(1)",
        },

        "68%": {
          left: "69%",
          top: "28%",
          transform:
            "translate(-50%, -50%) rotate(-16deg) scale(0.98)",
        },

        "80%": {
          left: "79%",
          top: "22%",
          transform:
            "translate(-50%, -50%) rotate(-13deg) scale(0.95)",
        },

        "92%": {
          left: "88%",
          top: "16%",
          transform:
            "translate(-50%, -50%) rotate(-18deg) scale(0.92)",
        },

        "100%": {
          left: "92%",
          top: "13%",
          transform:
            "translate(-50%, -50%) rotate(-22deg) scale(0.88)",
        },
      },
    }}
  >
    {/* TAXI GLOW */}
    <Box
      sx={{
        position: "absolute",
        width: "90%",
        height: "50%",
        borderRadius: "50%",
        background:
          "rgba(245,197,66,0.30)",
        filter: "blur(10px)",
      }}
    />

    <LocalTaxiRoundedIcon
      sx={{
        position: "relative",
        zIndex: 2,
        fontSize: {
          xs: 35,
          sm: 43,
          md: 51,
        },
        color: "#f0bd22",
        filter:
          "drop-shadow(0 7px 8px rgba(23,35,63,0.18))",
      }}
    />
  </Box>
</Box>

      {/* FLOATING NOTE - LEFT */}
      <Box
        sx={{
          position: "absolute",
          left: {
            xs: "4%",
            sm: "7%",
            md: "11%",
          },
          top: {
            xs: "72%",
            sm: "70%",
            md: "69%",
          },
          transform: "rotate(-5deg)",
          display: {
            xs: "none",
            sm: "block",
          },
          zIndex: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily:
              '"Comic Sans MS", "Segoe Print", cursive',
            color: "#6d648c",
            fontSize: {
              sm: "10px",
              md: "13px",
            },
            fontWeight: 700,
          }}
        >
          smooth rides ✦
        </Typography>
      </Box>

      {/* FLOATING NOTE - RIGHT */}
      <Box
        sx={{
          position: "absolute",
          right: {
            xs: "4%",
            sm: "7%",
            md: "11%",
          },
          top: {
            xs: "59%",
            sm: "55%",
            md: "53%",
          },
          transform: "rotate(5deg)",
          display: {
            xs: "none",
            sm: "block",
          },
          zIndex: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily:
              '"Comic Sans MS", "Segoe Print", cursive',
            color: "#9a7d1d",
            fontSize: {
              sm: "10px",
              md: "13px",
            },
            fontWeight: 700,
          }}
        >
          your destination →
        </Typography>
      </Box>

      {/* PROGRESS CARD */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: {
            xs: 50,
            sm: 55,
            md: 65,
          },
          transform: "translateX(-50%)",
          width: {
            xs: "calc(100% - 40px)",
            sm: 360,
            md: 430,
          },
          maxWidth: "90%",
          px: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          py: {
            xs: 1.5,
            sm: 1.8,
            md: 2,
          },
          borderRadius: {
            xs: "16px",
            sm: "18px",
            md: "20px",
          },
          background:
            "rgba(255,255,255,0.82)",
          backdropFilter: "blur(18px)",
          border:
            "1px solid rgba(23,35,63,0.08)",
          boxShadow:
            "0 15px 45px rgba(23,35,63,0.10)",
          zIndex: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 0.9,
          }}
        >
          <Typography
            sx={{
              color: "#17233f",
              fontSize: {
                xs: "9px",
                sm: "11px",
                md: "12px",
              },
              fontWeight: 850,
            }}
          >
            Preparing your ride...
          </Typography>

          <Typography
            sx={{
              color: "#d49e00",
              fontSize: {
                xs: "9px",
                sm: "11px",
                md: "12px",
              },
              fontWeight: 900,
            }}
          >
            {progress}%
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: {
              xs: 5,
              sm: 6,
              md: 7,
            },
            borderRadius: "20px",
            backgroundColor:
              "rgba(23,35,63,0.07)",
            "& .MuiLinearProgress-bar": {
              borderRadius: "20px",
              background:
                "linear-gradient(90deg, #f5c542, #e7a900)",
            },
          }}
        />
      </Box>

      {/* BOTTOM LABEL */}
      <Box
        sx={{
          position: "absolute",
          bottom: {
            xs: 17,
            sm: 20,
            md: 25,
          },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 6,
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          sx={{
            color: "#788197",
            fontSize: {
              xs: "7px",
              sm: "8px",
              md: "10px",
            },
            fontWeight: 700,
            letterSpacing: {
              xs: "0.7px",
              md: "1px",
            },
            textAlign: "center",
          }}
        >
          UNION TAXI • SAFE • SIMPLE • TOGETHER
        </Typography>
      </Box>

      {/* SIDE DOTS */}
      <Box
        sx={{
          position: "absolute",
          left: {
            xs: "8%",
            md: "13%",
          },
          top: {
            xs: "23%",
            md: "26%",
          },
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#f5c542",
          boxShadow:
            "0 0 0 7px rgba(245,197,66,0.10)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: {
            xs: "9%",
            md: "15%",
          },
          top: {
            xs: "35%",
            md: "31%",
          },
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#7562d2",
          boxShadow:
            "0 0 0 7px rgba(117,98,210,0.10)",
        }}
      />
    </Box>
  );
};

export default WelcomeScreen;