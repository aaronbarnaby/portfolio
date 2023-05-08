import { DarkModeProvider } from '~/utils/darkModeContext'
import './globals.css'
import { Inter, Barlow, Sarina } from 'next/font/google'
import TopNavbar from '~/components/Layout/TopNavbar/TopNavbar'

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-barlow', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sarina = Sarina({ subsets: ['latin'], weight: ['400'], variable: '--font-sarina', display: 'swap' });

export const metadata = {
  title: 'Aaron Barnaby Portfolio',
  description: 'Full Stack Developer with a passion for modern and best practice development.  Next.js, C#, Typescript, React and AWS',
  keywords: "aaron barnaby, portfolio, full stack, developer, next.js, .net, typescript, react, aws"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${inter.variable} ${sarina.variable}`}>
        <DarkModeProvider>
          <TopNavbar />
          {children}
        </DarkModeProvider>
        </body>
    </html>
  )
}
