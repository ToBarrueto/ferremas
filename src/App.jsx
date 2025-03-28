import React from "react";
import { CartProvider } from "./context/CartContext";
import AppRouter from "./routes/AppRouter";  
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
