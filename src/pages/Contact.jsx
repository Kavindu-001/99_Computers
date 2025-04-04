import React from 'react';
import { 
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  IconButton,
  Link
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={6}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          We'd Love to Hear From You
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Have questions or feedback? Reach out to our friendly team.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Card elevation={3} sx={{ 
            height: '100%',
            borderRadius: 3,
            bgcolor: 'background.paper'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ 
                mb: 3,
                fontWeight: 600,
                color: 'primary.dark'
              }}>
                Contact Information
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                  <Email color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email us at
                    </Typography>
                    <Link 
                      href="mailto:support@99computers.com" 
                      underline="hover"
                      color="text.primary"
                      sx={{ fontWeight: 500 }}
                    >
                      support@99computers.com
                    </Link>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                  <Phone color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Call us at
                    </Typography>
                    <Typography sx={{ fontWeight: 500 }}>
                      +1 (234) 567-890
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="flex-start" sx={{ mb: 2 }}>
                  <LocationOn color="primary" sx={{ mr: 2, fontSize: '2rem', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Visit us at
                    </Typography>
                    <Typography sx={{ fontWeight: 500 }}>
                      123 Tech Street<br />
                      Silicon Valley, CA 94000
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Follow Our Journey
              </Typography>
              <Box>
                <IconButton 
                  aria-label="Facebook" 
                  href="#" 
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'primary.light' }
                  }}
                >
                  <Facebook fontSize="large" />
                </IconButton>
                <IconButton 
                  aria-label="Twitter" 
                  href="#"
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'primary.light' }
                  }}
                >
                  <Twitter fontSize="large" />
                </IconButton>
                <IconButton 
                  aria-label="Instagram" 
                  href="#"
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'primary.light' }
                  }}
                >
                  <Instagram fontSize="large" />
                </IconButton>
                <IconButton 
                  aria-label="LinkedIn" 
                  href="#"
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'primary.light' }
                  }}
                >
                  <LinkedIn fontSize="large" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Card elevation={3} sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ 
                mb: 3,
                fontWeight: 600,
                color: 'primary.dark'
              }}>
                Send Us a Message
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ mb: 3 }}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                          boxShadow: 'none',
                          bgcolor: 'primary.dark'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Information */}
      <Box sx={{ 
        mt: 8,
        textAlign: 'center',
        bgcolor: 'primary.light',
        p: 4,
        borderRadius: 3
      }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          We're Here to Help
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: 'auto' }}>
          At 99 Computers, we're committed to providing exceptional customer service. 
          Whether you have a question about our products or need technical support, 
          our team is ready to assist you.
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 500 }}>
          Thank you for choosing 99 Computers!
        </Typography>
        
        <Box mt={4}>
          <Typography variant="body2" color="text.secondary">
            Typical response time: 1-2 business days
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;