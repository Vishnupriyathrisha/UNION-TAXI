import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";

import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#0F172A",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(30,64,175,0.16)",
          filter: "blur(90px)",
          top: -220,
          right: -150,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(251,191,36,0.08)",
          filter: "blur(80px)",
          bottom: -180,
          left: -120,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          pt: { xs: 7, md: 9 },
          pb: 4,
        }}
      >
        {/* ================= TOP CTA ================= */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #1E40AF 0%, #17358F 100%)",
            borderRadius: { xs: 4, md: 5 },
            p: { xs: 3, sm: 4, md: 5 },
            mb: { xs: 6, md: 8 },
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "rgba(251,191,36,0.16)",
              filter: "blur(45px)",
              right: -40,
              top: -70,
            }}
          />

          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                sx={{
                  color: "#FBBF24",
                  fontSize: "0.7rem",
                  fontWeight: 900,
                  letterSpacing: "1.8px",
                  mb: 1,
                }}
              >
                YOUR JOURNEY STARTS HERE
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2.2rem",
                    md: "2.7rem",
                  },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 1.2,
                }}
              >
                Ready for your next ride?
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  maxWidth: 560,
                }}
              >
                From everyday city rides to longer journeys, Union Taxi is
                ready to move with you.
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-end",
                },
              }}
            >
              <Box
                component="a"
                href="#contact"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 3,
                  py: 1.5,
                  borderRadius: "50px",
                  background: "#FBBF24",
                  color: "#0F172A",
                  textDecoration: "none",
                  fontWeight: 900,
                  fontSize: "0.86rem",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background: "#FFFFFF",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 25px rgba(0,0,0,0.18)",
                  },
                }}
              >
                Book Your Ride
                <LocalTaxiRoundedIcon sx={{ fontSize: 20 }} />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* ================= FOOTER CONTENT ================= */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* ================= BRAND ================= */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box>
              {/* UNION TAXI BRAND */}
              <Box
                component="a"
                href="#home"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.4,
                  textDecoration: "none",
                  mb: 2,
                  transition: "all 0.25s ease",

                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {/* Small Car */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2.5,
                    background: "#FBBF24",
                    color: "#0F172A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                      "0 8px 20px rgba(251,191,36,0.18)",
                  }}
                >
                  <LocalTaxiRoundedIcon
                    sx={{
                      fontSize: 30,
                    }}
                  />
                </Box>

                {/* Union Taxi Text */}
                <Box>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: {
                        xs: "1.25rem",
                        sm: "1.35rem",
                      },
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.4px",
                    }}
                  >
                    UNION
                    <Box
                      component="span"
                      sx={{
                        color: "#FBBF24",
                        ml: 0.6,
                      }}
                    >
                      TAXI
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.55rem",
                      fontWeight: 800,
                      letterSpacing: "1.5px",
                      mt: 0.7,
                    }}
                  >
                    RIDE TOGETHER
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  color: "#FBBF24",
                  fontWeight: 900,
                  fontSize: "0.75rem",
                  letterSpacing: "1.8px",
                  mb: 1,
                }}
              >
                RIDE TOGETHER • GO FURTHER
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.84rem",
                  lineHeight: 1.8,
                  maxWidth: 330,
                }}
              >
                A modern taxi experience designed around comfortable rides,
                simple booking and better journeys.
              </Typography>

              {/* SOCIAL ICONS */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mt: 2.5,
                }}
              >
                <SocialButton>
                  <FacebookRoundedIcon />
                </SocialButton>

                <SocialButton>
                  <InstagramIcon />
                </SocialButton>

                <SocialButton>
                  <LinkedInIcon />
                </SocialButton>
              </Stack>
            </Box>
          </Grid>

          {/* ================= QUICK LINKS ================= */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <FooterTitle>QUICK LINKS</FooterTitle>

            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#how-it-works">
              How It Works
            </FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </Grid>

          {/* ================= EXPLORE ================= */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <FooterTitle>EXPLORE</FooterTitle>

            <FooterLink href="#why-us">Why Us</FooterLink>
            <FooterLink href="#safety">Safety</FooterLink>
            <FooterLink href="#cities">Cities</FooterLink>
            <FooterLink href="#fleet">Fleet</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
          </Grid>

          {/* ================= CONTACT ================= */}
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <FooterTitle>GET IN TOUCH</FooterTitle>

            <ContactRow
              icon={<PhoneRoundedIcon />}
              text="+91 00000 00000"
            />

            <ContactRow
              icon={<EmailRoundedIcon />}
              text="hello@uniontaxi.com"
            />

            <ContactRow
              icon={<LocationOnRoundedIcon />}
              text="Tamil Nadu & Beyond"
            />
          </Grid>
        </Grid>

        {/* ================= DIVIDER ================= */}
        <Divider
          sx={{
            mt: { xs: 5, md: 7 },
            borderColor: "rgba(255,255,255,0.09)",
          }}
        />

        {/* ================= BOTTOM ================= */}
        <Box
          sx={{
            pt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.42)",
              fontSize: "0.72rem",
            }}
          >
            © {new Date().getFullYear()} Union Taxi. All rights reserved.
          </Typography>

          <Box
            onClick={handleTop}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              color: "#FBBF24",
              fontSize: "0.72rem",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.2s ease",

              "&:hover": {
                color: "#FFFFFF",
                transform: "translateY(-2px)",
              },
            }}
          >
            Back to top

            <ArrowUpwardRoundedIcon
              sx={{
                fontSize: 17,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ================= FOOTER TITLE ================= */

function FooterTitle({ children }) {
  return (
    <Typography
      sx={{
        color: "#FFFFFF",
        fontSize: "0.72rem",
        fontWeight: 900,
        letterSpacing: "1.5px",
        mb: 2.2,
      }}
    >
      {children}
    </Typography>
  );
}

/* ================= FOOTER LINK ================= */

function FooterLink({ href, children }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: "block",
        width: "fit-content",
        color: "rgba(255,255,255,0.52)",
        textDecoration: "none",
        fontSize: "0.8rem",
        mb: 1.25,
        transition: "all 0.2s ease",

        "&:hover": {
          color: "#FBBF24",
          transform: "translateX(4px)",
        },
      }}
    >
      {children}
    </Box>
  );
}

/* ================= CONTACT ROW ================= */

function ContactRow({ icon, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.4,
        mb: 1.7,
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          minWidth: 36,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(251,191,36,0.10)",
          color: "#FBBF24",
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.58)",
          fontSize: "0.8rem",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

/* ================= SOCIAL BUTTON ================= */

function SocialButton({ children }) {
  return (
    <IconButton
      sx={{
        width: 38,
        height: 38,
        borderRadius: 2.5,
        color: "rgba(255,255,255,0.55)",
        background: "rgba(255,255,255,0.06)",
        transition: "all 0.25s ease",

        "&:hover": {
          color: "#0F172A",
          background: "#FBBF24",
          transform: "translateY(-3px)",
        },

        "& svg": {
          fontSize: 19,
        },
      }}
    >
      {children}
    </IconButton>
  );
}

export default Footer;
