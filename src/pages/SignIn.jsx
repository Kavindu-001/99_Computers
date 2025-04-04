import React, { useState } from 'react';
import { 
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Card,
  Divider
} from '@mui/material';
import { 
  Person,
  Email,
  Lock,
  ArrowForward,
  Google,
  Facebook
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Add registration logic here
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 700 }}>
          Create Your Account
        </Typography>
        
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Join 99 Computers today to access premium features
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <Person sx={{ color: 'action.active', mr: 1 }} />
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
              startAdornment: <Email sx={{ color: 'action.active', mr: 1 }} />
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: <Lock sx={{ color: 'action.active', mr: 1 }} />
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
            endIcon={<ArrowForward />}
          >
            Create Account
          </Button>
        </Box>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2">OR</Typography>
        </Divider>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{ textTransform: 'none' }}
          >
            Sign up with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Facebook />}
            sx={{ textTransform: 'none' }}
          >
            Sign up with Facebook
          </Button>
        </Box>

        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <Link component={RouterLink} to="/signin" underline="hover">
            Sign In
          </Link>
        </Typography>
      </Card>
    </Container>
  );
};

export default SignIn;