"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import styles from './page.module.css'

const Login = () => {
   const handleGoogleSignIn = async () => {
      await signIn("google")
   };

  return (
    <div className={styles.container}>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  )
}

export default Login