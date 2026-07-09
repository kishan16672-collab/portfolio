import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { amber } from '@mui/material/colors';

const navItems = [
  { label: 'About', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(15,23,42,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid' : '1px solid transparent',
          borderColor: scrolled ? 'divider' : 'transparent',
          transition: 'all 300ms ease',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, maxWidth: 'lg', mx: 'auto', width: '100%' }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'primary.main',
              flexGrow: 1,
              fontSize: '1rem',
            }}
          >
            KM
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textTransform: 'none',
                  px: 1.5,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="open navigation menu"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: '#0f172a',
            borderLeft: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            aria-label="close navigation menu"
            onClick={() => setMobileOpen(false)}
            sx={{ color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '0.08em', mb: 3 }}
          >
            KISHAN M
          </Typography>
        </Box>

        <List disablePadding>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setMobileOpen(false)}
                sx={{
                  px: 3,
                  py: 1.5,
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main', bgcolor: `${amber[500]}08` },
                  transition: 'all 150ms ease',
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{ primary: { sx: { fontSize: '0.95rem', fontWeight: 500 } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
