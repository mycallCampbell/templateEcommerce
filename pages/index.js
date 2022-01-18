import React, {useState} from 'react';

import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'

import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

export default function Home() {


  return (
    <div className={styles.container}>
      <Meta title={'Home Page'} />
      <main className={styles.containerMain}>

        {/* Hero Section */}
        <section className={styles.containerHero}>
          {/* <Carousel /> */}
          <Hero imageURL={'/imageBreak.jpg'} width={1200} height={650} />
        </section>

        {/* Category Section */}
        <section className={styles.containerTitle}>
          <div>
            <h3>CATEGORY COLLECTION</h3>
          </div>
        </section>

        <section className={styles.containerGrid}>
            {/* Category Grid Line 1 */}
            <Link href={'#'}>
              <div className={styles.itemGrid}></div>
            </Link>
            <Link href={'#'}>
              <div className={styles.itemGrid}></div>
            </Link>
            <Link href={'#'}>
              <div className={styles.itemGrid}></div>
            </Link>

            {/* Category Grid Line 2 */}
            <Link href={'#'}>
              <div className={styles.itemGrid}></div>
            </Link>
            <Link href={'#'}>
              <div className={styles.itemGrid}></div>
            </Link>
            <Link href={'#'}>
              <div className={styles.itemGrid}></div>
            </Link>
        </section>
          

      </main>

      <Footer src={'/footerImageRing.webp'} width={400} height={300}/>
    </div>
  )
}
