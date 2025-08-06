"use client";

import Image from "next/image";
import styles from "./Reviews.module.scss";
import { reviews } from "./content ";
import { Stars } from "@/UI/Stars";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () =>
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );

  const previousReview = () =>
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );

  useEffect(() => {
    const interval = setInterval(nextReview, 2000);
    return () => clearInterval(interval);
  }, [currentReview]);

  const { avatar, name, role, stars, comment } = reviews[currentReview];

  return (
    <section id="reviews" className={styles.reviews}>
      <Image
        className={styles.image}
        src="/images/pictures/graos.png"
        alt="graos de cafe"
        width={425}
        height={250}
      />
      <h2 className="title light-bg">O que falam da gente</h2>
      <div className={styles.review}>
        <button className={styles.previous} onClick={previousReview}>
          &larr;
        </button>
        <Image
          src={avatar}
          alt={`Avatar de ${name}`}
          width={120}
          height={120}
          className={styles.avatar}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <Stars stars={stars} />
        <p>{comment}</p>
        <button className={styles.next} onClick={nextReview}>
          &rarr;
        </button>
      </div>
    </section>
  );
}
