
import Head from "next/head"
import {Navbar} from "../Navbar"
import styles from "./MainLayaout.module.css"


export const MainLayout = ({children}:{children: React.ReactNode}) => {

  return (
    <div className={styles.container}>

    <Head>
      <title>home-mickeyDev</title>
      <meta name="description" content="Home" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
   <Navbar />

    <main className={styles.main}>
      {children}     
    </main>    
  </div>
  )
}

