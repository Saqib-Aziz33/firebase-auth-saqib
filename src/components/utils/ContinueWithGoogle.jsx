import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ContinueWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://firebase-auth-saqib.netlify.app/login');
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        sessionStorage.setItem("auth", credential.accessToken);

        toast.success("signed in with google🙃");
        navigate("/");
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Button
      sx={{ border: "1px solid #e3e3e3", color: "#3d3d3d" }}
      startIcon={<FcGoogle />}
      onClick={handleClick}
    >
      Continue with Google
    </Button>
  );
}
export default ContinueWithGoogle;
