import type { Metadata } from "next";

import Image from "next/image";
import styles from "./page.module.css";
import { HeroBanner } from "./sections/HeroBanner/HeroBanner";
import React from "react";

export const metadata: Metadata = {
  title: "Groom.me",
  description: "З турботою про ваших хвостиків!",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner />
    </main>
  );
}
