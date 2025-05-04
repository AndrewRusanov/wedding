import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Timing.module.css";

// Импорты изображений
import step7 from "../../assets/00_00.svg";
import step1 from "../../assets/15_30.svg";
import step2 from "../../assets/16_30.svg";
import step3 from "../../assets/17_00.svg";
import step4 from "../../assets/18_00.svg";
import step5 from "../../assets/21_50.svg";
import step6 from "../../assets/22_00.svg";

const STEP_IMAGES = [step1, step2, step3, step4, step5, step6, step7];

// Конфигурация триггеров прокрутки для каждого шага
const SCROLL_TRIGGERS = [
  1590 - 844, // step1
  1807 - 844, // step2
  2034 - 844, // step3
  2264 - 844, // step4
  2500 - 844, // step5
  2706 - 844, // step6
  2938 - 844, // step7
];

const Timing: FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    Array(7).fill(false)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef<boolean[]>(Array(7).fill(false));

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const newVisibility = [...visibleSteps];
    let needsUpdate = false;

    SCROLL_TRIGGERS.forEach((trigger, index) => {
      if (scrollY >= trigger && !animationTriggered.current[index]) {
        newVisibility[index] = true;
        animationTriggered.current[index] = true;
        needsUpdate = true;
      }
    });

    if (needsUpdate) {
      setVisibleSteps(newVisibility);
    }
  }, [visibleSteps]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.clean_container} ref={containerRef}>
      <div className={styles.background}>
        {STEP_IMAGES.map((step, index) => (
          <div
            key={index}
            className={`${styles.step} ${styles[`step${index + 1}`]} ${
              visibleSteps[index] ? styles.visible : ""
            }`}
          >
            <img src={step} alt={`Шаг ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timing;
