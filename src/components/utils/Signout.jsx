import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signout() {
  const navigate = useNavigate();
  function signout() {
    sessionStorage.removeItem("auth");
    toast.success("sign out successfully");
    navigate("/login");
  }
  return (
    <Button variant="contained" onClick={signout}>
      Sign out
    </Button>
  );
}
export default Signout;
