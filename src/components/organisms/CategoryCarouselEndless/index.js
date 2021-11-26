import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import paths from "core/paths";
import useMenuLink from "hooks/useMenuLink";
import CategoryTile from "components/molecules/CategoryTile";

import styles from "./CategoryCarouselEndless.module.scss";

const CategoryCarouselEndless = ({ categories, viewAllButton = true }) => {
  const openMenu = useMenuLink();

  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const handlePrevious = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const handleNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  return (
    <section className={styles.wrap}>
      <header className={styles.header}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-sm">
              <h6>Browse</h6>
              <h3>Endless Products at Trade Prices</h3>
            </div>

            <div className="col-sm-auto">
              {viewAllButton && (
                <button
                  type="button"
                  onClick={openMenu}
                  className="btn btn-sm btn-circle"
                >
                  View All
                </button>
              )}

              <div className={styles.nav}>
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={handlePrevious}
                >
                  <span className="visually-hidden">Previous</span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={handleNext}
                >
                  <span className="visually-hidden">Next</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div ref={viewportRef} className={styles.carouselWrap}>
          <div className={styles.carousel}>
            {categories?.map(({ id, name, slug, backgroundImage }) => (
              <div key={`category-carousel-${id}`} className={styles.slide}>
                <CategoryTile
                  name={name}
                  href={paths.category.replace("[slug]", slug)}
                  backgroundImage={backgroundImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarouselEndless;
