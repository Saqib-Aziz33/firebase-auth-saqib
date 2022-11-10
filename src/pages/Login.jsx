import {
  Box,
  Container,
  TextField,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <Box>
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
          <TextField id="email" label="Email" type="email" variant="standard" />

          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
          />

          <Typography variant="body2">
            Not have an account? <Link to="/register">Register here</Link>
          </Typography>

          <Button variant="contained">Login</Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Login;
