import React, { useRef, useState } from "react";
import styles from "./styles/tweening.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const colors = ["salmon", "skyblue", "lightgreen"];

const Tweening = () => {
  const container = useRef();
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  gsap.registerPlugin(Draggable);

  Draggable.create(box1.current, {
    bounds: container,
  });

  const { contextSafe } = useGSAP({ scope: container });
  //   const boxes = [useRef(), useRef(), useRef()];
  //   const triggerAnimation = contextSafe(() => {
  //     gsap.to(
  //       boxes.map((box) => box.current),
  //       {
  //         opacity: 1,
  //         duration: 1,
  //         stagger: 0.5,
  //       }
  //     );
  //   });

  useGSAP(() => {
    Draggable.create(box1.current, {
      bounds: container.current,
    });
  });

  return (
    <div className={styles.container} ref={container}>
      {/* <button onClick={triggerAnimation}>Animate</button> */}
      {/* {boxes.map((box, i) => (
        <div
          className={styles.box}
          style={{
            backgroundColor: colors[i],
          }}
          key={i}
          ref={box}
        ></div>
      ))} */}
      <div className={styles.box} ref={box1}></div>
    </div>
  );
};

export default Tweening;
