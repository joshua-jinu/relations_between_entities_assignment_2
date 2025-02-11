import React from 'react'
import RatingWidget from './RatingWidget';

const ProductCard = ({ id, name, image, description, avgRating, totalRatings, onRatingSubmit }) => {
    return (
      <div style={{ border: "1px solid #ddd", padding: "16px", margin: "1rem", borderRadius: "8px", maxWidth: "300px", textAlign: "center", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
        <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Average Rating: {avgRating} ({totalRatings} ratings)</p>
        <RatingWidget productId={id} onRatingSubmit={onRatingSubmit} />
      </div>
    );
  };
  
  export default ProductCard;
