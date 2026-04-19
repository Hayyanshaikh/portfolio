import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hayyan Ali | Portfolio",
  description: "Building Scalable Digital Ecosystems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
