import styles from "./App.module.css";
import PlaceAndDate from "./components/PlaceAndDate/PlaceAndDate";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <PlaceAndDate />
    </div>
  );
}

export default App;
