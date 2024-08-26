import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import spark from "@/assets/images/spark.jpg";
import pool1 from "@/assets/images/8.jpg";
import pool2 from "@/assets/images/Swimming Pool 2.jpg";
import pool3 from "@/assets/images/Swimming Pool 1.jpg";
import pool4 from "@/assets/images/9.jpg";
import gym1 from "@/assets/images/Gym 1.jpg";
import gym2 from "@/assets/images/03.jpg";
import hospitality from "@/assets/images/03.jpg";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Locales from "@/components/Locales";

const manrope = Manrope({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "The Spark by ESNAAD | Luxury Living in Mohamed Bin Rashid City",
  description: "Discover The Spark by ESNAAD in Mohamed Bin Rashid City, District 11. Experience luxury living with cutting-edge design, superior craftsmanship, and sustainable living.",
  keywords: "ESNAAD, The Spark, Mohamed Bin Rashid City, luxury living, Dubai real estate, sustainable living",
  openGraph: {
    type: "website",
    countryName: "United Arabic Emirates",
    title: "The Spark by ESNAAD | Luxury Living in Mohamed Bin Rashid City",
    emails: ["customercare@esnaad.com"],
    alternateLocale: ["en-US", "en-GB", "ar-AE", "fr-FR", "de-DE"],
    description: "Discover The Spark by ESNAAD in Mohamed Bin Rashid City, District 11. Experience luxury living with cutting-edge design, superior craftsmanship, and sustainable living.",
    siteName: "The Spark by ESNAAD",
    determiner: "the",
    phoneNumbers: ["+971 4 287 9506"],
    locale: "en-US",
    url: "", // TODO: add permanent url
    images: [spark.src, pool1.src, pool4.src, pool2.src, pool3.src, gym1.src, gym2.src, hospitality.src],
    videos: ["/assets/spark/VIDEOS/the spark exterior & lobby.mp4", "/assets/spark/VIDEOS/the spark Gym&Flat.mp4"]
  },
  twitter: {
    card: "summary_large_image",
    creator: "Sikouk Nourdin",
    description: "Discover The Spark by ESNAAD in Mohamed Bin Rashid City, District 11. Experience luxury living with cutting-edge design, superior craftsmanship, and sustainable living.",
    images: [spark.src, pool1.src, pool4.src, pool2.src, pool3.src, gym1.src, gym2.src, hospitality.src],
    site: "", // TODO
    title: "The Spark by ESNAAD | Luxury Living in Mohamed Bin Rashid City",
  },
  authors: [{
    name: "Learn more, Edge Realty Development",
    url: "https://edgerealty.ae"
  }],
  creator: "Sikouk Nourdin"
};

export const viewport: Viewport = {
  width: 'device-width, shrink-to-fit=no',
  minimumScale: 1,
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params: {lang}
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang} className="scroll-smooth bg-primary">
      <body className={`min-h-0 bg-primary ${manrope.className}`}>
        <Layout>
          {children}
          <Locales dictionaries={dictionary} />
        </Layout>
      </body>
    </html>
  );
}
