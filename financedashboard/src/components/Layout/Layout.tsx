import React from 'react'
import { useSession } from 'next-auth/react'
import Sidemenu from '../sidemenu';
import scss from  "./layout.module.scss"
import Head from 'next/head';

const Layout = (props:any) => {
    const {data:session}=useSession();
  return (
    <>
    <Head>
    <title>dashboard</title>
    <meta name="description" content="Financial App" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <main className={scss.layout}>
        {session && <Sidemenu/>}
        {props.children}
    </main>
</>
  )
}

export default Layout