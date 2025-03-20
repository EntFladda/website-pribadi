import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import "./globals.css";

const inter=Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "EntFladda",
  description: "Personal website untuk menampilkan proyek dan esai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Website Pribadi</title>
        <meta name="description" content="Website pribadi saya" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Layout>
          <div className="container mx-auto p-4">{children}</div>
        </Layout>
      </body>
    </html>
  );
}

