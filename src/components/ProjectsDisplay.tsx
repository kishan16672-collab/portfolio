import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { amber } from '@mui/material/colors';

interface Project {
  id: number;
  title: string;
  tech: string[];
  bullets: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'New Sport Music Platform',
    tech: ['React', 'Lovable UI', 'CSS Modules'],
    bullets: [
      'Designed a Spotify-inspired web music application utilizing the Lovable platform.',
      'Engineered custom canvas-driven cursor animations and stateful fluid player menus.',
      'Optimized state management across playback queues.',
    ],
  },
  {
    id: 2,
    title: 'Interactive Technology Architecture App',
    tech: ['React via CDN', 'Tailwind CSS', 'JavaScript'],
    bullets: [
      'Architected a fast-loading frontend solution running decoupled through CDN configurations.',
      'Created highly dynamic Technology Cards and micro-components styled with Tailwind utility classes.',
    ],
  },
  {
    id: 3,
    title: 'Physical AI Simulation Framework',
    tech: ['Python', 'Agentic Workflow Patterns', 'C++'],
    bullets: [
      'Engineered algorithmic structural concepts to simulate autonomous robotic actions for human inclusion and agricultural problem-solving.',
      'Created robust Python backend structures implementing agentic workflow decisions.',
      'Tailored for the formal NIAT Conclave 2026.',
    ],
  },
  {
    id: 4,
    title: 'Reusable UI Framework Library',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    bullets: [
      'Developed modular component hierarchies including animated notification banners and dynamic layout controls.',
      'Leveraged Framer Motion orchestration to map native-like 60fps micro-interactions inside modern dark-themed guidelines.',
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        onClick={() => setExpanded((v) => !v)}
        sx={{
          p: { xs: 3, md: 4 },
          height: '100%',
          bgcolor: expanded ? `${amber[500]}06` : 'background.paper',
          border: '1px solid',
          borderColor: expanded ? `${amber[500]}40` : 'divider',
          borderRadius: 3,
          cursor: 'pointer',
          transition: 'all 250ms ease',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            bgcolor: `${amber[500]}06`,
            borderColor: `${amber[500]}40`,
            transform: 'translateY(-3px)',
            boxShadow: `0 12px 40px ${amber[900]}20`,
          },
        }}
      >
        {/* Top accent line */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: expanded
              ? `linear-gradient(90deg, ${amber[500]}, transparent)`
              : 'transparent',
            transition: 'background 250ms ease',
          }}
        />

        {/* Number */}
        <Typography
          variant="overline"
          sx={{
            color: 'text.disabled',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            mb: 2,
            display: 'block',
          }}
        >
          0{project.id}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2.5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.3,
              pr: 2,
              color: expanded ? 'primary.light' : 'text.primary',
              transition: 'color 200ms ease',
            }}
          >
            {project.title}
          </Typography>
          <ArrowOutwardIcon
            sx={{
              color: 'text.disabled',
              fontSize: 18,
              flexShrink: 0,
              mt: 0.25,
              transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 250ms ease',
            }}
          />
        </Box>

        {/* Tech tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: expanded ? 2.5 : 0 }}>
          {project.tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                bgcolor: `${amber[500]}12`,
                color: 'primary.light',
                border: '1px solid',
                borderColor: `${amber[500]}30`,
                fontSize: '0.68rem',
                fontWeight: 500,
                height: 22,
              }}
            />
          ))}
        </Box>

        {/* Expandable details */}
        <Collapse in={expanded}>
          <Box
            sx={{
              borderTop: '1px solid',
              borderColor: 'divider',
              pt: 2.5,
              mt: 0.5,
            }}
          >
            {project.bullets.map((bullet, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 1.5, alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    mt: '8px',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.875rem' }}
                >
                  {bullet}
                </Typography>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Paper>
    </motion.div>
  );
}

export default function ProjectsDisplay() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 } }}>
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
            Work
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
            >
              Selected Projects
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled', display: { xs: 'none', sm: 'block' } }}>
              Click a card to expand
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6 }}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
