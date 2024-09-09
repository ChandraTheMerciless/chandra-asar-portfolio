import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header";

export const metadata: Metadata = {
  title: "Chandra Asar",
  description: "Chandra Asar's portfolio and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main className="z-0 relative flex flex-col p-4 text-lg">
          {children}
        </main>
      </body>
    </html>
  );
}
