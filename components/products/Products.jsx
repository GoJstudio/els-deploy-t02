import Image from 'next/image';

import { FaChevronRight } from "react-icons/fa";

import flash from '@/public/images/marius-masalar-unsplash.jpg';
import styles from '@/styles/components/products/products.module.scss';

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h4>UPS - AC/DC Power Backup</h4>
          <p className={styles.display}>Powering your business continuity</p>
          <p className={styles.desc}>Reliable power backup for your business: Our UPS - AC/DC Power Backup system provides reliable backup power to ensure uninterrupted operation of your critical business applications during power outages or voltage fluctuations.<br/><br/>
          Peace of mind for your business continuity: Our UPS system provides the peace of mind you need to focus on running and growing your business, knowing that your critical equipment and applications are protected against power disruptions.</p>
          <div className={styles.btnWrapper}>
            <button className={styles.btnIcon}>
              Learn more
              <FaChevronRight />
            </button>
          </div>
        </div>
        {/* textContent */}

        <div className={styles.imageContent}>
          <Image
            alt='Flash, marius-masalar-unsplash'
            src={flash}
            fill
            sizes='100vw'
            className={styles.heroImg}
          />
        </div>
        {/* imageContent */}
      </div>
      {/* container */}
    </section>
  )
}

export default Products