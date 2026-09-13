import styles from "./Logo.module.css";

export function Logo() {
  return (
    <span className={styles.mark}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.light} src="/logo-light.svg" alt="Khutz" width={126} height={15} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.dark} src="/logo-dark.svg" alt="Khutz" width={126} height={15} />
    </span>
  );
}
