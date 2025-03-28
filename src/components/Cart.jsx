import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.nombre}</strong> - ${item.precio} x {item.quantity}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total: ${getTotalPrice()}</h4>
            <button className="btn btn-warning" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
