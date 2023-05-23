import '@/styles/globals.scss'
import { Cormorant_Infant, El_Messiri } from 'next/font/google'
import type { AppProps } from 'next/app'

 const headFont = Cormorant_Infant({ subsets: ['cyrillic'], weight: '400' })
 const textFont = El_Messiri({ subsets: ['cyrillic'], weight: '400', variable: '--text-font' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${headFont.className} ${textFont.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
