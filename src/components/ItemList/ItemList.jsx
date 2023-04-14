import './MenuList.css';
import ItemListItem from '../ItemListItem/ItemListItem';

export default function ItemList({ availableItems, handleAddToOrder }) {
  const items = availableItems.map(item =>
    <ItemListItem
      key={item._id}
      availableItems={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="ItemList">
      {items}
    </main>
  );
}