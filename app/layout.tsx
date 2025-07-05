import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "../components/PageWrapper";
import { Header1 } from "../components/ui/header";
import I18nProvider from "./providers/I18nProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className="antialised h-full">
        <I18nProvider>
          <div className="relative h-full">
            <div className=" fixed top-2 right-0 z-10">
              <Header1 />
            </div>
            <PageWrapper>{children}</PageWrapper>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
