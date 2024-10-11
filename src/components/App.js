import React from "react";
import styles from "./app.module.css";
import Tweening from "./Tweening/Tweening";

const App = () => {
  return (
    <div className={styles.appRootContainer}>
      <div className={styles.innerContainer}>
        <Tweening />
      </div>
    </div>
  );
};

export default App;
