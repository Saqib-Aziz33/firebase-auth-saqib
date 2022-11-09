import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      navigate("/home");
    }
  }, []);

  return <div>Login</div>;
}
export default Login;
