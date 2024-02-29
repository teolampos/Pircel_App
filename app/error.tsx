"use client";
import styles from "./page.module.scss";
export default function HomeError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <h3>Error while loading data...Try again</h3>
        <button className={styles.retry} onClick={() => reset()}>
          Retry
        </button>
      </div>
    </div>
  );
}
