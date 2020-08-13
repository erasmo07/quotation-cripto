import React from 'react';
import PropTypes from 'prop-types';

const Quotation = ({ quotation }) => {
  if (Object.keys(quotation).length === 0) return null;

  return (
    <div className="card red accent-1 center-align">
      <div className="card-content white-text">
        <span className="card-title">El precio es $ {quotation.PRICE} </span>
        <ul>
            <li>El precio mas bajo del dia $ {quotation.LOWDAY}</li>
            <li>El precio mas alto del dia $ {quotation.HIGHDAY}</li>
            <li>Ultima actualizarion {quotation.LASTUPDATE}</li>
        </ul>
      </div>
    </div>
  );
}

Quotation.propTypes = {
  quotation: PropTypes.object.isRequired
}
 
export default Quotation;