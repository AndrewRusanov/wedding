import styles from "./Title.module.css";
import titleAE from "../../assets/titleAE2.png";
import AndrewLiza from '../../assets/andrewLiza.svg'
import Greeting from '../../assets/greeting.svg'

const Title = () => {
  return (
    <div className={styles.wrapper}>
        <img src={AndrewLiza} alt="Поцелуй"  />
        <img src={Greeting} alt="Поцелуй"  className={styles.greeting}/>
        <img src={titleAE} alt="Поцелуй"  className={styles.titleAE}/>
    </div>
  );
};

export default Title;
