import Image from 'next/image';

import { FaCircle } from "react-icons/fa";

import greenField from '@/public/images/nasa-unsplash.jpg';
import styles from '@/styles/components/heros/hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Uninterrupted power for<br/>
            your uninterrupted business
          </h1>
          <p className={styles.desc}>
          Protect your business from power outages: With our power systems like UPS, your business can continue operating even during power outages. This means your employees can keep working, your customers can still make purchases, and your operations wont be disrupted.
          </p>
        </div>
        {/* textContent */}

        <div className={styles.navigation}>
          <FaCircle className={styles.icon} color='#9D9D9D' />
          <FaCircle className={styles.icon} color='#FFFFFF' />
          <FaCircle className={styles.icon} color='#9D9D9D'  />
        </div>

        <div className={styles.imageContent}>
          <Image
            alt='earth night, nasa from unsplash'
            src={greenField}
            placeholder='blur'
            quality={100}
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

export default Hero