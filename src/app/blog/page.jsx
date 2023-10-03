import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container} key={item.id}>
         <div className={styles.imgContainer}>
            <Image
               src={item.img} alt="Blog"
               width={400}
               height={250}
               className={styles.img}
            />
         </div>
         <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
         </div>
      </Link>
    </div>
  )
}

export default Blog