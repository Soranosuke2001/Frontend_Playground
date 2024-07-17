import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Font Testing",
  description: "Website to test some fonts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
