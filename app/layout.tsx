import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
