import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.fontStyle}>Welcome Back !</h1>
      <Button text={"Hello!"} />
    </div>
  );
}

export default App;
