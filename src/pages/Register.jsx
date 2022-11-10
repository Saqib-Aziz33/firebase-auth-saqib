import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <Box my={4}>
      <Container sx={{ maxWidth: { xs: "800px" } }}>
        <Typography variant="h4">Registration</Typography>

        <Grid container spacing={4} mt={2} component="form" autoComplete="none">
          <Grid item xs={12} md={6}>
            <TextField variant="standard" label="Username" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Email"
              type="email"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Confirm Password"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid item>
            <FormGroup mb={1}>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree with term's and condition's"
              />
            </FormGroup>
            <Button variant="outlined">Register</Button>
            <Typography mt={1} variant="body2">
              Aldeady have an account <Link to="/login">login here</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Register;
