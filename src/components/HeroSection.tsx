import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { amber } from '@mui/material/colors';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
};

export default function HeroSection() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${amber[900]}22 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${amber[800]}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 760 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                mb: 2,
                display: 'block',
              }}
            >
              Portfolio
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                mb: 1,
                color: 'text.primary',
              }}
            >
              KISHAN
              <Box
                component="span"
                sx={{ color: 'primary.main', display: 'inline' }}
              >
                {' '}M
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                mt: 3,
                mb: 1.5,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
              }}
            >
              Full-Stack Web &amp; Automation Developer
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 560,
                lineHeight: 1.8,
                fontSize: '1rem',
                mb: 5,
              }}
            >
              Engineering responsive interfaces with React and orchestrating
              intelligent backends with Python.
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <Tooltip title="GitHub" placement="bottom">
                <IconButton
                  component="a"
                  href="https://github.com/kishan16672-collab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn" placement="bottom">
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/kishan-m-84098930b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="kishan16672@gmail.com" placement="bottom">
                <IconButton
                  component="a"
                  href="mailto:kishan16672@gmail.com"
                  aria-label="Send email"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                  }}
                >
                  <EmailIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="+91 82206 09837" placement="bottom">
                <IconButton
                  component="a"
                  href="tel:+918220609837"
                  aria-label="Phone contact"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                  }}
                >
                  <PhoneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
