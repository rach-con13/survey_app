import React from "react";
import styles from "./errorCard.module.scss";

const errorStatuses = {
  danger: styles.danger,
  warning: styles.warning,
};
const errorIcons = {
  danger: <i className="fas fa-exclamation-circle"></i>,
  warning: <i className="fas fa-exclamation-triangle"></i>,
};
export default function ErrorCard(props) {
  return (
    <>
      <div className={`${styles.error__card} ${errorStatuses[props.status]}`}>
        <p className={styles.error__icon}>{errorIcons[props.status]}</p>
        <p className={styles.error__message}>{props.message}</p>
      </div>
    </>
  );
}
