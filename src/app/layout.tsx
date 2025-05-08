import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from  '@/app/header/header';
import Footer from '@/app/Footer/footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KHALID AHMED | Portfolio",
  description: "Portfolio of Khalid Ahmed, a software engineer specializing in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       <Header />
        <main className="min-h-screen">
          {children}
        </main>
       <Footer />
      </body>
    </html>
  );
}
