import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import { amber } from '@mui/material/colors';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

export default function EducationMetrics() {
  return (
    <Box id="education" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              mb: 1,
              display: 'block',
            }}
          >
            Background
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 6, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
          >
            Education &amp; Metrics
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {/* Education Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '3px',
                    height: '100%',
                    background: `linear-gradient(to bottom, ${amber[500]}, ${amber[900]})`,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: `${amber[500]}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SchoolIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  </Box>
                  <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                    Academic Program
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.3 }}>
                  NxtWave of Innovation in<br />Advanced Technologies
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>
                  NIAT
                </Typography>

                <Divider sx={{ borderColor: 'divider', my: 2 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Expected Graduation
                  </Typography>
                  <Chip
                    label="2029"
                    size="small"
                    sx={{
                      bgcolor: `${amber[500]}15`,
                      color: 'primary.main',
                      border: '1px solid',
                      borderColor: `${amber[500]}40`,
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Metrics Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
              {/* Codeforces Widget */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ flex: 1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '3px',
                      height: '100%',
                      background: `linear-gradient(to bottom, ${amber[500]}, ${amber[900]})`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: `${amber[500]}18`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <SpeedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    </Box>
                    <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                      Competitive Programming
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, mb: 2 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1 }}
                    >
                      1096
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                      Codeforces Rating
                    </Typography>
                  </Box>

                  <Divider sx={{ borderColor: 'divider', my: 2 }} />

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<CodeIcon sx={{ fontSize: '14px !important' }} />}
                      label="GNU G++17"
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: '0.7rem' }}
                    />
                    <Chip
                      label="Fast Algorithms"
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: '0.7rem' }}
                    />
                    <Chip
                      label="Data Structures"
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: '0.7rem' }}
                    />
                  </Box>
                </Paper>
              </motion.div>

              {/* GenAI Badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: `${amber[500]}08`,
                    border: '1px solid',
                    borderColor: `${amber[500]}30`,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: `${amber[500]}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <VerifiedIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                      VALIDATION BADGE
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      GenAI Engineering L1
                    </Typography>
                  </Box>
                  <Chip
                    label="Verified"
                    size="small"
                    sx={{
                      ml: 'auto',
                      bgcolor: `${amber[500]}20`,
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.65rem',
                    }}
                  />
                </Paper>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
