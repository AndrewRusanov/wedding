import { FC, useEffect, useState, useRef } from 'react';
import styles from './Timing.module.css';
import step1 from '../../assets/15_30.svg';
import step2 from '../../assets/16_30.svg';
import step3 from '../../assets/17_00.svg';
import step4 from '../../assets/18_00.svg';
import step5 from '../../assets/21_50.svg';
import step6 from '../../assets/22_00.svg';
import step7 from '../../assets/00_00.svg';

const Timing: FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(Array(7).fill(false));
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]); // Массив рефов

  const delay = 1500; // Задержка между шагами

  const revealStep = (index: number) => {
    setTimeout(() => {
      setVisibleSteps((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }, index * delay); // Задержка зависит от индекса
  };

  useEffect(() => {
    // Запускаем последовательное появление шагов
    for (let i = 0; i < 7; i++) {
      revealStep(i);
    }
  }, []);

  return (
    <div className={styles.clean_container}>
      <div className={styles.background}>
        <div
          ref={(el) => { stepRefs.current[0] = el; }} // Просто устанавливаем реф
          className={`${styles.step1} ${visibleSteps[0] ? styles.visible : ''}`}
        >
          <img src={step1} alt="Step 1" />
        </div>
        <div
          ref={(el) => { stepRefs.current[1] = el; }} // Просто устанавливаем реф
          className={`${styles.step2} ${visibleSteps[1] ? styles.visible : ''}`}
        >
          <img src={step2} alt="Step 2" />
        </div>
        <div
          ref={(el) => { stepRefs.current[2] = el; }} // Просто устанавливаем реф
          className={`${styles.step3} ${visibleSteps[2] ? styles.visible : ''}`}
        >
          <img src={step3} alt="Step 3" />
        </div>
        <div
          ref={(el) => { stepRefs.current[3] = el; }} // Просто устанавливаем реф
          className={`${styles.step4} ${visibleSteps[3] ? styles.visible : ''}`}
        >
          <img src={step4} alt="Step 4" />
        </div>
        <div
          ref={(el) => { stepRefs.current[4] = el; }} // Просто устанавливаем реф
          className={`${styles.step5} ${visibleSteps[4] ? styles.visible : ''}`}
        >
          <img src={step5} alt="Step 5" />
        </div>
        <div
          ref={(el) => { stepRefs.current[5] = el; }} // Просто устанавливаем реф
          className={`${styles.step6} ${visibleSteps[5] ? styles.visible : ''}`}
        >
          <img src={step6} alt="Step 6" />
        </div>
        <div
          ref={(el) => { stepRefs.current[6] = el; }} // Просто устанавливаем реф
          className={`${styles.step7} ${visibleSteps[6] ? styles.visible : ''}`}
        >
          <img src={step7} alt="Step 7" />
        </div>
      </div>
    </div>
  );
};

export default Timing;
