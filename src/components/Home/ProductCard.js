import React, { useState } from "react";
import axios from "axios";

const ProductCard = () => {
    const [data, setData] = useState([]);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    return(
        <>
            {data.map((item) => {
                return (
                    <div key={item.id} className="productDetail">
                        <img src={item.image} className= "productDetaile-img" alt="Product_Imagen" loading="lazy"></img>
                        <div className="productDetail-body">
                            <h3 className="productDetail-title">{item.title}</h3>
                            <div className="productDetail-footer">
                                <button className="productDetail-button">Go to Detail</button>
                                <p>Time</p>
                            </div>
                        </div>
                    </div>
                    );
            })}; 
        </>       
    );
};

export default ProductCard;