import React from 'react';
import './MyOrders.css'; // Create a CSS file for styling

const MyOrders = () => {
    // Sample orders data (you can replace this with actual data from your state or API)
    const orders = [
        { id: 1, date: '2024-09-01', items: ['Blue T-Shirt', 'Women Jeans'], total: 2300 },
        { id: 2, date: '2024-09-15', items: ['Red Jacket'], total: 2500 },
        { id: 3, date: '2024-09-20', items: ['Jeans', 'T-Shirt', 'Jacket'], total: 4150 },
    ];

    return (
        <div className="my-orders-container">
            <h2>My Orders</h2>
            {orders.length === 0 ? (
                <p>You have no orders yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.items.join(', ')}</td>
                                <td>${order.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyOrders;
