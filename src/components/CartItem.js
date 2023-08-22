import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import {
  decreaseProducts,
  increaseProducts,
  removeItem,
} from "../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={item.img} alt={item.title} />

      <div>
        <h4>{item.title}</h4>
        <h4 className="item-price">${item.price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem(item.id))}
        >
          remove
        </button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseProducts(item.id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{item.amount}</p>

        <button
          className="amount-btn"
          onClick={() => {
            item.amount === 1
              ? dispatch(removeItem(item.id))
              : dispatch(decreaseProducts(item.id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
