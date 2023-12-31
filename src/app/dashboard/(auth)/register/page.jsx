"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
   const [error, setError] = useState(null);
   const router = useRouter();

   const handleRegister = async (e) => {
      e.preventDefault();
      // Could use useState
      const name = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;

      try {
         const res = await fetch('/api/auth/register', {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
         });

         res.status === 201 && router.push("/dashboard/login?success=Account has been created");
      } catch(err) {
         setError(err);
         console.log(err);
      }
   }
  return (
    <div className={styles.container}>
      <form onSubmit={handleRegister} className={styles.form}>
         <input type="text" placeholder="username" className={styles.input} required />
         <input type="email" placeholder="email" className={styles.input} required />
         <input type="password" placeholder="password" className={styles.input} required />
         <button className={styles.button}>Register</button>
      </form>
      {error && "Something went wrong!"}
      <Link href={"/dashboard/login"}>Login with an existing account</Link>
    </div>
  )
}

export default Register