import React from "react";
import styles from "../../css/Console.module.css";

function Prompt() {
  return (
    <div className={styles.Prompt}>
      benhogben.dev:<span className={styles.dollar}>~$</span>
    </div>
  );
}

export default Prompt;
