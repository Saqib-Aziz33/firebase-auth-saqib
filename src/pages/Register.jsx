import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import ContinueWithGoogle from "../components/utils/ContinueWithGoogle";
import { Stack } from "@mui/system";

const initialState = { username: "", email: "", password: "" };

function Register({ registerUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [cpass, setCpass] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    // validations
    if (formData.password.length <= 5) {
      toast.error("password length must greater than 6");
      return;
    }
    if (formData.password !== cpass) {
      setCpass("");
      toast.error("passwords are not same");
      return;
    }
    // pass data
    registerUser(formData);
    // reset form
    setFormData(initialState);
    setCpass("");
  };

  return (
    <Box my={4}>
      <Container sx={{ maxWidth: { xs: "800px" } }}>
        <Typography variant="h4">Registration</Typography>

        <Grid container spacing={4} mt={2} component="form" autoComplete="off">
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Username"
              fullWidth
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Email"
              type="email"
              fullWidth
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Password"
              type="password"
              fullWidth
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Confirm Password"
              type="password"
              fullWidth
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
            />
          </Grid>

          <Grid item>
            <FormGroup mb={1}>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree with term's and condition's"
              />
            </FormGroup>
            <Button variant="outlined" onClick={handleSubmit}>
              Register
            </Button>
            <Typography mt={1} variant="body2">
              Aldeady have an account <Link to="/login">login here</Link>
            </Typography>

            <Stack mt={2} spacing={2}>
              <Divider>OR</Divider>
              <ContinueWithGoogle />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Register;
