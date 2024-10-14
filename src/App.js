import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import MyOrders from './components/MyOrders'; // Import MyOrders component
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    return (
        <Router>
            <div className="App">
                <Header />
                {(window.location.pathname !== '/payment' && window.location.pathname !== '/payment-success' && window.location.pathname !== '/login') && <Sidebar />}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<ProductList addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                        <Route path="/my-orders" element={<MyOrders />} /> {/* Add My Orders route */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
