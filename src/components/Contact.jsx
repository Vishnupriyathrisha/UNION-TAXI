import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Stack,
  Dialog,
  DialogContent,
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
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    rideType: "Sedan",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (field) => (event) => {
    const value = event.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = "Please enter pickup location";
    }

    if (!formData.destination.trim()) {
      newErrors.destination = "Please enter destination";
    }

    if (!formData.date) {
      newErrors.date = "Please select travel date";
    }

    if (!formData.time) {
      newErrors.time = "Please select preferred time";
    }

    return newErrors;
  };

  const generateBookingId = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    return `UT-${randomNumber}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newBookingId = generateBookingId();

      setBookingId(newBookingId);
      setLoading(false);
      setBookingOpen(true);
    }, 1400);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleBookAnother = () => {
    setBookingOpen(false);

    setFormData({
      name: "",
      phone: "",
      pickup: "",
      destination: "",
      date: "",
      time: "",
      rideType: "Sedan",
      message: "",
    });

    setErrors({});

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const formatDate = (date) => {
    if (!date) return "-";

    const selectedDate = new Date(`${date}T00:00:00`);

    return selectedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <Box
        id="contact"
        sx={{
          py: { xs: 9, md: 13 },
          background: "#F8FAFC",
          position: "relative",
          overflow: "hidden",

          "@keyframes floatGlow": {
            "0%, 100%": {
              transform: "translate(0, 0) scale(1)",
            },
            "50%": {
              transform: "translate(20px, -15px) scale(1.06)",
            },
          },

          "@keyframes buttonShine": {
            "0%": {
              transform: "translateX(-120%)",
            },
            "100%": {
              transform: "translateX(120%)",
            },
          },

          "@keyframes successPop": {
            "0%": {
              opacity: 0,
              transform: "scale(0.82) translateY(20px)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1) translateY(0)",
            },
          },

          "@keyframes checkPop": {
            "0%": {
              opacity: 0,
              transform: "scale(0.5)",
            },
            "70%": {
              transform: "scale(1.12)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1)",
            },
          },
        }}
      >
        {/* ================= DECORATIVE GLOW ================= */}

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
            pointerEvents: "none",
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
            pointerEvents: "none",
            animation: "floatGlow 7s ease-in-out infinite",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ================= HEADING ================= */}

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

          {/* ================= MAIN LAYOUT ================= */}

          <Grid container spacing={3}>
            {/* ================= BOOKING FORM ================= */}

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="form"
                onSubmit={handleSubmit}
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
                  {/* ================= NAME ================= */}

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Your Name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange("name")}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      variant="outlined"
                      sx={fieldStyle}
                      InputProps={{
                        startAdornment: (
                          <PersonRoundedIcon
                            sx={{
                              color: "#1E40AF",
                              mr: 1,
                              fontSize: 20,
                            }}
                          />
                        ),
                      }}
                    />
                  </Grid>

                  {/* ================= PHONE ================= */}

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Phone Number"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(event) => {
                        const value = event.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);

                        setFormData((prev) => ({
                          ...prev,
                          phone: value,
                        }));

                        setErrors((prev) => ({
                          ...prev,
                          phone: "",
                        }));
                      }}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone}
                      variant="outlined"
                      inputProps={{
                        inputMode: "numeric",
                        maxLength: 10,
                      }}
                      sx={fieldStyle}
                      InputProps={{
                        startAdornment: (
                          <PhoneRoundedIcon
                            sx={{
                              color: "#1E40AF",
                              mr: 1,
                              fontSize: 20,
                            }}
                          />
                        ),
                      }}
                    />
                  </Grid>

                  {/* ================= PICKUP ================= */}

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Pickup Location"
                      placeholder="Where should we pick you up?"
                      value={formData.pickup}
                      onChange={handleChange("pickup")}
                      error={Boolean(errors.pickup)}
                      helperText={errors.pickup}
                      variant="outlined"
                      sx={fieldStyle}
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
                    />
                  </Grid>

                  {/* ================= DESTINATION ================= */}

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Destination"
                      placeholder="Where are you going?"
                      value={formData.destination}
                      onChange={handleChange("destination")}
                      error={Boolean(errors.destination)}
                      helperText={errors.destination}
                      variant="outlined"
                      sx={fieldStyle}
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
                    />
                  </Grid>

                  {/* ================= DATE ================= */}

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Travel Date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange("date")}
                      error={Boolean(errors.date)}
                      helperText={errors.date}
                      inputProps={{
                        min: today,
                      }}
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

                  {/* ================= TIME ================= */}

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Preferred Time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange("time")}
                      error={Boolean(errors.time)}
                      helperText={errors.time}
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

                  {/* ================= RIDE TYPE ================= */}

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      select
                      label="Choose Ride Type"
                      value={formData.rideType}
                      onChange={handleChange("rideType")}
                      variant="outlined"
                      sx={fieldStyle}
                    >
                      <MenuItem value="Mini">
                        Mini / Economy
                      </MenuItem>

                      <MenuItem value="Sedan">
                        Sedan
                      </MenuItem>

                      <MenuItem value="SUV">
                        SUV
                      </MenuItem>

                      <MenuItem value="Family">
                        Family Ride
                      </MenuItem>
                    </TextField>
                  </Grid>

                  {/* ================= MESSAGE ================= */}

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Additional Message"
                      placeholder="Any special request or travel details?"
                      value={formData.message}
                      onChange={handleChange("message")}
                      sx={fieldStyle}
                    />
                  </Grid>

                  {/* ================= SUBMIT ================= */}

                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={loading}
                      endIcon={
                        loading ? null : <ArrowForwardRoundedIcon />
                      }
                      sx={{
                        position: "relative",
                        overflow: "hidden",
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
                        transition: "all 0.25s ease",

                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "35%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
                          transform: "translateX(-120%)",
                        },

                        "&:hover": {
                          background: "#F59E0B",
                          transform: "translateY(-3px)",
                          boxShadow:
                            "0 16px 30px rgba(251,191,36,0.28)",

                          "&::after": {
                            animation:
                              "buttonShine 0.9s ease-in-out",
                          },
                        },

                        "&.Mui-disabled": {
                          background: "#FBBF24",
                          color: "#0F172A",
                          opacity: 0.8,
                        },
                      }}
                    >
                      {loading ? "Submitting Your Ride..." : "Request My Ride"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* ================= CONTACT INFO ================= */}

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

                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
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

      {/* =========================================================
          BOOKING CONFIRMATION
      ========================================================= */}

      <Dialog
        open={bookingOpen}
        onClose={handleCloseBooking}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: { xs: 4, sm: 5 },
            overflow: "hidden",
            background: "#FFFFFF",
            boxShadow: "0 35px 100px rgba(15,23,42,0.25)",
            animation: "successPop 0.45s ease-out",
          },
        }}
      >
        <DialogContent
          sx={{
            p: { xs: 3, sm: 5 },
            position: "relative",
          }}
        >
          {/* Close */}

          <Button
            onClick={handleCloseBooking}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              minWidth: 40,
              width: 40,
              height: 40,
              borderRadius: "50%",
              color: "#64748B",
              "&:hover": {
                background: "#F1F5F9",
              },
            }}
          >
            <CloseRoundedIcon />
          </Button>

          {/* Success Icon */}

          <Box
            sx={{
              width: 78,
              height: 78,
              borderRadius: "50%",
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(34,197,94,0.10)",
              color: "#16A34A",
              animation: "checkPop 0.6s ease-out 0.15s both",
            }}
          >
            <CheckCircleRoundedIcon
              sx={{
                fontSize: 54,
              }}
            />
          </Box>

          {/* Heading */}

          <Typography
            sx={{
              mt: 2.5,
              textAlign: "center",
              fontSize: {
                xs: "1.7rem",
                sm: "2rem",
              },
              fontWeight: 900,
              color: "#0F172A",
            }}
          >
            Ride Request Received!
          </Typography>

          <Typography
            sx={{
              mt: 1,
              textAlign: "center",
              color: "#64748B",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: 420,
              mx: "auto",
            }}
          >
            Thank you, {formData.name || "there"}! Your Union Taxi ride
            request has been submitted successfully.
          </Typography>

          {/* Booking ID */}

          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 3,
              background: "#F8FAFC",
              border: "1px solid rgba(15,23,42,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.2,
            }}
          >
            <ConfirmationNumberRoundedIcon
              sx={{
                color: "#1E40AF",
              }}
            />

            <Box>
              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                BOOKING ID
              </Typography>

              <Typography
                sx={{
                  color: "#0F172A",
                  fontSize: "1.05rem",
                  fontWeight: 900,
                  letterSpacing: "1px",
                }}
              >
                {bookingId}
              </Typography>
            </Box>
          </Box>

          {/* ================= RIDE SUMMARY ================= */}

          <Box
            sx={{
              mt: 2,
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(15,23,42,0.08)",
            }}
          >
            <BookingDetail
              icon={<PersonRoundedIcon />}
              label="Passenger"
              value={formData.name}
            />

            <BookingDetail
              icon={<LocationOnRoundedIcon />}
              label="Pickup"
              value={formData.pickup}
            />

            <BookingDetail
              icon={<NavigationRoundedIcon />}
              label="Destination"
              value={formData.destination}
            />

            <BookingDetail
              icon={<CalendarMonthRoundedIcon />}
              label="Travel Date"
              value={formatDate(formData.date)}
            />

            <BookingDetail
              icon={<AccessTimeRoundedIcon />}
              label="Preferred Time"
              value={formData.time}
            />

            <BookingDetail
              icon={<LocalTaxiRoundedIcon />}
              label="Ride Type"
              value={formData.rideType}
              last
            />
          </Box>

          {/* Note */}

          <Box
            sx={{
              mt: 2.5,
              p: 1.8,
              borderRadius: 2.5,
              background: "rgba(251,191,36,0.10)",
              border: "1px solid rgba(251,191,36,0.20)",
            }}
          >
            <Typography
              sx={{
                color: "#92400E",
                fontSize: "0.75rem",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Our team will contact you on your registered phone number to
              confirm the ride details.
            </Typography>
          </Box>

          {/* Buttons */}

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={1.5}
            sx={{
              mt: 3,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={handleCloseBooking}
              sx={{
                py: 1.35,
                borderRadius: 2.5,
                background: "#1E40AF",
                color: "#FFFFFF",
                fontWeight: 800,
                textTransform: "none",
                "&:hover": {
                  background: "#1D4ED8",
                },
              }}
            >
              Done
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={handleBookAnother}
              sx={{
                py: 1.35,
                borderRadius: 2.5,
                borderColor: "#FBBF24",
                color: "#92400E",
                fontWeight: 800,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#F59E0B",
                  background: "rgba(251,191,36,0.08)",
                },
              }}
            >
              Book Another Ride
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

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

/* =========================================================
   BOOKING DETAIL
========================================================= */

function BookingDetail({ icon, label, value, last = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1.45,
        borderBottom: last
          ? "none"
          : "1px solid rgba(15,23,42,0.07)",
      }}
    >
      <Box
        sx={{
          width: 34,
          height: 34,
          minWidth: 34,
          borderRadius: 2,
          background: "rgba(30,64,175,0.08)",
          color: "#1E40AF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>

      <Box
        sx={{
          minWidth: 0,
          flex: 1,
        }}
      >
        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: "0.62rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.8px",
          }}
        >
          {label}
        </Typography>

        <Typography
          sx={{
            color: "#0F172A",
            fontSize: "0.84rem",
            fontWeight: 700,
            mt: 0.2,
            wordBreak: "break-word",
          }}
        >
          {value || "-"}
        </Typography>
      </Box>
    </Box>
  );
}

/* =========================================================
   TEXT FIELD STYLE
========================================================= */

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

  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginTop: "5px",
    fontSize: "0.68rem",
  },
};

export default Contact;

