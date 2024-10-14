import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <div className="header">
            <h1>Fashion Hub</h1>
            {location.pathname !== '/login' && location.pathname !== '/payment' && location.pathname !== '/payment-success' && (
                <nav>
                    <ul> 
                      <li><Link to="/">Home</Link></li> 
                      <li><Link to="/cart">Cart</Link> </li>
                      <li><Link to="/my-orders">My Orders</Link> {/* Add My Orders link */}</li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Header;
