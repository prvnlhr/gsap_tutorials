import React, { useRef } from "react";
import styles from "./styles/scrollTrigger.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextLayer from "./TextLayer";

const ScrollTriggerComponent = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainerRef = useRef();
  const textRef = useRef();
  useGSAP(() => {
    const paths = textRef.current.querySelectorAll("path[fill='transparent']");
    gsap.to(paths, {
      fill: "white",
      scrollTrigger: {
        trigger: textRef.current,
        scroller: scrollContainerRef.current,
        start: "0px 0px",
        end: "500px -500px",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className={styles.scrollWrapper} ref={scrollContainerRef}>
      <div className={`${styles.page} ${styles.page3}`}>
        <TextLayer textRef={textRef} />
      </div>
    </div>
  );
};

export default ScrollTriggerComponent;
