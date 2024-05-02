import Image from 'next/image'
import styles from './HeroBanner.module.css'

import bgDesktop from '../../../../public/hero_banner_desktop.png'
import bgMobile from '../../../../public/hero_banner_mobile.jpg'

export function HeroBanner() {
  return <section className={styles['hero-banner']}>
    <div className={styles['hero-banner__inner']}>
      <div className={styles['hero-banner__image-container']}>
        <Image
          src={bgDesktop}
          alt="Groom.me dog after grooming"
          className={styles['hero-banner__image-desktop']}
          priority
        />
        <Image
          src={bgMobile}
          alt="Groom.me dog after grooming"
          className={styles['hero-banner__image-mobile']}
          priority
        />
      </div>

    <div className={styles['hero-banner__content-container']}>
      <div className={styles['hero-banner__content']}>
        <h2 className={styles['hero-banner__title']}>
          найкращий догляд<br/>за вашими хвостиками
        </h2>

        <button className={styles['hero-banner__cta-mobile']}>
          Записатись на грумінг
        </button>
      </div>
    </div>
    </div>
</section>
}