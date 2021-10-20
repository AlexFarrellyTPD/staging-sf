import { useCart } from "@saleor/sdk";
import Loader from "components/atoms/Loader";
import CartItem from "components/molecules/CartItem";

import styles from "./CartItems.module.scss";

const CartItems = () => {
  const { loaded, items, removeItem, updateItem } = useCart();

  if (!loaded) return <Loader />;

  if (!items?.length) {
    return (
      <div className="alert alert-primary" role="alert">
        No products in the basket.
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {items.map(({ id, variant, quantity, totalPrice }) => (
        <li key={id}>
          <CartItem
            variant={variant}
            quantity={quantity}
            totalPrice={totalPrice}
            onRemove={() => removeItem(variant.id)}
            onUpdate={(quantity) => updateItem(variant.id, quantity)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CartItems;