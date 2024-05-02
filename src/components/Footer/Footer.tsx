import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'

export function Footer() {
  return <footer className={styles.footer}>
  <div className={styles.footer__inner}>
    <div className={styles.footer__start}>
      <div className={styles['footer__logo-container']}>
        <Link
          href="/"
        >
          <Image
            src="/logo.svg"
            alt="Groom.me Logo"
            className={styles.footer__logo}
            width={97}
            height={54}
            priority
          />
        </Link>
      </div>
    </div>


    <div className={styles['footer__center']}>
      <p className={styles.footer__copyright}>
        Copyright 2024 © Groom.me. Україна, Дніпро. Всі права захищені
      </p>
    </div>

    <div className={styles.footer__end}>
      <div className={styles['footer__buttons-container']}>
        <button className={styles['footer__social-button']}>
          <Link
            href='https://t.me/Groom_me_dp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src="/icon-telegram.svg"
              alt="Groom me telegram link"
              width={24}
              height={24}
            />
          </Link>
        </button>

        <button className={styles['footer__social-button']}>
          <Link
            href='https://www.instagram.com/groom.me.dp/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src="/icon-insta.svg"
              alt="Groom me Instagram link"
              width={24}
              height={24}
            />
          </Link>
        </button>
      </div>
    </div>
  </div>
</footer>
}