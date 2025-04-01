import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container-custom2 d-flex flex-column align-items-center text-center">
  <h2 className="text-center mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-center">No tienes productos en el carrito.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-striped table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        style={{ width: "100px", height: "100px", borderRadius: "16px" }}
                      />
                    </td>
                    <td>{item.nombre}</td>
                    <td>${item.precio}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.precio * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${getTotalPrice()}</h4>
            </div>
            <div className='mt-2'>
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