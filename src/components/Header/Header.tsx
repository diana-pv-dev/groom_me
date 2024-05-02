import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'

export function Header() {
  return <header className={styles.header}>
    <div className={styles.header__inner}>
      <div className={styles.header__start}>
        <button className={styles.header__burger}>
          <Image
            src="/burger.svg"
            alt="Burger Menu"
            className={styles['header__burger-menu']}
            width={30}
            height={18}
          />
        </button>

        <div className={`${styles['header__buttons-container']} ${styles['header__buttons-container--desktop']}`}>
          <button className={styles['header__text-button']}>
            Про нас
          </button>

          <button className={styles['header__text-button']}>
            Послуги
          </button>

          <button className={styles['header__text-button']}>
            Наша команда
          </button>
        </div>
        
      </div>

      <div className={styles['header__logo-container']}>
        <Link
          href="/"
        >
          <Image
            src="/logo.svg"
            alt="Groom.me Logo"
            className={styles.header__logo}
            width={97}
            height={54}
            priority
          />
        </Link>
      </div>

      <div className={styles.header__end}>
        <div className={styles['header__buttons-container']}>
          <button className={styles['header__social-button']}>
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

          <button className={styles['header__social-button']}>
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

        <button className={styles['header__button-appointment']}>
          Записатись на грумінг
        </button>
      </div>
    </div>
  </header>
}