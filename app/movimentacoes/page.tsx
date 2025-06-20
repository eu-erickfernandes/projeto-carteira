import Form from "next/form";
import { createTransactionAction, createTransactionCategoryAction } from "./actions";
import { getAccounts } from "../data-access/account";
import { getCreditCards } from "../data-access/creditCard";
import { getTransactionCategorys } from "../data-access/transactionCategory";
import { getTransactions } from "../data-access/transaction";

export default async function Page(){
    const accounts = await getAccounts();
    const creditCards = await getCreditCards();
    const transactions = await getTransactions();
    const transactionCategorys = await getTransactionCategorys();

    return (
        <>
            <h2>Categorias</h2>

            <Form action={ createTransactionCategoryAction }>
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
                {transactionCategorys.map((transactionCategory) => (
                    <li key={ transactionCategory.id }>{ transactionCategory.name }</li>
                ))}
            </ul>
            
            <h2>Movimentações</h2>

            <Form action={ createTransactionAction }>
                <div>
                    <label htmlFor="account">Conta</label>

                    <select name="account" id="account" required>
                        {accounts.map((account) => (
                            <option key={ account.id } value={ account.id }>
                                { account.name }
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="creditCard">Cartão de Crédito</label>

                    <select name="creditCard" id="creditCard">
                        <option value=""></option>

                        {creditCards.map((creditCard) => (
                            <option key={ creditCard.id } value={ creditCard.id }>
                                { creditCard.account.name }
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="category">Categoria</label>

                    <select name="category" id="category">
                        {transactionCategorys.map((transactionCategory) => (
                            <option key={ transactionCategory.id } value={ transactionCategory.id }>{transactionCategory.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="description">Descrição</label>
                    
                    <input
                        id="description" 
                        max="50"
                        name="description" 
                        required
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="ammount">Valor</label>
                    
                    <input
                        id="ammount" 
                        min="0"
                        name="ammount" 
                        required
                        type="number"
                    />
                </div>

                <div>
                    <label htmlFor="date">Data</label>

                    <input
                        id="date"
                        name="date" 
                        required
                        type="date"
                    />
                </div>

                <button type="submit">Salvar</button>
            </Form>

            <ul>
                {transactions.map((transaction) => (
                    <li key={ transaction.id }>
                        <p>{ transaction.transactionCategory.name }</p>
                        <p>{ transaction.account.name }</p>
                        <p>{ transaction.description }</p>
                        <p>{ transaction.date.toLocaleString() }</p>
                        <p>{ transaction.ammount.toString() }</p>
                    </li>
                ))}

                
                <li>
                    <p>Araújo</p>
                    <p>R$ 50,00</p>
                    <p>CC Inter</p>
                </li>
            </ul>
        </>
    );
}