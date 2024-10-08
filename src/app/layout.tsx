import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/sections/header";
import { Footer } from "@/sections/footer";
import { Analytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gledsnelle",
  description: "Juntos e unidos por uma Remigio Melhor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex flex-col items-center`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        <Analytics/>
    </html>
  );
}
