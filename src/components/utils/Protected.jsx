import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogedIn = sessionStorage.getItem("auth");
    if (!isLogedIn) {
      navigate("/login");
    }
  }, []);

  return children;
}
export default Protected;
