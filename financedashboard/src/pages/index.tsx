import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Dashboard from './dashboard'
import Header from '@/pages/components/Headers/Header'
import Sidemenu from '@/pages/components/sidemenu'
import Login from './components/Login'
import { SessionProvider } from "next-auth/react"
import scss from "./Home.module.scss"


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Financial App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.main}>
         <Header/>
         {
         session && <>
          <Sidemenu/>
         <Dashboard/>
         </>
         }
         <Login/>
      </main>
    </>
  )
}
