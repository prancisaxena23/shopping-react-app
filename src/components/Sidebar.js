import React, { useState } from 'react';
import './Sidebar.css'; // Ensure this file is styled as described below

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? '<<' : '>>'} {/* Toggle icon */}
            </button>
            {isOpen && <h2>Categories</h2>} {/* Conditionally render the heading */}
            {isOpen && (
                <ul>
                    <li><a href="#women">Women</a></li>
                    <li><a href="#men">Men</a></li>
                    <li><a href="#kids">Kids</a></li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
