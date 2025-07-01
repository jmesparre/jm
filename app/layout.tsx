import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import { Header1 } from "@/components/ui/header";
import ClientSidePreloader from "@/components/ui/ClientSidePreloader";

export const metadata: Metadata = {
  title: "Juan Desarrollador Web",
  description: "Portfolio de desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="antialised h-full">
        <div className="relative h-full">
            <div className=" fixed top-2 right-0 z-10">
              <Header1 />
            </div>
            <PageWrapper>{children}</PageWrapper>
          </div>
        <ClientSidePreloader />
      </body>
    </html>
  );
}
