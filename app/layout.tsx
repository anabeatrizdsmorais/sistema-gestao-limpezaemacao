import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from './components/Layout';
// import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
    title: "Bivictrus | Limpeza em Ação - Serviços",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body> { children } </body>
        </html>
    );
}

//rfce
//"dev": "next dev --turbopack",