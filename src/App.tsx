import styles from "./App.module.css";
import DressCode from "./components/DressCode/DressCode";
import PlaceAndDate from "./components/PlaceAndDate/PlaceAndDate";
import Timing from "./components/Timing/Timing";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <PlaceAndDate />
      <Timing/>
      <DressCode/>
    </div>
  );
}

export default App;
