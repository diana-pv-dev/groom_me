import type { Metadata } from "next";

import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Groom.me",
  description: "З турботою про ваших хвостиків!",
};

export default function Home() {
  return (
    <main className={styles.main}>
    </main>
  );
}
