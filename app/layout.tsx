import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Ecommerce shop with 3D Preview",
  description: "Ecommerce shop with 3D Preview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-stone-950">
      <body>
        {children}
      </body>
    </html>
  );
}
