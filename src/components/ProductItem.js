// import React from 'react';
// import './ProductItem.css';

// const ProductItem = ({ product }) => {
//     return (
//         <div className="product-item">
//             <img src={product.image} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>Rs.{product.price}</p>
//             <button>Add to Cart</button>
//         </div>
//     );
// };

// export default ProductItem;

import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rs.{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
