import { checkToken } from '../../utilities/users-service';
import OrderDetail from '../../components/CartDetail/CartDetail';
import CartItem from '../../components/CartItem/CartItem';
import * as orderApi from '../../utilities/orders-api';
import * as sendRequest from '../../utilities/send-request';


export default function OrderHistoryPage({ order, handleChangeQty, handleCheckout }) {  
  // console.log(order)
  // if (!order) return null;
  return (
    <div className="OrderHistoryPage">
      <h2>Order History</h2>
       {/* {order.map(order => (
        <div key={order._id} className="OrderDetail">
          <div className="section-heading">
            <span>ORDER <span className="smaller">{order.orderId}</span></span>
            <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
          </div>
          <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
            {order.lineItems.map(item => (
              <CartItem
                cartItem={item}
                isPaid={order.isPaid}
                handleChangeQty={handleChangeQty}
                key={item._id}
              />
            ))}
            <section className="total">
              <span className="right">TOTAL&nbsp;&nbsp;</span>
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </div>
        </div> */}
      {/* ))} */}
    </div> 
  );
}