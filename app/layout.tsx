import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ColorStack Stevens Chapter",
  description: "ColorStack Stevens Institute of Technology Chapter",
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
