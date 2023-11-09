import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quetz Climate',
  description: 'Saiba o clima da sua cidade agora mesmo!',
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>   <></>     
            
        <Component {...pageProps} />
      </>
    );
  }
