import './ItemListItem.css';

export default function ItemListItem({ availableItem, handleAddToOrder }) {
  return (
    <div className="ItemListItem">
      {/* <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div> */}
      <div className="name">{availableItem.name}</div>
      <div className="buy">
        <span>${availableItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(availableItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}