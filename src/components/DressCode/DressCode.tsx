import { FC } from "react";
import dc1 from "../../assets/DC1.png";
import dc2 from "../../assets/DC2.png";
import dc3 from "../../assets/DC3.png";
import dc4 from "../../assets/DC4.png";
import dc5 from "../../assets/DC5.png";
import dc6 from "../../assets/DC6.png";
import dc7 from "../../assets/DC7.png";
import dc8 from "../../assets/DC8.png";
import dressCode from "../../assets/DressCode.svg";
import chatLink from "../../assets/chatLink.svg";
import styles from "./DressCode.module.css";

const DressCode: FC = () => {
  return (
    <div className={styles.clean_container}>
      <img src={dressCode} className={styles.dressCode} />
      <div className={styles.dressCodeContainer}>
        <img src={dc1} className={styles.dressCodeExample} />
        <img src={dc2} className={styles.dressCodeExample} />
        <img src={dc3} className={styles.dressCodeExample} />
        <img src={dc4} className={styles.dressCodeExample} />
        <img src={dc5} className={styles.dressCodeExample} />
        <img src={dc6} className={styles.dressCodeExample} />
        <img src={dc7} className={styles.dressCodeExample} />
        <img src={dc8} className={styles.dressCodeExample} />
      </div>
      <a
        href="https://weddywood.ru/sovety-gostjam-na-svadbe-kak-proiznesti-idealnyj-tost/"
        target="_blank"
        className={styles.link}
      >
        <img src={chatLink} className={styles.dressCode} />
      </a>
    </div>
  );
};

export default DressCode;
