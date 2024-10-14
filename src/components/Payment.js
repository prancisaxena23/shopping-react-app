import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Payment.css'; // Ensure to create this CSS file for styles

const Payment = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment logic here (e.g., API call)
        console.log('Payment submitted');
        
        // Redirect to payment success page after submission
        navigate('/payment-success'); // Navigate to payment success page
    };

    return (
        <div className="payment-container">
            <h2>Payment Page</h2>
            <p>Please complete your payment information below:</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input type="text" id="expiryDate" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" required />
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;
