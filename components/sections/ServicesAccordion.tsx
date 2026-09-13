"use client";

import { useState } from "react";
import styles from "./Services.module.css";

interface Item {
  title: string;
  body: string;
}

export function ServicesAccordion({ items, className }: { items: Item[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <div key={item.title}>
            <button
              className={styles.row}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className={styles.idx}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <span className={`${styles.plus} ${isOpen ? styles.plusOpen : ""}`}>+</span>
            </button>
            <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ""}`}>
              <div>{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
