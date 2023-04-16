import { checkToken } from '../../utilities/users-service';
import { useEffect, useState } from 'react';
import OrderDetail from '../../components/CartDetail/CartDetail';
import CartItem from '../../components/CartItem/CartItem';
import * as orderApi from '../../utilities/orders-api';
import * as sendRequest from '../../utilities/send-request';
import * as itemApi from '../../utilities/items-api';


export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

 useEffect( function() {
  async function getOrders() {
    const allOrders = await orderApi.getOrders()
    setOrders(allOrders);
  }
  getOrders();
 }, [])
  return (
    <div className="OrderHistoryPage">
      <h1>Order History</h1>
      {/* {orders.map(order => {
        return <p>{order._id}</p>
      })} */}
      <div className='section-heading'>

      {orders.map(order => (
        <div key={order._id}>
          <p>Order #{order._id}</p>
          <p>Date: {new Date(order.updatedAt).toLocaleDateString()}</p>
          <span className="right">Order Total: ${order.orderTotal.toFixed(2)}</span>
          <hr />
        </div>
      ))}
    </div> 
      </div>
  );
}