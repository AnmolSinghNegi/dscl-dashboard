import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import LeftNavbar from './components/LeftNavbar'
import Content from './components/Content'

function page2() {
  return (
        <div className={styles.container}>
          <Head>
            <title>DSCL Project Dashboard</title>
            <meta name="description" content="Created by Anmol Singh Negi" />
            <link rel="icon" href="/dscl.ico" />
          </Head>
          <LeftNavbar/> 
          <Header/>
          <Content/>
        </div>
  )
}

export default page2