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
import { app, db, auth } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// other
import { toast, ToastContainer } from "react-toastify";
import "./app.scss";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const navigate = useNavigate();
  console.log("current user:", auth.currentUser);

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

      // send email
      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        console.log("email sent");
      });

      // save to fire store
      saveInStore(user);
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

  async function saveInStore(data) {
    try {
      const docRef = await addDoc(collection(db, "users"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
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
          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </>
  );
}
export default App;
