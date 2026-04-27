import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Solar Shahkar — B2B Solar Marketplace for Pakistan",
  description:
    "Solar Shahkar connects solar distributors and wholesalers directly with 500+ verified installers across Pakistan. Grow your solar business 2X without middlemen.",
  keywords: "B2B solar marketplace Pakistan, solar distributor, solar wholesaler, solar installer network, sell solar panels Pakistan",
  openGraph: {
    title: "Solar Shahkar — Grow Your Solar Business 2X",
    description: "Sell directly to 500+ verified solar installers across Pakistan.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
