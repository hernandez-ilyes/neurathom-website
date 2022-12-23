import React from "react";
import styles from "./Project.module.css";

export default function Project({ name, description }) {
  return (
    <div className={styles.project}>
      <h2>{name}</h2>
      <p>{description}</p>
      <button className={styles.btn}>Plus d'information</button>
    </div>
  );
}
