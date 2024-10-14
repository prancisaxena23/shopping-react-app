import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccess.css'; // Create a CSS file for styling

const PaymentSuccess = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/'); // Redirect to home page
    };

    return (
        <div className="payment-success-container">
            <h2>Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            <div className="tick-mark">✔️</div>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
    );
};

export default PaymentSuccess;
