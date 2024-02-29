import styles from "./page.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <div className={styles.loadingText}>Please wait...</div>
      </div>
    </div>
  );
}
