import HeaderDetail from "../components/ProductDetail/HeaderDetail";
import React, { useContext } from "react";
import { DataContext } from "../store/DataContext";

const ProductDetail = () => {
    const showData = useContext(DataContext);
    return (
        <div>
            <HeaderDetail className="headerDetail"/>
            <div className="page-productDetail">
                {showData.data.map((item) => {
                return <div key={item.id}>{item.title}</div>
                })}
            </div>
        </div>
    );
};

export default ProductDetail;