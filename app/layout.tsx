import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from './components/Layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bivictrus | Limpeza em Ação - Serviços",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body> */}
      <body>
      <Layout>{children}</Layout>
      </body>
    </html>
  );
}

//rfce
//"dev": "next dev --turbopack",