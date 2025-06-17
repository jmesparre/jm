import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import DesktopNavbar from "@/components/DesktopNavbar";
import PageWrapper from "@/components/PageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Desarrollador Web",
  description: "portofilo de desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div className="relative logo h-full">
            <div className="fixed top-1 sm:top-0 left-4 sm:left-11.5 z-10 ">
              <Link href="/">
                <Image src="/logosvg.svg" alt="Logo-juan-manuel-esparre-desarrollador-web" width={40} height={40} className="mt-3"/>
                <h2 className="top-4 ml-12 logo-text font-bold">Desarrollo Web</h2>
              </Link>
            </div>
            {/* Desktop Navbar */}
            <div className="hidden md:block fixed top-0 right-0 z-10">
              <DesktopNavbar />
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden fixed top-2 right-0 z-10">
  <p>a</p>
            </div>
            <PageWrapper>{children}</PageWrapper>
          </div>
      </body>
    </html>
  );
}
