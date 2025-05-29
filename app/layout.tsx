import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavigationComponent from "@/components/Navigation";
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
  title: "JM Desarrollo Web",
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
          <div className="fixed top-0 left-0 z-10">
            <a href="/">
              <Image src="/logosvgverde.svg" alt="Logo" width={50} height={50} className="mt-3 ml-5"/>
              <h3 className="top-3 left-22">Juan Manuel</h3>
            </a>
          </div>
          {/* Desktop Navbar */}
          <div className="hidden md:block fixed top-0 right-0 z-10">
            <DesktopNavbar />
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden fixed top-2 right-0 z-10">
            <NavigationComponent />
          </div>
          <PageWrapper>{children}</PageWrapper>
        </div>
      </body>
    </html>
  );
}
