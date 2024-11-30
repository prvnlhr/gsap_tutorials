import React from "react";
import styles from "./styles/textLayer.module.css";
const LayerOne = ({ layerOneRef }) => {
  return (
    <svg
      ref={layerOneRef}
      className={styles.layer}
      viewBox="0 0 525 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0H0V48H12V0Z" fill="white" />
      <path d="M90.752 0H78.752V48H90.752V0Z" fill="white" />
      <path
        d="M170.764 47.8703H158.592L175.853 0.130859H186.831L170.764 47.8703Z"
        fill="white"
      />
      <path
        d="M248.569 0.138672H260.882L276.547 47.8789H265.419L248.569 0.138672Z"
        fill="white"
      />
      <path
        d="M350.646 19.1048V9.44882V0.132812H339.018V0.233779V47.8688H350.646V38.5528V28.0808V19.1048Z"
        fill="white"
      />
      <path
        d="M421.885 19.1048V9.44882V0.132812H410.257V0.233779V47.8688H421.885V38.5528V28.0808V19.1048Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M512.573 47.8688H524.201L493.125 0.132812H481.497L493.125 17.9946L512.573 47.8688Z"
        fill="white"
      />
    </svg>
  );
};

export default LayerOne;
