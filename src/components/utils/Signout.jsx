import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Signout() {
  const navigate = useNavigate();

  function signout() {
    signOut(auth)
      .then((res) => {
        sessionStorage.removeItem("auth");
        toast.success("sign out successfully");
        navigate("/login");
      })
      .catch((e) => toast.error("error while sign out"));
  }
  return (
    <Button variant="contained" onClick={signout}>
      Sign out
    </Button>
  );
}
export default Signout;
