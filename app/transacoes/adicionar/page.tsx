import Form from "next/form";
import { createTransactionAction } from "../actions";
import { getAccounts } from "@/app/data-access/account";
import { getCreditCards } from "@/app/data-access/creditCard";
import { getTransactionCategorys } from "@/app/data-access/transactionCategory";
import Input from "@/app/ui/Input";
import InputCurrency from "@/app/ui/InputCurrency";

export default async function Page(){
    const accounts = await getAccounts();
    const creditCards = await getCreditCards();
    const transactionCategorys = await getTransactionCategorys();

    return (
        <>
            <Form action={ createTransactionAction }>
                <div>
                    <label htmlFor="type-expense">Tipo</label>

                    <div>
                        <input defaultChecked defaultValue="expense"  id="type-expense" name="type" type="radio" />
                        <label htmlFor="type-expense">Despesa</label>

                        <input id="type-income" name="type" type="radio" defaultValue="income" />
                        <label htmlFor="type-income">Receita</label>
                    </div>
                </div>

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
                    <label htmlFor="date">Data</label>

                    <input
                        defaultValue="2025-06-20"
                        id="date"
                        name="date" 
                        required
                        type="date"
                    />
                </div>

                <div>
                    <label htmlFor="description">Descrição</label>
                    
                    <input
                        defaultValue="Lanche"
                        id="description" 
                        max="50"
                        name="description" 
                        required
                        type="text"
                    />
                </div>

                {/* <div>
                    <label htmlFor="ammount">Valor</label>
                    
                    <input
                        defaultValue="10"
                        id="ammount" 
                        min="0"
                        name="ammount" 
                        required
                        type="number"
                    />
                </div> */}

                <div>
                    <label htmlFor="ammount">Valor</label>
                    
                    <InputCurrency 
                        id="ammount"
                        name="ammount"
                        required
                    />
                </div>



                <button type="submit">Salvar</button>
            </Form>
        </>
    );
}