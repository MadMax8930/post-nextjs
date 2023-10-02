import React from 'react'
import Image from 'next/image'
import HeroImg from 'public/hero.png'
import Button from '@/components/button/Button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
         <h1 className={styles.title}>Better design for your digital products.</h1>
         <p className={styles.desc}>Turning you Idea into Reality. We bring together the teams from the global tech industry.</p>
         <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.side}>
         <Image src={HeroImg} className={styles.img} alt="Home" />
      </div>
    </div>
  )
}
