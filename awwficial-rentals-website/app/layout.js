import Navbar from "./navbar";
import Footer from "./components/footer";

import "./globals.css";
import { lato } from "./ui/fonts";

export const metadata = {
  title: "Awwficial Rentals",
  description: "360 Photo Booth Rental Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body id="root" className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
