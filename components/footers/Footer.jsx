import Link from 'next/link';

import { FaYoutube, FaTwitter, FaInstagramSquare } from "react-icons/fa";

import styles from '@/styles/components/footers/footer.module.scss';

const Footer = ({ menuList }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.mainContents}>
          <div className={styles.leftContents}>
            <Link href="/" className={styles.logo}>
              <h3 className={styles.name}>ELS</h3>
              <h5 className={styles.slogan}>Let there be light</h5>
              <div className={styles.initial}>
                <p><strong>E</strong>nergy</p>
                <p><strong>L</strong>ighting</p>
                <p><strong>S</strong>ervice</p>
              </div>
            </Link>
            {/* logo */}

            <div className={styles.snsContainer}>
              <Link href="/aaa" className={styles.sns}>
                <FaYoutube className={styles.icon} />
              </Link>
              <Link href="/bbb" className={styles.sns}>
                <FaTwitter className={styles.icon} />
              </Link>
              <Link href="/ccc" className={styles.sns}>
                <FaInstagramSquare className={styles.icon} />
              </Link>
            </div>
            {/* snsContainer */}
          </div>
          {/* leftContents */}

          <div className={styles.rightContents}>
            {menuList.map((menu) => (
              <div className={styles.menuWrapper}>
                <h6 className={styles.menu}>{menu[0]}</h6>
                <ul key={menu[0]} className={styles.list}>
                  {menu[1].map((item) => (
                    <li className={styles.item}>
                      <Link key={item} href={`/${menu[0].replace(/\s+/g, '-').toLowerCase()}/${item.replace(/\s+/g, '-').toLowerCase()}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
          {/* rightContents */}
        </div>
        {/* mainContents */}

        <p>&copy;2023 ELS Ltd,. All rights reserved.</p>
      </div>
      {/* container */}
    </footer>
  )
}

export default Footer