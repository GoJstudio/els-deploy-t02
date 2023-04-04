import Link from 'next/link';

import { FaYoutube, FaTwitter, FaInstagramSquare, FaBars } from "react-icons/fa";

import NavigationBar from '@/components/NavigationBar';
import styles from '@/styles/components/headers/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h3>ELS</h3>
          <div className={styles.initial}>
            <p><strong>E</strong>nergy</p>
            <p><strong>L</strong>ighting</p>
            <p><strong>S</strong>ervice</p>
          </div>
        </Link>

        <div className={styles.menuContents}>
          <div className={styles.menuContact}>
            <Link href="/">
              <p className={styles.email}>customer@lettherebelight.cn</p>
            </Link>
            <div className={styles.snsContainer}>
              <Link href="/" className={styles.sns}>
                <FaYoutube className={styles.icon} />
              </Link>
              <Link href="/" className={styles.sns}>
                <FaTwitter className={styles.icon} />
              </Link>
              <Link href="/" className={styles.sns}>
                <FaInstagramSquare className={styles.icon} />
              </Link>
            </div>
            {/* snsContainer */}
          </div>
          {/* menuContact */}
          <NavigationBar/>
        </div>
        {/* menuContents */}
        
        <FaBars className={styles.menuBars} />
      </div>
      {/* Container */}
    </header>
  )
}

export default Header