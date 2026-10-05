import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 9, md: 13 },
        background: "#F8FAFC",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "rgba(30,64,175,0.07)",
          filter: "blur(85px)",
          top: -150,
          left: -120,
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
            BOOK YOUR RIDE
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
            Your next journey
            <br />
            <Box
              component="span"
              sx={{
                color: "#1E40AF",
              }}
            >
              starts here.
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
            Tell us where you want to go and we'll help make your journey
            simple, comfortable and convenient.
          </Typography>
        </Box>

        {/* Main Layout */}
        <Grid container spacing={3}>
          {/* Booking Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                background: "#FFFFFF",
                borderRadius: { xs: 4, md: 5 },
                p: { xs: 3, sm: 4, md: 5 },
                border: "1px solid rgba(15,23,42,0.07)",
                boxShadow: "0 20px 50px rgba(15,23,42,0.08)",
              }}
            >
              <Box sx={{ mb: 3.5 }}>
                <Typography
                  sx={{
                    color: "#0F172A",
                    fontSize: "1.55rem",
                    fontWeight: 900,
                    mb: 0.7,
                  }}
                >
                  Request a ride
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "0.86rem",
                  }}
                >
                  Fill in your details and we'll take it from there.
                </Typography>
              </Box>

              <Grid container spacing={2.2}>
                {/* Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    placeholder="Enter your name"
                    variant="outlined"
                    sx={fieldStyle}
                  />
                </Grid>

                {/* Phone */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    variant="outlined"
                    sx={fieldStyle}
                  />
                </Grid>

                {/* Pickup */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Pickup Location"
                    placeholder="Where should we pick you up?"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <LocationOnRoundedIcon
                          sx={{
                            color: "#FBBF24",
                            mr: 1,
                          }}
                        />
                      ),
                    }}
                    sx={fieldStyle}
                  />
                </Grid>

                {/* Destination */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Destination"
                    placeholder="Where are you going?"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <NavigationRoundedIcon
                          sx={{
                            color: "#1E40AF",
                            mr: 1,
                          }}
                        />
                      ),
                    }}
                    sx={fieldStyle}
                  />
                </Grid>

                {/* Date */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Travel Date"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <CalendarMonthRoundedIcon
                          sx={{
                            color: "#FBBF24",
                            mr: 1,
                          }}
                        />
                      ),
                    }}
                    sx={fieldStyle}
                  />
                </Grid>

                {/* Time */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Preferred Time"
                    type="time"
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <AccessTimeRoundedIcon
                          sx={{
                            color: "#FBBF24",
                            mr: 1,
                          }}
                        />
                      ),
                    }}
                    sx={fieldStyle}
                  />
                </Grid>

                {/* Ride Type */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    select
                    label="Choose Ride Type"
                    defaultValue="Sedan"
                    variant="outlined"
                    sx={fieldStyle}
                  >
                    <MenuItem value="Mini">Mini / Economy</MenuItem>
                    <MenuItem value="Sedan">Sedan</MenuItem>
                    <MenuItem value="SUV">SUV</MenuItem>
                    <MenuItem value="Family">Family Ride</MenuItem>
                  </TextField>
                </Grid>

                {/* Message */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Additional Message"
                    placeholder="Any special request or travel details?"
                    sx={fieldStyle}
                  />
                </Grid>

                {/* Button */}
                <Grid size={{ xs: 12 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      mt: 0.5,
                      py: 1.55,
                      borderRadius: 3,
                      background: "#FBBF24",
                      color: "#0F172A",
                      fontWeight: 900,
                      fontSize: "0.95rem",
                      textTransform: "none",
                      boxShadow:
                        "0 12px 25px rgba(251,191,36,0.20)",
                      "&:hover": {
                        background: "#F59E0B",
                        transform: "translateY(-3px)",
                        boxShadow:
                          "0 16px 30px rgba(251,191,36,0.28)",
                      },
                      transition: "all 0.25s ease",
                    }}
                  >
                    Request My Ride
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                height: "100%",
                minHeight: { md: 620 },
                background: "#0F172A",
                borderRadius: { xs: 4, md: 5 },
                p: { xs: 3, sm: 4, md: 5 },
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow:
                  "0 25px 60px rgba(15,23,42,0.18)",
              }}
            >
              {/* Decorative Circle */}
              <Box
                sx={{
                  position: "absolute",
                  width: 230,
                  height: 230,
                  borderRadius: "50%",
                  border: "1px solid rgba(251,191,36,0.18)",
                  top: -100,
                  right: -80,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "rgba(30,64,175,0.25)",
                  filter: "blur(35px)",
                  bottom: -50,
                  left: -40,
                }}
              />

              <Box sx={{ position: "relative", zIndex: 2 }}>
                <Typography
                  sx={{
                    color: "#FBBF24",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    letterSpacing: "1.7px",
                    mb: 1.5,
                  }}
                >
                  LET'S GET MOVING
                </Typography>

                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: {
                      xs: "2rem",
                      md: "2.55rem",
                    },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  We're here to
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: "#FBBF24",
                    }}
                  >
                    help you move.
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    maxWidth: 420,
                  }}
                >
                  Have a question about your ride? Need help planning a
                  journey? Reach out and our team will be happy to help.
                </Typography>
              </Box>

              {/* Contact Details */}
              <Stack
                spacing={2}
                sx={{
                  position: "relative",
                  zIndex: 2,
                  my: 4,
                }}
              >
                <ContactItem
                  icon={<PhoneRoundedIcon />}
                  label="CALL US"
                  value="+91 00000 00000"
                />

                <ContactItem
                  icon={<EmailRoundedIcon />}
                  label="EMAIL US"
                  value="hello@uniontaxi.com"
                />

                <ContactItem
                  icon={<LocationOnRoundedIcon />}
                  label="SERVICE AREA"
                  value="Tamil Nadu & Beyond"
                />
              </Stack>

              {/* Trust Box */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  p: 2.3,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.06)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    mb: 1,
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      color: "#FBBF24",
                      fontSize: 21,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                    }}
                  >
                    Ride with confidence
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.78rem",
                    lineHeight: 1.7,
                  }}
                >
                  Simple booking. Comfortable rides. Journey-focused
                  support.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

/* Contact item */
function ContactItem({ icon, label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.8,
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          minWidth: 48,
          borderRadius: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(251,191,36,0.12)",
          color: "#FBBF24",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.42)",
            fontSize: "0.62rem",
            fontWeight: 900,
            letterSpacing: "1.3px",
            mb: 0.25,
          }}
        >
          {label}
        </Typography>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "0.88rem",
            fontWeight: 700,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

/* Text field style */
const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 3,
    background: "#F8FAFC",
    transition: "all 0.25s ease",

    "& fieldset": {
      borderColor: "rgba(15,23,42,0.10)",
    },

    "&:hover fieldset": {
      borderColor: "#1E40AF",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#FBBF24",
      borderWidth: "2px",
    },
  },

  "& .MuiInputLabel-root": {
    color: "#64748B",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#0F172A",
  },

  "& .MuiInputBase-input": {
    fontSize: "0.88rem",
  },
};

export default Contact;
