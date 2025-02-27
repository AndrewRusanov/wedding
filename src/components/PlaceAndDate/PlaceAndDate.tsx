import styles from "./PlaceAndDate.module.css";
import placeAndDate from '../../assets/dateAndPlace.svg'

const PlaceAndDate = () => {
  return (
    <div className={styles.container}>
        <img src={placeAndDate} />
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
