import React from "react";
import { CartProvider } from "./context/CartContext"; // Importamos el proveedor
import AppRouter from "./routes/AppRouter";  // El componente que maneja las rutas
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <AppRouter />
      {/* Proveemos el contexto en toda la app */}
    </CartProvider>
  );
}

export default App;
