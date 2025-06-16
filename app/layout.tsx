/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/layout/Footer";
import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotoMatch - Find Your Perfect Ride",
  keywords: [
    "cars",
    "motorcycles",
    "vehicles",
    "buy cars",
    "sell cars",
    "car marketplace",
    "motorcycle marketplace",
    "vehicle listings",
    "car dealers",
    "motorcycle dealers",
    "used cars",
  ],
  description:
    "Discover your next vehicle with MotoMatch. Browse thousands of new and used cars and motorcycles from trusted dealers. Find the perfect ride today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          <div>{children}</div>
          <ToastContainer />
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
