import React from 'react';
import ProductItem from './ProductItem';
import jeansImage from '../assets/jeans.jpg'; // Import the jeans image
import tshirtImage from '../assets/tshirt.jpg';
import jacketImage from '../assets/Jacket.jpg';

const ProductList = ({ addToCart }) => {
    const products = [
        { id: 1, name: 'Blue T-Shirt', price: 800, image: tshirtImage },
        { id: 2, name: 'Women Jeans', price: 1150, image: jeansImage },
        { id: 3, name: 'Red Jacket', price: 2500, image: jacketImage },
        { id: 4, name: 'T-Shirt', price: 800, image: tshirtImage },
        { id: 5, name: 'Jeans', price: 1150, image: jeansImage },
        { id: 6, name: 'Jacket', price: 2500, image: jacketImage },
        { id: 7, name: 'T-Shirt', price: 800, image: tshirtImage },
        { id: 8, name: 'Jeans', price: 1150, image: jeansImage },
        { id: 9, name: 'Jacket', price: 2500, image: jacketImage },
        { id: 10, name: 'T-Shirt', price: 800, image: tshirtImage },
        { id: 11, name: 'Jeans', price: 1150, image: jeansImage },
        { id: 12, name: 'Jacket', price: 2500, image: jacketImage },
        { id: 13, name: 'Blue T-Shirt', price: 800, image: tshirtImage },
        { id: 14, name: 'Women Jeans', price: 1150, image: jeansImage },
        { id: 15, name: 'Red Jacket', price: 2500, image: jacketImage },
        { id: 16, name: 'T-Shirt', price: 800, image: tshirtImage },
        { id: 17, name: 'Jeans', price: 1150, image: jeansImage },
        { id: 18, name: 'Jacket', price: 2500, image: jacketImage },
        { id: 19, name: 'T-Shirt', price: 800, image: tshirtImage },
        { id: 20, name: 'Jeans', price: 1150, image: jeansImage },
        { id: 21, name: 'Jacket', price: 2500, image: jacketImage },
        { id: 22, name: 'T-Shirt', price: 800, image: tshirtImage },
        { id: 23, name: 'Jeans', price: 1150, image: jeansImage },
        { id: 24, name: 'Jacket', price: 2500, image: jacketImage },
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
