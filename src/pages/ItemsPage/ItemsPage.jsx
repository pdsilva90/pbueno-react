import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as itemsApi from '../../utilities/items-api';
import ItemCard from '../../components/ItemCard/ItemCard';
import ItemListItem from '../../components/ItemListItem/ItemListItem';
import * as ordersAPI from '../../utilities/orders-api';
import sendRequest from '../../utilities/send-request';



export default function ItemsPage({ item, handleAddToCart }) {
    
    const [items, setItems] = useState([]);
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState(null);
//not sure if above is needed
    useEffect(function() {
        async function getInfo() {
            const items = await itemsApi.getAll();
            const user = await userService.getUser()
            console.log(items)
             setUser(user)
             setItems(items) 
             setIsAdmin(user?.isAdmin || false);
        }
        getInfo();
      
      async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    }, []);

    //event handlers
      async function handleAddToCart(item) {
        setCartItems([...cartItems, item]);
        const updatedCart = await ordersAPI.addItemToCart(item._id);
        setCart(updatedCart);
        console.log(updatedCart)
      }

      async function handleDelete(itemId) {
        const deletedItem = await sendRequest(`/api/items/${itemId}`,'DELETE');
        const updatedItems = items.filter(item => item._id !== deletedItem._id);
        setItems(updatedItems);
      }


  return (
        <div>
          <h1>All Items</h1>
          <div>
            {items.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} handleAddToCart={handleAddToCart} />
                {isAdmin && (
                  <div>
                    <Link to={`/edit/${item._id}`}>
                    <button>Edit</button>
                    </Link>

                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };  