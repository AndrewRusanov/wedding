import {FC} from 'react'
import styles from './Timing.module.css'
//import CleanTiming from '../../assets/Clean_timingAndDressCode.svg'
//import TimingIcon from "../../assets/timingAndDressCode.svg"
import step1 from "../../assets/15_30.svg"
import step2 from "../../assets/16_30.svg"
import step3 from "../../assets/17_00.svg"
import step4 from "../../assets/18_00.svg"
import step5 from "../../assets/21_50.svg"
import step6 from "../../assets/22_00.svg"
import step7 from "../../assets/00_00.svg"



const Timing:FC = () => {
  return (
<div className={styles.clean_container} >
<div className={styles.background} >
	<img src={step1} className={styles.step1}/>
	<img src={step2} className={styles.step2}/>
	<img src={step3} className={styles.step3}/>
	<img src={step4} className={styles.step4}/>
	<img src={step5} className={styles.step5}/>
	<img src={step6} className={styles.step6}/>
	<img src={step7} className={styles.step7}/>
  </div>
</div>
  );
};

export default Timing;