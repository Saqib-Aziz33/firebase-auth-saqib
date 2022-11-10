import { useNavigate, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
// layout
import Base from "./components/layouts/Base";
// firebase
// eslint-disable-next-line
import { app } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// other
import { toast, ToastContainer } from "react-toastify";
import "./app.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();

  async function registerUser(user) {
    try {
      // eslint-disable-next-line
      const responce = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      // console.log(responce.user);
      // sessionStorage.setItem("auth", responce._tokenResponse.refreshToken);
      toast.info("registered successfully/ please sign in now");
      navigate("/login");
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function loginUser(user) {
    try {
      const responce = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      sessionStorage.setItem("auth", responce._tokenResponse.refreshToken);
      toast.success("loged in");
      navigate("/");
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <>
      <Base>
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route
            path="/register"
            element={<Register registerUser={registerUser} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </>
  );
}
export default App;
