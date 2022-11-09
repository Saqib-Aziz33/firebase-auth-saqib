import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// layout
import Base from "./components/layouts/Base";
// other
import "./app.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
export default App;
