import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      image: "https://picsum.photos/300/200?random=1",
      avgRating: 4.2,
      totalRatings: 10
    },
    {
      id: 2,
      name: "Smartwatch",
      description: "Track your fitness and notifications.",
      image: "https://picsum.photos/300/200?random=2",
      avgRating: 3.8,
      totalRatings: 15
    },
    {
      id: 3,
      name: "Portable Speaker",
      description: "Powerful sound in a compact design.",
      image: "https://picsum.photos/300/200?random=3",
      avgRating: 4.5,
      totalRatings: 8
    }
  ]);

  const handleRatingSubmit = (productId, newRating) =>{
    setProducts(prev=>{
      return prev.map((prod)=>{
        if(productId==prod.id){
          const newAvgRating = (((prod.avgRating * prod.totalRatings) + newRating) / (prod.totalRatings + 1)).toFixed(2);
          return {...prod, avgRating: newAvgRating, totalRatings: prod.totalRatings+1}
        }else{
          return prod;
        }
      })
    })
  }
 

  return (
    <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
     {/* code here */}
      {products.map(prod=>(
        <ProductCard key={prod.id} {...prod} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
}

export default App;
