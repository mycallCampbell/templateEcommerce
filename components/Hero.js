import Image from 'next/image';
import styles from './Hero.module.css';

function Hero({imageURL, width, height}) {
    return (
        <div className={styles.containerHero}>
            <Image 
                src={imageURL} 
                width={width} 
                height={height} 
                // objectFit="cover"
                // objectPosition="center"
                // layout="fill" 
            />
            <div className={styles.containerContent}>

            </div>
        </div>
    )
}

export default Hero
