import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import { amber } from '@mui/material/colors';

interface SkillCategory {
  label: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend Web',
    skills: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'CDN Integration'],
  },
  {
    label: 'Backend & Core',
    skills: ['Python', 'FastAPI', 'C++', 'DBMS (SQL)', 'RESTful APIs', 'System Workflows'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Lovable Platform', 'Vercel', 'Netlify'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
};

export default function SkillsMatrix() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
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
            Expertise
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 8, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
          >
            Technical Skills
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1, ease: 'easeOut' }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' },
                  gap: { xs: 2, sm: 4 },
                  alignItems: 'start',
                }}
              >
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {category.label}
                  </Typography>
                  <Box
                    sx={{
                      width: 24,
                      height: 2,
                      bgcolor: 'primary.main',
                      mt: 0.75,
                      borderRadius: 1,
                    }}
                  />
                </Box>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <motion.div key={skill} variants={chipVariants}>
                        <Chip
                          label={skill}
                          sx={{
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            border: '1px solid',
                            borderColor: 'divider',
                            fontWeight: 500,
                            fontSize: '0.8rem',
                            px: 0.5,
                            '&:hover': {
                              bgcolor: `${amber[500]}12`,
                              borderColor: `${amber[500]}50`,
                              color: 'primary.light',
                            },
                            transition: 'all 200ms ease',
                            cursor: 'default',
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Box>

              {catIdx < skillCategories.length - 1 && (
                <Box
                  sx={{
                    height: '1px',
                    bgcolor: 'divider',
                    mt: 6,
                  }}
                />
              )}
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
