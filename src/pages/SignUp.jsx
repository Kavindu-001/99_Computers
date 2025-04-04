import React, { useState } from 'react';
import { 
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Card,
  Divider,
  Grid,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@mui/material';
import { 
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  ArrowForward,
  Google,
  Facebook
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Registration data:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Account created successfully! Welcome to 99 Computers.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ 
      py: 8,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'center'
    }}>
      <Card elevation={3} sx={{ 
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)'
      }}>
        <Box textAlign="center" mb={4}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              mb: 1
            }}
          >
            Join 99 Computers
          </Typography>
          
          <Typography variant="body1" color="text.secondary">
            Create your account to unlock exclusive features and benefits
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2
              }
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2
              }
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2
              }
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{ 
              mt: 3, 
              mb: 2,
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
            endIcon={isSubmitting ? <CircularProgress size={24} /> : <ArrowForward />}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Box>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" color="text.secondary">OR CONTINUE WITH</Typography>
        </Divider>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{ 
              borderRadius: 2,
              py: 1.5,
              textTransform: 'none',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Facebook />}
            sx={{ 
              borderRadius: 2,
              py: 1.5,
              textTransform: 'none',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Facebook
          </Button>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Link 
            component={RouterLink} 
            to="/signin" 
            underline="hover"
            color="primary.main"
            fontWeight={500}
          >
            Sign In
          </Link>
        </Typography>
      </Card>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;