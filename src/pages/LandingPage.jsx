import React from 'react';
import Header from '../components/Header';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  RocketLaunch,
  Shield,
  BarChart,
  People,
  Email,
  Phone,
  LocationOn,
  ArrowForward
} from '@mui/icons-material';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <RocketLaunch fontSize="large" color="primary" />,
      title: "Fast Performance",
      description: "Experience lightning-fast service with our optimized platform"
    },
    {
      icon: <Shield fontSize="large" color="primary" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: <BarChart fontSize="large" color="primary" />,
      title: "Advanced Analytics",
      description: "Get actionable insights with our powerful analytics tools"
    },
    {
      icon: <People fontSize="large" color="primary" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time"
    }
  ];

  return (
    <Box sx={{ 
      backgroundColor: 'background.default',
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
      color: theme.palette.text.primary
    }}>
     
      
      {/* Hero Section */}
      <Box sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          zIndex: 1
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant={isMobile ? 'h3' : 'h2'} 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              letterSpacing: '-0.5px',
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Transform Your Business With Our Solution
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Discover the perfect tool to streamline your workflow and boost productivity
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              endIcon={<ArrowForward />}
              sx={{ 
                px: 5,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="inherit"
              size="large"
              sx={{ 
                px: 5,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                borderWidth: '2px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderWidth: '2px'
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          sx={{ 
            fontWeight: 700, 
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: theme.palette.primary.main,
              margin: '16px auto 0',
              borderRadius: '2px'
            }
          }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                height: '100%',
                p: 4,
                textAlign: 'center',
                borderRadius: '16px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                  borderColor: theme.palette.primary.light
                }
              }}>
                <Box sx={{ 
                  mb: 3,
                  display: 'inline-flex',
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: theme.palette.primary.light + '20',
                  color: theme.palette.primary.main
                }}>
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    color: theme.palette.text.primary
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ fontSize: '1rem' }}
                >
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        backgroundColor: theme.palette.grey[50],
        py: { xs: 8, md: 10 },
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3,
              letterSpacing: '-0.5px'
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              color: theme.palette.text.secondary
            }}
          >
            Join thousands of satisfied customers today
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            endIcon={<ArrowForward />}
            sx={{ 
              px: 6,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: '0 4px 14px ' + theme.palette.primary.main + '40',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px ' + theme.palette.primary.main + '60'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Sign Up For Free
          </Button>
        </Container>
      </Box>

     
    </Box>
  );
};

export default LandingPage;