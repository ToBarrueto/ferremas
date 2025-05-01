import React from "react";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";  
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <AppRouter />
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
