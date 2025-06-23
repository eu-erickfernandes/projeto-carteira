import type { Metadata } from "next";
import './reset.css';
import './globals.css';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projeto Carteira",
  description: "Monitoramento Financeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  console.log('🫚 ROOT LAYOUT');

  return (
    <html lang="pt-br">
      <body>
        <header>
          <Link href="/">
            <h1>Projeto Carteira</h1>
          </Link>

          <menu>
            <li><Link href="/contas/">Contas</Link></li>
            <li><Link href="/cartoes/">Cartões de Crédito</Link></li>
            <li><Link href="/transacoes/">Transações</Link></li>
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
