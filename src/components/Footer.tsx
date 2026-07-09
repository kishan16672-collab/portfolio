import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        py: { xs: 8, md: 10 },
        mt: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 4,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, letterSpacing: '0.05em', mb: 0.5 }}
              >
                KISHAN M
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Full-Stack Web &amp; Automation Developer
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/kishan16672-collab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
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
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/kishan-m-84098930b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
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
              <Tooltip title="kishan16672@gmail.com">
                <IconButton
                  component="a"
                  href="mailto:kishan16672@gmail.com"
                  aria-label="Email"
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
              <Tooltip title="+91 82206 09837">
                <IconButton
                  component="a"
                  href="tel:+918220609837"
                  aria-label="Phone"
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
          </Box>

          <Divider sx={{ my: 4, borderColor: 'divider' }} />

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            &copy; {new Date().getFullYear()} Kishan M. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
