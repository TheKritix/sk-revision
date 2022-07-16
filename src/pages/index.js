import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Header from './header/header.js'
import Footer from './footer/footer.js'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SK-Revision</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/about">next page!</Link>
        </h1>
      </main>

      <Footer/>
    </div>
  )
}

export default Home;
