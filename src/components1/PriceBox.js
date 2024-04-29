import React from 'react';
import PriceFeatures from './PriceFeatures';

const PriceBox = ({ imageUrl, title, price }) => {
  return (
    <div className="price-box">
      <img src={imageUrl} alt="Package" />
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <PriceFeatures />
      <button>Purchase Now<i class="fa-solid fa-arrow-right"></i></button>
    </div>
  );
}

export default PriceBox;
