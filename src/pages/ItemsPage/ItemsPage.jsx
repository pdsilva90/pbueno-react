import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as itemsApi from '../../utilities/items-api';
import ItemCard from '../../components/ItemCard/ItemCard';
import ItemListItem from '../../components/ItemListItem/ItemListItem';
import * as ordersAPI from '../../utilities/orders-api';
import sendRequest from '../../utilities/send-request';
import CategoryList from '../../components/CategoryList/CategoryList';



export default function ItemsPage({ item, handleAddToCart }) {
    
    const [items, setItems] = useState([]);
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState(null);

    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);
    const navigate = useNavigate();
//not sure if above is needed
    useEffect(function() {
        async function getInfo() {
            const items = await itemsApi.getAll();
            const user = await userService.getUser()
            // categoriesRef.current = [...new Set(items.map(item => item.category.name))];
            console.log(items)
             setUser(user)
             setItems(items) 
             setActiveCat(categoriesRef.current[0]);
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
        <div className='items-page-container'>
          <h1 className='items-page-title'>All Items</h1>
          <h3>Rubbed, Smoked, Handcrafted</h3>
          <aside>
          <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          />
          </aside>
          <div className='item-card-name'>
            {items.map((item) => (
              <div key={item._id} className="item-card-item">
                <ItemCard item={item} handleAddToCart={handleAddToCart} />
                {isAdmin && (
                  <div className='item-card-update'>
                    <Link to={`/edit/${item._id}`}>
                    <button className='edit-btn'>Edit</button>
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