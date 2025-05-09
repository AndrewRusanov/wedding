import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { FC, useEffect, useState } from "react";
import end from "../../assets/end.svg";
import weLeft from "../../assets/мы слева.png";
import weRight from "../../assets/мы справа.png";
import styles from "./End.module.css";

dayjs.extend(duration);

// Функция для склонения слов
const pluralize = (count: number, words: [string, string, string]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
  ];
};

const End: FC = () => {
  const targetTime = dayjs("2025-09-13T07:30:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCountDownFinished, setIsCountDownFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();
      const diff = targetTime.diff(now);

      if (diff <= 0) {
        setIsCountDownFinished(true);
        clearInterval(timer);
        return;
      }

      const durationObj = dayjs.duration(diff);

      setTimeLeft({
        days: Math.floor(durationObj.asDays()),
        hours: durationObj.hours(),
        minutes: durationObj.minutes(),
        seconds: durationObj.seconds(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className={styles.clean_container}>
      <img src={end} />
      <div className={styles.flowersContainer}>
        <img src={weLeft} className={styles.flowersExample} />
        <img src={weRight} className={styles.flowersExample} />
      </div>
      {!isCountDownFinished && (
        <div className={styles.time}>
          <h5 className={styles.time_title}>до свадьбы</h5>
          <div className={styles.time_container}>
            <div className={styles.time_item}>
              <span>{timeLeft.days.toString().padStart(2, "0")}</span>
              <span>{pluralize(timeLeft.days, ["день", "дня", "дней"])}</span>
            </div>
            <div className={styles.time_item}>
              <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
              <span>{pluralize(timeLeft.hours, ["час", "часа", "часов"])}</span>
            </div>
            <div className={styles.time_item}>
              <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
              <span>
                {pluralize(timeLeft.minutes, ["минута", "минуты", "минут"])}
              </span>
            </div>
            <div className={styles.time_item}>
              <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
              <span>
                {pluralize(timeLeft.seconds, ["секунда", "секунды", "секунд"])}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default End;
