import { projects } from "@/lib/content/projects";
import styles from "./Marquee.module.css";

export function Marquee() {
  const names = projects.map((p) => p.title.toUpperCase()).join(" · ") + " · ";

  return (
    <div className={styles.marquee} role="presentation">
      <div className={styles.track}>
        <span>{names}</span>
        <span>{names}</span>
      </div>
    </div>
  );
}
