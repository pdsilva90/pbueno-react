import './CartItem.css';

export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
  return (
    <div className="CartItem">
      {/* <div className="flex-ctr-ctr">{lineItem.item.emoji}</div> */}
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{cartItem.item.name}</span>
        <span>{cartItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty - 1)}
          >−</button>
        }
        <span>{cartItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${cartItem.extPrice.toFixed(2)}</div>
    </div>
  );
}