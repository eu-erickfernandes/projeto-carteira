import Form from "next/form";
import { createAccountAction } from "./actions";
import Link from "next/link";
import { getAccounts } from "../data-access/account";

export default async function Page(){
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
                {accounts.map((account) => (
                    <li key={  account.id  }>
                        <Link href={`/contas/${account.id}`}>{  account.name  }</Link>
                    </li>
                ))}
                {/* <li>CC Inter</li>
                <li>Poupança BB</li>
                <li>Poupança Caixa</li> */}
            </ul>
        </>
    );
}