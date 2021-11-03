import paths from "core/paths";
import FeaturedTile from "components/molecules/FeaturedTile";

const FeaturedSynergy = () => {
  return (
    <FeaturedTile
      subtitle="Featured Supplier"
      title="Soak in Trade Price Savings"
      image={{
        src: "/images/featured-synergy.jpg",
        width: 1200,
        height: 1118,
      }}
      button={{
        name: "Shop Synergy",
        href: paths.category.replace("[slug]", "bathrooms"),
      }}
    >
      <p>
        Create a powerful statement with a free standing bath, a timeless
        classic that exudes elegance and class at every level. No matter your
        style, create your perfect place to relax, refresh and renew.
      </p>
      <p>
        Trade Prices Direct lets you sink into luxury and find inner bliss
        without getting burnt by high street prices.
      </p>
    </FeaturedTile>
  );
};

FeaturedSynergy.displayName = "Synergy";

export default FeaturedSynergy;