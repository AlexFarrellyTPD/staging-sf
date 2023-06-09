import { FC, MouseEventHandler, useEffect } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import ClientOnlyPortal from "components/organisms/ClientOnlyPortal";
import { useOverlay } from "contexts/OverlayContext";

import styles from "./Drawer.module.scss";

const variant = {
  hidden: (position) => ({ x: position === "right" ? "100%" : "-100%" }),
  visible: { x: 0 },
};

const Drawer: FC<{
  isOpen?: boolean;
  onClose?: MouseEventHandler<HTMLDivElement>;
  position?: string;
  target?: string;
  children;
}> = ({
  isOpen = true,
  onClose,
  position = "left",
  target = "#overlay-root",
  children,
}) => {
  const overlay = useOverlay();

  // Lock scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // disableBodyScroll(document.querySelector(target));
    } else {
      document.body.style.overflow = "auto";
      // clearAllBodyScrollLocks();
    }
  }, [isOpen]);

  return (
    <ClientOnlyPortal selector={target}>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={clsx(styles.wrap, styles[position])}
              custom={position}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variant}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              tabIndex={-1}
            >
              {children}
            </motion.div>

            <motion.div
              className={styles.overlay}
              onClick={onClose || overlay.hide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
          </>
        )}
      </AnimatePresence>
    </ClientOnlyPortal>
  );
};

export default Drawer;
