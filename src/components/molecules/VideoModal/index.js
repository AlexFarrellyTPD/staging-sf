import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/pro-solid-svg-icons";
import useDisclosure from "hooks/useDisclosure";
import Modal from "components/organisms/Modal";
import Embed from "components/organisms/Embed";

import styles from "./VideoModal.module.scss";

const VideoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button type="button" onClick={onOpen} className={styles.button}>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faPlay} />
        </span>
        How it Works
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" video>
        <Embed>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xcJtL7QggTI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Embed>
      </Modal>
    </>
  );
};

export default VideoModal;
