import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Dashboard from './dashboard'
import { SessionProvider } from "next-auth/react"
import scss from "./Home.module.scss"
import Login from "@/components/Login"
import Sidemenu from "@/components/sidemenu"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      <main className={scss.main}>
          {session && <Dashboard/>}
          {session && <Login/>}
       </main>
    </>
  )
}
