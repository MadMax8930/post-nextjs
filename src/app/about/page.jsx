import React from 'react'
import Image from 'next/image'
import Button from '@/components/button/Button'
import styles from './page.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
         <Image 
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About"  
            fill={true} className={styles.imgBanner}
         />
         <div className={styles.imgTxt}>
            <h1 className={styles.imgTitle}>Digital Storyteller</h1>
            <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
         </div>
      </div>
      <div className={styles.txtContainer}>
         <div className={styles.side}>
            <h1 className={styles.title}>Who are we?</h1>
            <p className={styles.desc}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
               quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
               suscipit eos. Animi quibusdam cum omnis officiis 
               <br /> <br />
               voluptatum quo ea
               eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
               beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            </p>
         </div>
         <div className={styles.side}>
            <h1 className={styles.title}>What We do?</h1>
            <p className={styles.desc}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, option voluptatibus magnam lure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorm ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className={styles.bullet}>
               <li>- Creative Illustrations</li>
               <li>- Dynamic Websites</li>
               <li>- Fast and Handy Mobile Apps</li>
            </ul>
            <Button url="/contact" text="Contact" />
         </div>
      </div>
    </div>
  )
}

export default About