import { Metadata } from "next";
import "./globals.css";
import { Inter, Barlow, Caveat } from "next/font/google";
import { DarkModeProvider } from "~/lib/Context/DarkModeContext";
import { TopNavbar } from "~/components/Layout";
import Footer from "~/components/Layout/Footer";
import ScrollToTopButton from "~/components/UI/ScrollToTopButton";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaron Barnaby",
  description:
    "Full Stack Developer with a passion for modern and best practice development.  Next.js, C#, Typescript, React and AWS",
  keywords: "aaron barnaby, portfolio, full stack, developer, next.js, .net, typescript, react, aws",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${inter.variable} ${caveat.variable}`}>
        <DarkModeProvider>
          <TopNavbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
