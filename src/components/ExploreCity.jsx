import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Madurai center
const maduraiPosition = [9.9252, 78.1198];

// Sample route around Madurai
const route = [
  [9.9252, 78.1198],
  [9.9305, 78.1165],
  [9.9365, 78.1105],
  [9.9425, 78.105],
  [9.949, 78.0985],
  [9.956, 78.0915],
];

const cities = [
  "Madurai",
  "Chennai",
  "Coimbatore",
  "Trichy",
  "Dindigul",
];

function ExploreCity() {
  return (
    <Box
      id="cities"
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
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(30,64,175,0.07)",
          filter: "blur(80px)",
          top: -150,
          left: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(251,191,36,0.09)",
          filter: "blur(70px)",
          bottom: -120,
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
        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mb: { xs: 5, md: 7 },
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
              fontWeight: 900,
              letterSpacing: "1.5px",
              mb: 2,
            }}
          >
            <LocationOnRoundedIcon
              sx={{
                fontSize: 18,
                color: "#FBBF24",
              }}
            />

            EXPLORE YOUR CITY
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
            Wherever you go,
            <br />
            <Box
              component="span"
              sx={{
                color: "#1E40AF",
              }}
            >
              we're on the way.
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
            From everyday city rides to long-distance journeys, Union Taxi
            helps you move comfortably across the places that matter to you.
          </Typography>
        </Box>

        {/* City Chips */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{
            mb: 5,
            overflowX: "auto",
            pb: 1,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {cities.map((city, index) => (
            <Chip
              key={city}
              icon={
                <LocationOnRoundedIcon
                  sx={{
                    fontSize: "18px !important",
                    color:
                      index === 0 ? "#0F172A !important" : "#1E40AF !important",
                  }}
                />
              }
              label={city}
              sx={{
                flexShrink: 0,
                px: 1,
                height: 42,
                borderRadius: "50px",
                fontWeight: 800,
                background:
                  index === 0
                    ? "#FBBF24"
                    : "#F8FAFC",
                color: "#0F172A",
                border:
                  index === 0
                    ? "1px solid #FBBF24"
                    : "1px solid rgba(30,64,175,0.10)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#FBBF24",
                  transform: "translateY(-3px)",
                },
              }}
            />
          ))}
        </Stack>

        {/* Map + Info */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.65fr 0.75fr",
            },
            gap: 2.5,
            alignItems: "stretch",
          }}
        >
          {/* Real Map */}
          <Box
            sx={{
              height: {
                xs: 400,
                sm: 470,
                md: 540,
              },
              borderRadius: {
                xs: 4,
                md: 5,
              },
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(15,23,42,0.08)",
              boxShadow: "0 25px 60px rgba(15,23,42,0.12)",
            }}
          >
            <MapContainer
              center={maduraiPosition}
              zoom={13}
              scrollWheelZoom={false}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Pickup */}
              <Marker position={maduraiPosition}>
                <Popup>
                  <strong>Union Taxi Pickup</strong>
                  <br />
                  Madurai
                </Popup>
              </Marker>

              {/* Destination */}
              <Marker position={route[route.length - 1]}>
                <Popup>
                  <strong>Your Destination</strong>
                  <br />
                  Madurai
                </Popup>
              </Marker>

              {/* Route */}
              <Polyline
                positions={route}
                pathOptions={{
                  color: "#1E40AF",
                  weight: 6,
                  opacity: 0.9,
                }}
              />
            </MapContainer>

            {/* Floating Map Badge */}
            <Box
              sx={{
                position: "absolute",
                top: 18,
                left: 18,
                zIndex: 500,
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1.1,
                borderRadius: 3,
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 25px rgba(15,23,42,0.15)",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FBBF24",
                  boxShadow: "0 0 0 5px rgba(251,191,36,0.18)",
                }}
              />

              <Typography
                sx={{
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  color: "#0F172A",
                }}
              >
                UNION TAXI • MADURAI
              </Typography>
            </Box>

            {/* Bottom Map Card */}
            <Box
              sx={{
                position: "absolute",
                bottom: 18,
                left: 18,
                right: 18,
                zIndex: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                p: 2,
                borderRadius: 3,
                background: "rgba(15,23,42,0.94)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                }}
              >
                <NavigationRoundedIcon
                  sx={{
                    color: "#FBBF24",
                    fontSize: 22,
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                    }}
                  >
                    CURRENT ROUTE
                  </Typography>

                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.88rem",
                      fontWeight: 800,
                    }}
                  >
                    Madurai City Ride
                  </Typography>
                </Box>
              </Box>

              <LocalTaxiRoundedIcon
                sx={{
                  color: "#FBBF24",
                  fontSize: 30,
                }}
              />
            </Box>
          </Box>

          {/* Side Content */}
          <Box
            sx={{
              borderRadius: {
                xs: 4,
                md: 5,
              },
              background: "#0F172A",
              p: {
                xs: 3,
                sm: 4,
                md: 4.5,
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 25px 60px rgba(15,23,42,0.15)",
            }}
          >
            <Box
              sx={{
                width: 58,
                height: 58,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FBBF24",
                color: "#0F172A",
                mb: 3,
              }}
            >
              <LocalTaxiRoundedIcon sx={{ fontSize: 30 }} />
            </Box>

            <Typography
              sx={{
                color: "#FBBF24",
                fontSize: "0.72rem",
                fontWeight: 900,
                letterSpacing: "1.8px",
                mb: 1.5,
              }}
            >
              YOUR CITY. YOUR RIDE.
            </Typography>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: {
                  xs: "1.8rem",
                  md: "2.15rem",
                },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Move freely.
              <br />
              Go further.
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Whether it's a quick trip across town or a journey beyond the
              city, choose Union Taxi for a smoother way to travel.
            </Typography>

            {/* Route Details */}
            <Stack spacing={2} sx={{ mb: 3.5 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#FBBF24",
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.88rem",
                  }}
                >
                  Easy pickup
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 1,
                  height: 22,
                  background: "rgba(255,255,255,0.15)",
                  ml: "5px",
                  mt: "-10px",
                  mb: "-10px",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#1E40AF",
                    border: "2px solid #FFFFFF",
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.88rem",
                  }}
                >
                  Comfortable destination
                </Typography>
              </Box>
            </Stack>

            <Button
              href="#contact"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                alignSelf: "flex-start",
                background: "#FBBF24",
                color: "#0F172A",
                borderRadius: 3,
                px: 2.8,
                py: 1.3,
                fontWeight: 900,
                textTransform: "none",
                "&:hover": {
                  background: "#F59E0B",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              Plan Your Ride
            </Button>
          </Box>
        </Box>

        {/* Bottom Message */}
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: "0.9rem",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#1E40AF",
                fontWeight: 900,
              }}
            >
              From your doorstep
            </Box>{" "}
            to wherever life takes you.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ExploreCity;
