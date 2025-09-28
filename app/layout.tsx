'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "@/components/header";
import { FooterWithSocialLinks } from "@/components/footer";
import { esES } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"] });

import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider localization={esES}>
      <html lang="es">
        <body className={inter.className}>
          <div className="">
            <StickyNavbar />
            <div className="m-8">
              {children}
            </div>
            <FooterWithSocialLinks />
          </div>
        </body>
      </html>
    </ClerkProvider>

  );
}
