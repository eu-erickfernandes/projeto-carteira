import Form from "next/form";
import { createTransactionAction, createTransactionCategoryAction } from "./actions";
import { getAccounts } from "../data-access/account";
import { getCreditCards } from "../data-access/creditCard";
import { getTransactionCategorys } from "../data-access/transactionCategory";
import { getTransactions } from "../data-access/transaction";
import Link from "next/link";
import { numberToCurrency } from "../utils/format";

export default async function Page(){
    const transactions = await getTransactions();

    return (
        <>
            <h2>Transações</h2>

            <Link href="/transacoes/adicionar">Adicionar Transação</Link>

            <ul>
                {transactions.map((transaction) => (
                    <li key={ transaction.id }>
                        <p>{ transaction.date.toLocaleString() }</p>
                        <p>{ transaction.transactionCategory.name }</p>
                        <p>{ transaction.account.name }</p>
                        <p>{ transaction.description }</p>
                        <p>{ numberToCurrency(transaction.ammount) }</p>
                    </li>
                ))}
            </ul>
        </>
    );
}