import BaseLayout from "layouts/Base";
import HeaderBanner from "layouts/components/HeaderBanner";
import Header from "layouts/components/Header";
import Subfooter from "layouts/components/Subfooter";
import Footer from "layouts/components/Footer";
import CartSidebar from "layouts/components/CartSidebar";
import MenuSidebar from "layouts/components/MenuSidebar";

const AppLayout = ({ categoryTree, footerMenus, children }) => {
  return (
    <BaseLayout>
      <HeaderBanner />
      <Header />

      <main id="main">{children}</main>

      <Subfooter />
      <Footer menus={footerMenus} />

      <CartSidebar />
      <MenuSidebar categoryTree={categoryTree} />
    </BaseLayout>
  );
};

export default AppLayout;
