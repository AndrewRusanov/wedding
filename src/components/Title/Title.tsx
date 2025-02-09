import styles from "./Title.module.css";
import titleAE from "../../assets/titleAE1.png";

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name_container}>
        <span className={`${styles.title_andrew} ${styles.title_1}`}>
          Андрей
        </span>
        <span className={`${styles.title_liza} ${styles.title_2}`}>Лиза</span>
        <span className={`${styles.title_andrew} ${styles.title_3}`}>
          Андрей
        </span>
        <span className={`${styles.title_liza} ${styles.title_4} `}>Лиза</span>
        <img src={titleAE} alt="Поцелуй" className={styles.title_logo_AE} />
      </div>
      <div className={styles.greeting}>приглашаем на свадьбу</div>
    </div>
  );
};

export default Title;
