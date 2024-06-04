'use client'

import Image from 'next/image'
import styles from './BannerSection.module.css'

import beforeImg from '../../../../public/before-2020.jpeg'
import afterImg from '../../../../public/after_2020.jpeg'
import { useState } from 'react'

export function BannerSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
  <section
    className={styles['banner']}
    onMouseUp={handleMouseUp}
  >
    <div
      className={styles['banner__content-wrapper']}
      onMouseMove={handleMove}
      onMouseDown={handleMouseDown}
    >
      <Image
        src={afterImg}
        alt="Groom.me dog after grooming"
        fill
        priority
      />

      <div
        className={styles['banner__image-wrapper']}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}
      >
        <Image
          src={beforeImg}
          alt="Groom.me dog after grooming"
          fill
          priority
        />
      </div>

      <div
        className={styles['banner__slider-line']}
        style={{left: `calc(${sliderPosition}% - 1px)`}}
      >
        <div className={styles['banner__slider-button']} />
      </div>
    </div>
  </section>
)}