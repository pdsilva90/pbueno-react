import React, { useState, useEffect } from 'react'
import CartDetail from '../../components/CartDetail/CartDetail';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function() {
    // async function getInfo() {
    //     const items = await itemsApi.getAll();
    //     const user = await userService.getUser()
    //     console.log(items)
    //      setUser(user)
    //      setItems(items) 
    //      setIsAdmin(user?.isAdmin || false);
    // }
    // getInfo();
  
  async function getCart() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }
  getCart();
}, []);


  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCartItems(updatedCart.items);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <>
    <div className='CartPage'>CartPage</div>
    <div>
      <p>Items in Cart: {cartItems.length} </p>
    </div>
    <CartDetail
    cartItems={cartItems}
    handleChangeQty={handleChangeQty}
    handleCheckout={handleCheckout}
    order={cart}
    />
    </>
  )
}
