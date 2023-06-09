import Link from "next/link";
import { useCart, useCheckout } from "@saleor/sdk";
import clsx from "clsx";
import paths from "core/paths";
import TaxedMoney from "components/molecules/TaxedMoney";
import Button from "components/atoms/Button";

import styles from "./CartSummary.module.scss";
import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

const CartSummary = () => {
  const { checkout } = useCheckout();
  const { subtotalPrice, shippingPrice, discount, totalPrice } = useCart();

  const shippingTaxedPrice =
    checkout?.shippingMethod?.id && shippingPrice
      ? { gross: shippingPrice, net: shippingPrice }
      : null;

  const discountTaxedPrice = discount && {
    gross: discount,
    net: discount,
  };

  const isShipping = !!shippingTaxedPrice?.gross;

  const isDiscount =
    !!discountTaxedPrice?.gross && discountTaxedPrice.gross.amount !== 0;

  return (
    <div className={styles.wrap}>
      <table className={clsx("table table-sm table-borderless", styles.table)}>
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>
              <TaxedMoney taxedMoney={subtotalPrice} gross />
            </td>
          </tr>

          {isShipping && (
            <tr>
              <th>Shipping</th>
              <td>
                {shippingTaxedPrice.gross.amount === 0 ? (
                  <span>Free</span>
                ) : (
                  <TaxedMoney taxedMoney={shippingTaxedPrice} gross />
                )}
              </td>
            </tr>
          )}

          {isDiscount && (
            <tr>
              <th>Discount</th>
              <td>
                <TaxedMoney taxedMoney={discountTaxedPrice} gross />
              </td>
            </tr>
          )}

          <tr className={styles.total}>
            <th>Total</th>
            <td>
              <TaxedMoney taxedMoney={totalPrice} gross />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid">
        <Button label="Proceed to Checkout" color="secondary" icon={faArrowRight} path={paths.checkout}/>
      </div>
    </div>
  );
};

export default CartSummary;
