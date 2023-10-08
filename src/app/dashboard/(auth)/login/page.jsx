"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import styles from './page.module.css'
import Google from 'next-auth/providers/google'

const Login = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => signIn(Google)}>Login with Google</button>
    </div>
  )
}

export default Login