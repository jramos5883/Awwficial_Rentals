import Navbar from "./navbar";
import Footer from "./components/footer";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Awwficial Rentals",
  description: "360 Photo Booth Rental Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root" className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
