import { FC } from 'react';
import styles from './DressCode.module.css';
import dressCode from "../../assets/DressCode.svg"
import chatLink from "../../assets/chatLink.svg"

const DressCode: FC = () => {
  return (
    <div className={styles.clean_container}>
      <img src={dressCode} className={styles.dressCode} />
      <a
        href="https://t.me/+R97-7slmd5Q3MmRi"
        target="_blank"
        className={styles.link}
      >
        <img src={chatLink} className={styles.dressCode} />
      </a>
    </div>
  );
};

export default DressCode;
