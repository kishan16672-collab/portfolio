import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import EducationMetrics from './components/EducationMetrics';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsDisplay from './components/ProjectsDisplay';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <NavBar />
        <HeroSection />
        <EducationMetrics />
        <SkillsMatrix />
        <ProjectsDisplay />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
