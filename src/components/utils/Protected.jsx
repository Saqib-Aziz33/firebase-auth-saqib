import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogedIn = sessionStorage.getItem("auth");
    if (!isLogedIn) {
      toast.error("Login required");
      navigate("/login");
    }
  }, [navigate]);

  return children;
}
export default Protected;
