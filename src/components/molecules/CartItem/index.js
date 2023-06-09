import { useEffect, useState } from "react";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "core/constants";
import paths from "core/paths";
import TaxedMoney from "components/molecules/TaxedMoney";
import Thumbnail from "components/molecules/Thumbnail";
import AddToWishlist from "components/molecules/AddToWishlist";

import styles from "./CartItem.module.scss";

const CartItem = ({
  variant,
  quantity,
  totalPrice,
  onRemove,
  onUpdate,
  isCheckout,
}) => {
  const [value, setValue] = useState(quantity);

  const debounced = useDebouncedCallback(onUpdate, 300);

  useEffect(() => {
    if (value !== quantity) debounced(value);
  }, [value]);

  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
        <Thumbnail thumbnail={variant.product.thumbnail} />
      </div>

      <div className={styles.content}>
        {isCheckout ? (
          <span className={styles.name}>{variant.product.name}</span>
        ) : (
          <Link href={paths.product.replace("[slug]", variant.product.slug)} className={styles.name}>
            {variant.product.name} {variant.attributes.map(({ attribute, values }) => (
            <span key={attribute.id} className={styles.variant}>
            {" "}  - {attribute.name}{" "}
              <span>{values.map((value) => value.name).join(", ")}</span>
            </span>
          ))}
          </Link>
        )}


        <div className={styles.footer}>
          <div className={styles.pricing}>
            <div className={styles.subtotalPrice}>
              <TaxedMoney taxedMoney={totalPrice} gross />
            </div>

            {quantity > 1 && (
              <div className={styles.unitPrice}>
                <TaxedMoney
                  taxedMoney={variant.pricing.price}
                  gross
                  suffix="per item"
                />
              </div>
            )}
          </div>

          {!isCheckout && (
            <div className={styles.buttons}>
              <button
                onClick={onRemove}
                type="button"
                className="btn btn-sm text-danger"
              >
                <FontAwesomeIcon icon={icons.faTrash} />
                <span className="visually-hidden">Remove this item</span>
              </button>
              <AddToWishlist
                name={variant.product.name}
                variant={variant}
                product={variant.product}
                className="btn btn-sm text-primary me-2"
              />
            </div>
          )}
        </div>
      </div>

      {isCheckout ? (
        <div className={styles.quantitySelector}>
          <div className={styles.quantity}>
            {value.toString().padStart(2, "0")}
          </div>
        </div>
      ) : (
        <div className={styles.quantitySelector}>
          <button
            type="button"
            onClick={() => setValue((prevValue) => Math.max(prevValue - 1, 1))}
            className={styles.minus}
          >
            <FontAwesomeIcon icon={icons.faMinus} />
          </button>

          <div className={styles.quantity}>
            {value.toString().padStart(2, "0")}
          </div>

          <button
            type="button"
            onClick={() => setValue((prevValue) => prevValue + 1)}
            className={styles.plus}
          >
            <FontAwesomeIcon icon={icons.faPlus} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
