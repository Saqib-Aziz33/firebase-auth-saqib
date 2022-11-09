import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      navigate("/home");
    }
  }, []);

  return <div>Register</div>;
}
export default Register;
