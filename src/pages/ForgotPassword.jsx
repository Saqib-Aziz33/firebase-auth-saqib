import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        navigate("/login");
        toast.info("Please check your eamil and login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Box sx={{ maxWidth: "400px", mx: "auto", my: 4 }}>
      <TextField
        type="email"
        fullWidth
        label="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleClick} variant="contained" sx={{ mt: 2 }}>
        Next
      </Button>
      <Link to="/login">
        <Button sx={{ mt: 2, ml: 2 }}>Back</Button>
      </Link>
    </Box>
  );
}
export default ForgotPassword;
