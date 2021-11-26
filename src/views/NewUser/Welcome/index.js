import Link from "next/link";
import paths from "core/paths";
import useMenuLink from "hooks/useMenuLink";

import styles from "./Welcome.module.scss";

const Welcome = () => {
  const openMenu = useMenuLink();

  return (
    <section className={styles.wrap}>
      <div className="container">
        <h1 className={styles.title}>
          Welcome to <strong>Trade Prices Direct</strong>
        </h1>

        <p className={styles.intro}>
          Welcome to the future of home improvements! You're now registered with
          Trade Prices Direct and can start browsing 1000's of top brands.
        </p>

        <div className={styles.buttons}>
          <Link href={paths.account.dashboard}>
            <a className="btn btn-circle">Manage Account</a>
          </Link>

          <button type="button" onClick={openMenu} className="btn btn-circle">
            Browse Shop
          </button>

          <Link href={paths.wishlists}>
            <a className="btn btn-circle">Start a Wishlist</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
