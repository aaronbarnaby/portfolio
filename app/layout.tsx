import { DarkModeProvider } from '~/utils/darkModeContext'
import './globals.css'
import { Inter, Barlow, Caveat } from 'next/font/google'
import TopNavbar from '~/components/Layout/TopNavbar/TopNavbar'
import ScrollToTopButton from '~/components/UI/ScrollToTopButton';
import { Footer } from '~/components/Layout/Footer';

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-barlow', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], weight: ['400'], variable: '--font-caveat', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${inter.variable} ${caveat.variable}`}>
        <DarkModeProvider>
          <TopNavbar />
          <main>{children}</main>
          <ScrollToTopButton />
          <Footer />
        </DarkModeProvider>
        </body>
    </html>
  )
}
