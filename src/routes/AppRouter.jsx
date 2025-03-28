import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

const AppRouter = () => {
  return (
    <Router>
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Cart />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
