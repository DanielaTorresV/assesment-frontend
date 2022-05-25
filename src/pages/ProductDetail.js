import { useParams } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderDetail from '../components/ProductDetail/HeaderDetail';

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);
  let rating = data.rating;
  return (
    <>
      <HeaderDetail />
      <div className="productDetail-page">
        <h1>Product: {data.title}</h1>
        <p>
          <spam className="subtitle">Price: </spam>${data.price}
        </p>
        <p>
          <spam className="subtitle">Description: </spam>
          {data.description}
        </p>
        <p>
          <spam className="subtitle">Category: </spam>
          {data.category}
        </p>
        <div className="productDetail-pageContainer2">
          <img
            src={data.image}
            className="productDetail-pageImg"
            alt="Product_Imagen"
            loading="lazy"></img>
          {rating ? (
            <div>
              <p>
                <spam className="subtitle">Rate: </spam>
                {rating.rate}
              </p>
              <p>
                <spam className="subtitle">Count: </spam>
                {rating.count}
              </p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
