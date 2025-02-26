import { Header } from '@/components/Header'
import { AppProps } from 'next/app'
import React from 'react'
import "@/app/globals.css"
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#A4B465] min-h-[100vh]'>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

