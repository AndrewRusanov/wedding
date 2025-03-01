import styles from "./App.module.css";
import PlaceAndDate from "./components/PlaceAndDate/PlaceAndDate";
import Timing from "./components/Timing/Timing";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <PlaceAndDate />
      <Timing/>
    </div>
  );
}

export default App;
