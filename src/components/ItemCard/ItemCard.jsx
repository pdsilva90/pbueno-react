import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as itemsApi from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function ItemCard({ item, handleAddToCart }) {

  return (
    <div>
      {/* <img src={item.image} alt={item.name} /> */}
      <p>Name: {item.name}</p>
      {/* <p>Category: {item.category.name}</p> */}
      <p>Price: ${item.price}</p>
      <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </div>
  );
};

