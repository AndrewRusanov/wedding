import { FC } from 'react';
import styles from './FlowersChat.module.css';
import flowersChat from "../../assets/FlowersChat.svg"

const FlowersChat: FC = () => {
  return (
    <div className={styles.container}>
      <img src={flowersChat} className={styles.place} />
      <a
        href="https://t.me/+R97-7slmd5Q3MmRi"
        target="_blank"
        className={styles.link}
      > чат гостей
      </a>
    </div>
  );
};

export default FlowersChat;
