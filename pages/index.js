import React, {useState} from 'react';

import Image from 'next/image'
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
          <Hero imageURL={'/imageBreak.jpg'} width={700} height={400} />
        </section>


      </main>

      <Footer src={'/footer/vercel.svg'} width={100} height={100}/>
    </div>
  )
}
