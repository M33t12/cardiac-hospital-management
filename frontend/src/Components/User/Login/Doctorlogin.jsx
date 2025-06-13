import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slices/Loginslice";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";

function LoginForm() {
  const navigate = useNavigate();

  // Simulate automatic login when component mounts
  React.useEffect(() => {
    const autoLogin = async () => {
      try {
        // Mock response data
        const mockResponse = {
          data: {
            token: "mock_token",
            user: {
              is_doctor: true,
              // Add other required user properties
            },
            message: "Auto login successful"
          }
        };

        // Set mock data in localStorage
        localStorage.setItem("jwt", mockResponse.data.token);
        localStorage.setItem("user", JSON.stringify(mockResponse.data.user));
        localStorage.setItem("is_doctor", mockResponse.data.user.is_doctor);

        toast.success("Logged in as doctor");
        navigate("/");
        window.location.reload(true);
      } catch (error) {
        console.error("Auto login failed:", error);
        toast.error("Auto login failed");
      }
    };

    autoLogin();
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <Box>
      <Container
        maxWidth="xs" 
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh"
        }}
      >
        <Typography variant="h4" align="center">
          Logging in as Doctor...
        </Typography>
      </Container>
    </Box>
  );
}

export default LoginForm;
