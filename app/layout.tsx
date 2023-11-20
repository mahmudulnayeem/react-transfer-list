import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React transfer list",
  description:
    "The Transfer List project provides a versatile and customizable solution for managing and transferring items between two lists. This interactive and user-friendly component is designed to streamline data transfer operations within your web application.",
  keywords: [
    "react",
    "transferlist",
    "react-transferlist",
    "transferlist-react",
    "transferlist-reactjs",
    "nextjs-transferlist",
    "nextjs-transferlist-react",
    "nextjs-transferlist-reactjs",
    "next",
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://react-transfer-list-plum.vercel.app/",
    images: ["/public/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
