import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@saleor/sdk";
import FeefoBadge from "components/atoms/FeefoBadge";
import FinanceRibbon from "components/atoms/FinanceRibbon";
import paths from "core/paths";

import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  const { user } = useAuth();

  return (
    <section className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <h6>Get Your Hands On</h6>

          <h1>
            <strong>Kitchens</strong> at Trade Prices
          </h1>

          <p>
            Buy kitchens, bathrooms, boilers, & more at trade prices direct from
            the manufacturer.
          </p>

          <div className={styles.buttons}>
            <Link href={user ? paths.shop : paths.register}>
              <a className="btn btn-secondary">
                {user ? "Shop Now" : "Register & Shop"}
              </a>
            </Link>

            <Link href={paths.requestQuote}>
              <a className="btn btn-outline-white">Request a Quote</a>
            </Link>
          </div>

          <FeefoBadge className={styles.badge} />
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/kitchens-hero.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />

        <FinanceRibbon className={styles.ribbon} />
      </div>
    </section>
  );
};

export default HomeHero;
