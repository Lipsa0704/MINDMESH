import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <div>
      <h3>Cart Items</h3>
      {items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;
