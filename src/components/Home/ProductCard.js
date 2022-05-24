import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setData(response.data);
    });
  });

  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="productDetail">
            <img
              src={item.image}
              className="productDetaile-img"
              alt="Product_Imagen"
              loading="lazy"></img>
            <div className="productDetail-body">
              <h3 className="productDetail-title">{item.title}</h3>
              <div className="productDetail-footer">
                <button className="buttonHeader"> Go to detail</button>
                <p>Time</p>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};

export default ProductCard;
