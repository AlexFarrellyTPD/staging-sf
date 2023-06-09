import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "components/organisms/Box";

import styles from "./AccountWidget.module.scss";

const AccountWidget = ({ icon, title, body, headerLink }) => {
  return (
    <Box className={styles.box}>
      <section className={styles.box}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <FontAwesomeIcon
              color="#2658e9"
              icon={icon}
              fixedWidth
              size="sm"
              className="me-2"
            />
            {title}
          </h2>
          {headerLink}
        </header>

        <div className={styles.body}>{body}</div>
      </section>
    </Box>
  );
};

export default AccountWidget;
