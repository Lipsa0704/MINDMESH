import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ id: 1, name: "Pizza" }));
  };

  return (
    <div>
      <h3>Product</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
