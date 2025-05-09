import { FC } from "react";
import flowersChat from "../../assets/FlowersChat.svg";
import bottle from "../../assets/Бутылка и рамка.png";
import furschet from "../../assets/Фуршет и рамка.png";
import styles from "./FlowersChat.module.css";

const FlowersChat: FC = () => {
  return (
    <div className={styles.clean_container}>
      <img src={flowersChat} className={styles.place} />
      <div className={styles.flowersContainer}>
        <img src={bottle} className={styles.flowersExample} />
        <img src={furschet} className={styles.flowersExample} />
      </div>

      <a
        href="https://t.me/+R97-7slmd5Q3MmRi"
        target="_blank"
        className={styles.link}
      >
        чат гостей
      </a>
    </div>
  );
};

export default FlowersChat;
