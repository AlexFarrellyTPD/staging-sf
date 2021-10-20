import { Fragment } from "react";
import { useDefaultUserAddress } from "@saleor/sdk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faPencil,
  faTimes,
  faTrash,
} from "@fortawesome/pro-regular-svg-icons";
import clsx from "clsx";

import styles from "./AddressTile.module.scss";
import useDisclosure from "hooks/useDisclosure";

const AddressTile = ({ address, onEdit, onRemove }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [setDefaultUserAddress] = useDefaultUserAddress();

  const addressString = formatAddress(address);

  const setDefault = async (type) => {
    await setDefaultUserAddress({ id: address.id, type });
    onClose();
  };

  return (
    <div className={styles.wrap}>
      <span>{`${address.firstName} ${address.lastName}`}</span>

      <address className={styles.address}>
        {addressString.split("\n").map((item, key) => {
          return (
            <Fragment key={key}>
              {item}
              <br />
            </Fragment>
          );
        })}
      </address>

      <div className={styles.actions}>
        <button onClick={onEdit} className="btn btn-sm btn-outline-primary">
          <FontAwesomeIcon icon={faPencil} fixedWidth />
        </button>

        <button onClick={onRemove} className="btn btn-sm btn-outline-danger">
          <FontAwesomeIcon icon={faTrash} fixedWidth />
        </button>
      </div>

      <button
        onClick={onToggle}
        type="button"
        className={clsx("btn btn-sm", styles.actionButton)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faEllipsisV} fixedWidth />
      </button>

      {isOpen && (
        <div className={styles.actionMenu}>
          <ul className={styles.menu}>
            <li>
              {address.isDefaultShippingAddress ? (
                <div className={clsx("btn btn-sm btn-primary", styles.button)}>
                  Default Shipping Address
                </div>
              ) : (
                <button
                  type="button"
                  className={clsx(
                    "btn btn-sm btn-outline-primary",
                    styles.button
                  )}
                  onClick={() => setDefault("SHIPPING")}
                >
                  Set as default shipping address
                </button>
              )}
            </li>
            <li>
              {address.isDefaultBillingAddress ? (
                <div className={clsx("btn btn-sm btn-primary", styles.button)}>
                  Default Billing Address
                </div>
              ) : (
                <button
                  type="button"
                  className={clsx(
                    "btn btn-sm btn-outline-primary",
                    styles.button
                  )}
                  onClick={() => setDefault("BILLING")}
                >
                  Set as default billing address
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddressTile;

const formatAddress = (address) => {
  const result = [
    address.companyName,
    address.streetAddress1,
    address.streetAddress2,
    address.city,
    address.postalCode,
    address.country.country,
  ].filter((item) => item);

  return result.join("\n");
};