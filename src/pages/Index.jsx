import { Typography, Container, Box } from "@mui/material";
import Protected from "../components/utils/Protected";
import Signout from "../components/utils/Signout";

function Index() {
  return (
    <Protected>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h3">
          React and Firebase Authentication 🚀
        </Typography>
        <Box my={1} />
        <Signout />
      </Container>
    </Protected>
  );
}
export default Index;
