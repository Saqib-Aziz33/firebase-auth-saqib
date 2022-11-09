import { Typography, Container } from "@mui/material";
import Protected from "../components/utils/Protected";

function Index() {
  return (
    <Protected>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h3">
          React and Firebase Authentication 🚀
        </Typography>
      </Container>
    </Protected>
  );
}
export default Index;
