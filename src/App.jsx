import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// layout
import Base from "./components/layouts/Base";
// other
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
export default App;
