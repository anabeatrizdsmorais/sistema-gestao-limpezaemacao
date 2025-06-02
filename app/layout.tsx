import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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