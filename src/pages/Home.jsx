// componenets
import { Container } from "@mui/material";
import Protected from "../components/utils/Protected";
import Signout from "../components/utils/Signout";

function Home() {
  return (
    <Protected>
      <Container>
        <h1>Home</h1>
        <Signout />
      </Container>
    </Protected>
  );
}
export default Home;
