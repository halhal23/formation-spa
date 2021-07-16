import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>vercelデプロイ確認</h1>
      <h1 className={styles.tomato}>色はトマト</h1>
      <h1 className={styles.green}>色は緑</h1>
    </div>
  )
}
