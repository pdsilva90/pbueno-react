import React from 'react';

export default function ItemCard({ item }) {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.category}</p>
      <p>Price: ${item.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

