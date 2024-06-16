'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "@/components/header";
import { FooterWithSocialLinks } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="">
        <StickyNavbar/>
          <div className="m-8">
            {children}
          </div>
          <FooterWithSocialLinks/>
      </div>

      </body>
    </html>
  );
}
