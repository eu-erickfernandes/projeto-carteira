import Form from "next/form";
import { createAccountAction } from "./actions";
import Link from "next/link";
import { getAccounts } from "../data-access/account";
import { getTransactionsAmmountSumByAccountId } from "../data-access/transaction";
import { Decimal } from "@prisma/client/runtime/library";
import { numberToCurrency } from "../utils/format";

export default async function Page(){
    console.log('📃 PAGE CONTAS');

    const accounts = await getAccounts();

    return (
        <>
            <h2>Contas</h2>

            <Form action={ createAccountAction }>
                <div>
                    <label htmlFor="name">Nome</label>

                    <input
                        id="name" 
                        max="50"
                        name="name" 
                        required
                        type="text"
                    />
                </div>

                <button type="submit">Salvar</button>
            </Form>

            <ul>
                {accounts.map(async (account) => {

                    const transactionsAmmountSum = (await getTransactionsAmmountSumByAccountId(account.id))._sum.ammount as Decimal || 0;

                    return (
                        <li key={  account.id  }>
                            <p>{ account.name }</p>
                            <p>{ numberToCurrency(transactionsAmmountSum) }</p>
                        </li>
                    )}
                )}
            </ul>
        </>
    );
}