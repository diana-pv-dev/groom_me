'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './ReviewsSection.module.css'
import '@splidejs/react-splide/css';
import reviewsData from "../../../../public/data/reviews.json";

interface Review {
  id: number,
  name: string;
  comment: string;
}

export function ReviewsSection() {
  const reviews: Review[] = reviewsData.reviews;

  const options = {
    perPage: 3,
    gap: '50px',
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0',
      },
    },
    
  };

  return (
  <section className={styles['reviews']}>
    <h2 className={styles['reviews__title']}>
      Ваші відгуки
    </h2>

    <div className={styles['reviews__slider-container']}>
      <Splide options={options}>
        {reviews.map((review: Review) => (
          <SplideSlide key={review.id}>
            <div className={styles['reviews__slide']}>
              <h6 className={styles['reviews__slide_title']}>
                {review.name}
              </h6>
              <p className={styles['reviews__slide_text']}>
                {review.comment}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  </section>
)}