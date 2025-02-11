import { useState } from "react";
import { Star } from "lucide-react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleHover = (value) => {
    setHoveredRating(value);
  };

  const handleSubmit = () => {
    onRatingSubmit(productId, rating);
    setRating(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            style={{
              width: "32px",
              height: "32px",
              cursor: "pointer",
              transition: "color 0.2s",
              color: value <= (hoveredRating || rating) ? "#FFD700" : "#CCCCCC",
            }}
            onClick={() => handleRating(value)}
            onMouseEnter={() => handleHover(value)}
            onMouseLeave={() => setHoveredRating(0)}
            fill={value <= (hoveredRating || rating) ? "currentColor" : "none"}
          />
        ))}
      </div>
      <button
        style={{
          padding: "10px 16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onClick={handleSubmit}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;