import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Financeiro",
  description: "Gerenciamento de movimentações e objetivos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
