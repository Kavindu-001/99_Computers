import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Card } from "@mui/material";
import "../style/SignIn.css"; // Assuming you have a CSS file for styles
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
    // Handle authentication logic here
  };

  return (
    <div className="signin-container">
    <div className ="auth-card">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h5"> Login with 99 Computers</Typography>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)} className="auth-input"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)} className="auth-input"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        
        <Typography variant="body2" sx={{ mt: 2 }} className="signup-link">
          Don't have an account? <a href="/SignUp">Sign Up</a>
        </Typography>
        <div className="divider">
            <span className="divider-text"> OR</span>
        </div>
        <p className="forgot-password-link">
          <a href="/Forgotpassword">Forgot Password?</a>
        </p>
      </Box>
    </div>
    </div>  
    
  );
};

export default SignIn;
