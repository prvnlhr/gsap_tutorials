import React, { useRef, useEffect } from "react";
import styles from "./styles/tweening.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Tweening = () => {
  const container = useRef(null);
  const scrollContainer = useRef(null);
  const boxesRef = useRef([]);

  // useGSAP(() => {
  //   boxesRef.current.forEach((box) => {
  //     // let tl = gsap.timeline({
  //     //   scale: 25,
  //     //   delay: 2,
  //     //   duration: 1.5,
  //     //   ease: "power2.inOut",
  //     //   scrollTrigger: {
  //     //     trigger: box,
  //     //     start: "50px 200px",
  //     //     end: "100px 300px",
  //     //     scrub: true,
  //     //     markers: true,
  //     //     scroller: scrollContainer.current,
  //     //   },
  //     // });

  //     // tl.to(box, { scale: 25, delay: 2, duration: 1.5, ease: "power2.inOut" });
  //     // tl.to(box, { backgroundColor: "red" });

  //     gsap.to(box, {
  //       duration: 1.5,
  //       rotate: 360,
  //       ease: "power2.inOut",
  //       scrollTrigger: {
  //         trigger: box,
  //         scrub: true,
  //         scroller: scrollContainer.current,
  //         markers: true,
  //         start: "top 5%",
  //         end: "top -50%",
  //         pin: true,
  //       },
  //     });
  //   });
  // }, []);
  const textRef = useRef();
  useGSAP(() => {
    gsap.to(textRef.current, {
      transform: "translateX(-75%)",
      scrollTrigger: {
        trigger: textRef.current,
        scroller: scrollContainer.current,
        scrub: true,
        pin: true,
        start: "top 0%",
        end: "top -100%",
      },
    });
  }, []);

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.scrollContainer} ref={scrollContainer}>
        {[...Array(5)].map((_, i) => (
          <div className={`${styles.page} ${styles[`page${i + 1}`]}`} key={i}>
            <div
              className={styles.pageBox}
              ref={(el) => (boxesRef.current[i] = el)}
            ></div>
          </div>
        ))}
        <div className={`${styles.page} ${styles[`page${6}`]}`} key={6}>
          <p className={styles.nameText} ref={textRef}>
            THISISVERYLONGTEXT
          </p>
        </div>
        <div className={`${styles.page} ${styles[`page${7}`]}`} key={7}></div>
      </div>
    </div>
  );
};

export default Tweening;
