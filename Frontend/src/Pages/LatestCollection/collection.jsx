import React, { useEffect, useState } from 'react';
import axios from '../../Utils/axios';
import './collection.css';
import { useNavigate } from 'react-router-dom';

const LatestCollections = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="latest-container">
      <h2 className="latest-header">
        LATEST <span className="highlight">COLLECTIONS</span>
      </h2>

      <p className="latest-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti
        veniam neque non ex voluptate vitae, repellat veritatis maxime vel
        quam necessitatibus laborum magni maiores quidem placeat? Repellat,
        nihil iure!
      </p>

      <div className="latest-grid">
        {products.slice(0, 5).map((product) => (
          <div
            key={product._id}
            className="product-card"
            onClick={() => navigate('/user/shop')}
          >
            <img src={product.image} alt={product.name} />
            <h3 className="product-name">{product.Productname}</h3>
            <p className="product-price">₹ {product.ProductPrice}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestCollections;
