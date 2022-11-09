import {
  Box,
  Container,
  TextField,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      navigate("/home");
    }
  }, []);

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

          <Button variant="contained">Login</Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Login;
