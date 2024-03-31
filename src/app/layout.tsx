import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeNext",
  description: "Estudo de next com pokeAPI",
};

export default function RootLayout({children}: Readonly< {children: React.ReactNode;} >) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
        </body>
    </html>
  );
}
