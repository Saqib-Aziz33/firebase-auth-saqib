import {
  Box,
  Container,
  TextField,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
const initialState = { email: "", password: "" };

function Login({ loginUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.email === "") {
      toast.error("some fields are empty");
      return;
    }
    if (formData.password.length <= 5) {
      toast.error("password is not correct");
      return;
    }
    loginUser(formData);
  };

  return (
    <Box my={4}>
      <Container>
        <Stack
          gap={3}
          component="form"
          noValidate
          autoComplete="off"
          maxWidth="400px"
          mx="auto"
        >
          <Typography variant="h4">Login</Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            value={formData.password}
            onChange={handleChange}
          />

          <Typography variant="body2">
            Not have an account? <Link to="/register">Register here</Link>
          </Typography>

          <Button onClick={handleSubmit} variant="contained">
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Login;
