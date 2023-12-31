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
  metadataBase: new URL("https://transferlist-react.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
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
