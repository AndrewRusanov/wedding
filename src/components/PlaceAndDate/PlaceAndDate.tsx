import styles from "./PlaceAndDate.module.css";
import leftStar from "../../assets/star_full.svg";
import rightStar from "../../assets/star_empty.svg";
import weAreGladToSeeYou from "../../assets/wearegladtoseeyou.svg";
import place from "../../assets/place.svg";

const PlaceAndDate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <p>13.09.2025</p>
        <img src={leftStar} className={styles.left_star} />
        <img src={rightStar} className={styles.right_star} />
      </div>
      <div className={styles.huba_buba_cont}>
        <img src={weAreGladToSeeYou} />
      </div>
      <div className={styles.place_cont}>
        <img src={place} />
      </div>
      <a
        href="https://yandex.ru/maps/-/CHuVy-~o"
        target="_blank"
        className={styles.link}
      >
        посмотреть на карте
      </a>
    </div>
  );
};

export default PlaceAndDate;
