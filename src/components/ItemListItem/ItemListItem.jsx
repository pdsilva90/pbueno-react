import './ItemListItem.css';

export default function ItemListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="ItemListItem">
      {/* <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div> */}
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}