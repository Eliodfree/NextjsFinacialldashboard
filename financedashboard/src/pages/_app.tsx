import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"

interface MyAppProps extends AppProps {
  session: any; // Adjust the type according to your session object structure
}

export default function App({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}