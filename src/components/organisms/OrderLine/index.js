import Link from "next/link";
import paths from "core/paths";
import Thumbnail from "components/molecules/Thumbnail";
import TaxedMoney from "components/molecules/TaxedMoney";

import styles from "./OrderLine.module.scss";
import Image from "next/image";

const OrderLine = ({
  variant,
  quantity,
  unitPrice,
  totalPrice,
  productName,
}) => {
  return (
    <tr>
      <td scope="row">
        <div className={styles.content}>
          {variant && (
            <Link href={paths.product.replace("[slug]", variant.product.slug)} className={styles.thumbnail}>
              <div className={styles.image}>
                <Image src={variant.product.thumbnail.url} alt={variant.product.thumbnail.alt} fill />
              </div>
            </Link>
          )}

          <div className={styles.body}>
            {variant ? (
              <>
                <Link
                  href={paths.product.replace("[slug]", variant.product.slug)} className={styles.name}
                >
                  {variant.product.name}
                </Link>

                <p className={styles.sku}>{variant.sku}</p>
                <ul className={styles.variants}>
                  {variant.attributes.map(({ attribute, values }) => (
                    <li key={attribute.id} className={styles.variant}>
                      {attribute.name}:{" "}
                      <span>
                        {values.map((value) => value.name).join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className={styles.name}>{productName}</div>
            )}
          </div>
        </div>
      </td>
      <td>
        <TaxedMoney taxedMoney={unitPrice} gross />
      </td>

      <td>{quantity}</td>

      <td>
        <TaxedMoney taxedMoney={totalPrice} gross />
      </td>
    </tr>
  );
};

export default OrderLine;
