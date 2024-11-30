import React from "react";
import styles from "./app.module.css";
import Tweening from "./Tweening/Tweening";
import ScrollTriggerComponent from "./ScrollTrigger/ScrollTriggerComponent.jsx";

const App = () => {
  return (
    <div className={styles.appRootContainer}>
      <div className={styles.innerContainer}>
        {/* <Tweening /> */}
        <ScrollTriggerComponent />
      </div>
    </div>
  );
};

export default App;
