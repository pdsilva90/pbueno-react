import React, { useState, useEffect } from 'react'
import CartDetail from '../../components/CartDetail/CartDetail';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function() {
  
  async function getCart() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }
  getCart();
}, [cartItems]);



  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    console.log(updatedCart)
    // const updatedItems = cartItems.map(item => {
    //   if (item.item._id === updatedItems.item._id) {
    //     return updatedItems;
    // } else {
    //   return item;
    // }
  // });
  console.log(cartItems)
    setCartItems([...updatedCart.lineItems]);
    console.log(cartItems)
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <>
    <div className='CartPage-title'>CartPage</div>
    <div>
      {/* <p>Items in Cart: {cartItems.length} </p> */}
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
