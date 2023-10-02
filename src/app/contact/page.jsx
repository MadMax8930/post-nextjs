import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
         <div className={styles.imgContainer}>
            <Image 
               src="/contact.png" alt="Contact"  
               fill={true} className={styles.image}
            />
         </div>
         <form className={styles.formContainer}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="email" className={styles.input} />
            <textarea cols="30" rows="10" placeholder="message" className={styles.textarea}></textarea>
            <Button url="#" text="Send" />
         </form>
      </div>
    </div>
  )
}

export default Contact