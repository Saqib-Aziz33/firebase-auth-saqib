import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box p={2} component="footer">
      <Typography sx={{ textAlign: "center" }}>
        &copy; react firebase auth 2022
      </Typography>
    </Box>
  );
}
export default Footer;
