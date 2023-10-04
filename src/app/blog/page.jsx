import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

async function getData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      // cache: 'force-cache', // default behavior (cache indefinitely)
      // next: { revalidate: 10 }, // re-validates cached data every 10 sec
      cache: 'no-store', // fetch fresh data on every request
   });
   if (!res.ok) throw new Error('Failed to fetch data');
   return res.json();
}

const Blog = async () => {
   const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
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
      ))}
    </div>
  )
}

export default Blog