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
  metadataBase: new URL("https://react-transfer-list-plum.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    phoneNumbers: ["+8801780064264"],
    emails: ["hasan@basikmarketing.in", "mahmudulnayeem71@gmail.com"],
    images: [{ url: "/opengraph-image.png" }],
    title: "React transfer list",
    description:
      "The Transfer List project provides a versatile and customizable solution for managing and transferring items between two lists. This interactive and user-friendly component is designed to streamline data transfer operations within your web application.",
    siteName: "React transfer list",
    url: "https://react-transfer-list-plum.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "React transfer list",
    images: [{ url: "/opengraph-image.png" }],
    description:
      "The Transfer List project provides a versatile and customizable solution for managing and transferring items between two lists. This interactive and user-friendly component is designed to streamline data transfer operations within your web application.",
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
