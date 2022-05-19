import React, { useContext } from 'react';
import { DataContext } from '../../store/DataContext';
import { Link } from 'react-router-dom';

const ButtonDetail = () => {
  const getData = useContext(DataContext);
  return (
    <Link to="/detail">
      <button
        className="productDetail-button"
        onClick={getData.handleGetApi}>
        Go to Detail
      </button>
    </Link>
  );
};

export default ButtonDetail;
