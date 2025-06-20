import Form from "next/form";
import { createCreditCardAction } from "./actions";
import { getAccount, getAccounts } from "../data-access/account";
import { getCreditCards } from "../data-access/creditCard";
import Link from "next/link";
import { valueToCurrency } from "../utils/format";

export default async function Page(){
    const accounts = await getAccounts();
    const creditCards = await getCreditCards();

    return (
        <>
            <h2>Cartões de Crédito</h2>

            <Form action={ createCreditCardAction }>
                <div>
                    <label htmlFor="account">Conta</label>

                    <select
                        id="account" 
                        name="account" 
                        required
                    >
                        {accounts.map((account) => (
                            <option key={ account.id } value={ account.id }>{ account.name }</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="limit">Limite</label>

                    <input
                        id="limit" 
                        // min="0"
                        name="limit" 
                        required
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="closesAt">Fechamento</label>

                    <input
                        id="closesAt" 
                        max="31"
                        min="1"
                        name="closesAt" 
                        required
                        type="number"
                    />
                </div>

                <div>
                    <label htmlFor="expiresAt">Vencimento</label>

                    <input
                        id="expiresAt" 
                        max="31"
                        min="1"
                        name="expiresAt" 
                        required
                        type="number"
                    />
                </div>

                <button type="submit">Salvar</button>
            </Form>

            <ul>
                {creditCards && creditCards.map(async (creditCard) => (
                    <li key={ creditCard.id }>
                        <p>{ creditCard.account.name }</p>
                        <p>{ creditCard.closesAt }</p>
                        <p>{ creditCard.expiresAt }</p>
                        <p>{ valueToCurrency(creditCard.limit) }</p>
                    </li>
                ))}
            </ul>    
        </>
    );
}