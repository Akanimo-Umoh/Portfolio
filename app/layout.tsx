import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akanimo Umoh | Frontend Developer",
  description:
    "I'm a dedicated frontend developer passionate about creating modern web experiences.",
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
