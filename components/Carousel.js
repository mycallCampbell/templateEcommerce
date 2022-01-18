import React, {useState} from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';


function Carousel() {

  const [carousel, setCarousel] = useState(1)

      if (carousel !== 3){
          setTimeout(() => setCarousel(carousel + 1), 7000)
      }

    return (
        <>
            <div className={carousel === 1 ? styles.imageCarousel : styles.displayNone}>
                <Image src={'/etsyFooter.jpg'} width={300} height={200} /> 
            </div>
            <div className={carousel === 2 ? styles.imageCarousel : styles.displayNone}>
                <Image src={'/instagramFooter.png'} width={300} height={200} /> 
            </div>
            <div className={carousel === 3 ? styles.imageCarousel : styles.displayNone}>
                <Image src={'/etsyFooter.jpg'} width={300} height={200} /> 
            </div>
        </>
    )
}

export default Carousel
