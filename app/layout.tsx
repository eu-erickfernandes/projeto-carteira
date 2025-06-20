import type { Metadata } from "next";
import './globals.css';
import Link from "next/link";

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
        <header>
          <h1>Projeto Carteira</h1>

          <menu>
            <li><Link href="/contas/">Contas</Link></li>
            <li><Link href="/cartoes/">Cartões de Crédito</Link></li>
            <li><Link href="/movimentacoes/">Movimentações</Link></li>
            {/* <li><Link href="/contas/adicionar/">Adicionar Conta</Link></li>
            <li><Link href="/cartoes/cartoes/">Adicionar Cartão de Crédito</Link></li>
            <li><Link href="/movimentacoes/adicionar/">Adicionar Movimentação</Link></li> */}
          </menu>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
