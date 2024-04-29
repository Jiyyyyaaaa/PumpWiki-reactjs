import React from 'react';

const PriceFeatures = () => {
  return (
    <ul>
      <li>
        <i className="fa-solid fa-circle-check" style={{ color: '#2fda99' }}></i>
        <span className="price">5 Days In A Week</span>
      </li>
      <li>
        <i className="fa-solid fa-circle-check" style={{ color: '#2fda99' }}></i>
        <span className="price">01 Sweatshirt</span>
      </li>
      <li className="fade_head">
        <i className="fa-solid fa-circle-check" style={{ color: '#8bceb4' }}></i>
        <span className="price">01 Bottle of Protein</span>
      </li>
      <li className="fade_head">
        <i className="fa-solid fa-circle-check" style={{ color: '#8bceb4' }}></i>
        <span className="price">Access To Videos</span>
      </li>
      <li className="fade_head">
        <i className="fa-solid fa-circle-check" style={{ color: '#8bceb4' }}></i>
        <span className="price">Muscle Stretching</span>
      </li>
    </ul>
  );
};

export default PriceFeatures;
