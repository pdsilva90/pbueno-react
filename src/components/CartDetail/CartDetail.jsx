import './CartDetail.css';
// import { useHistory } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import * as itemsApi from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import * as cartPage from '../../pages/Cart/CartPage';

// Used to display the details of any order, including the cart (unpaid order)
export default function CartDetail({ order, handleChangeQty, handleCheckout }) {
  // const history = useHistory();
  if (!order) return null;

  const lineItems = order.lineItems.map(item =>
    <CartItem
      cartItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className="OrderDetail">
      {/* {lineItems} */}
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className=""></div>
        }
      </div>
    </div>
  );
}