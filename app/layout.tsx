import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { StickyNavbar } from "@/components/header";
import { FooterWithSocialLinks } from "@/components/footer";
import { esES } from "@clerk/localizations";

import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://www.rcjnext.com";
const SITE_NAME = "RCJ Services";
const SITE_DESCRIPTION =
  "RCJ Services es una empresa venezolana de Servicios Globales de Metrología y Calidad con más de 25 años de experiencia: calibraciones, consultoría, auditorías, aseguramiento, formación y desarrollo de software bajo la Norma ISO/IEC 17025:2017.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RCJ Services | Metrología y Calidad, Calibraciones ISO/IEC 17025",
    template: "%s | RCJ Services",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "RCJ Services",
    "metrología",
    "calibración",
    "ISO/IEC 17025",
    "calidad",
    "auditorías",
    "laboratorio de calibración",
    "Venezuela",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "RCJ Services | Metrología y Calidad, Calibraciones ISO/IEC 17025",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/logoRCJ.png",
        width: 400,
        height: 400,
        alt: "RCJ Services",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "RCJ Services | Metrología y Calidad, Calibraciones ISO/IEC 17025",
    description: SITE_DESCRIPTION,
    images: ["/images/logoRCJ.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "R.C.J. SERVICES C.A",
  alternateName: "RCJ Services",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logoRCJ.png`,
  taxID: "J306772936",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressCountry: "VE",
  },
  sameAs: ["https://www.instagram.com/rcjservices/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider localization={esES}>
      <html lang="es">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
        </head>
        <body className={inter.className}>
          <div className="flex min-h-screen flex-col">
            <StickyNavbar />
            <div className="m-8 flex-1">
              {children}
            </div>
            <FooterWithSocialLinks />
          </div>
        </body>
      </html>
    </ClerkProvider>

  );
}
