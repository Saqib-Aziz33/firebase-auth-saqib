// componenets
import { Box, Button, Container } from "@mui/material";
import Protected from "../components/utils/Protected";

function Home() {
  return (
    <Protected>
      <Box>
        <h1>Home</h1>
        <Button variant="contained">Welcome to mui</Button>
      </Box>
    </Protected>
  );
}
export default Home;
