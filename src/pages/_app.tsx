import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// pages/_app.js
import { Source_Sans_Pro } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <main  className={inter.className}  ><Component {...pageProps} /></main>
}
