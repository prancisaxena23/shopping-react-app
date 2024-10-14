import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css'; // Add your CSS file for cart

const Cart = ({ cartItems }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/payment'); // Redirect to the payment page
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <button onClick={handleCheckout}>Checkout</button>
            )}
        </div>
    );
};

export default Cart;
