import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase";

function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogedIn = auth.currentUser;
    if (!isLogedIn) {
      toast.error("Login required");
      navigate("/login");
    }
  }, [navigate]);

  return children;
}
export default Protected;
