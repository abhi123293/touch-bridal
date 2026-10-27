import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Touch Bridal Makeover Studio & Unisex Salon",
  description:
    "Discover your perfect bridal look with Touch Bridal Makeover Studio & Unisex Salon.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
  lang="en"
  className={`${openSans.variable} h-full antialiased`}
>
  <body className={`${openSans.className} flex min-h-full flex-col`}>

        <Navbar />
        {children}
      </body>
    </html>
  );
}