import { Metadata } from "next";
import "./globals.css";
import { TopNavbar } from "~/components/Layout";
import Footer from "~/components/Layout/Footer";
import ScrollToTopButton from "~/components/UI/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Aaron Barnaby",
  description:
    "Full Stack Developer with a passion for modern and best practice development.  Next.js, C#, Typescript, React and AWS",
  keywords: "aaron barnaby, portfolio, full stack, developer, next.js, .net, typescript, react, aws",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <TopNavbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
