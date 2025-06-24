'use server';

import { createTransaction } from "../data-access/transaction";
import { createTransactionCategory } from "../data-access/transactionCategory";
import { redirect } from "next/navigation";
import { currencyToNumber } from "../utils/format";

export async function createTransactionAction(formData: FormData){
    console.log('ACTION CREATE TRANSACTION');

    const accountId = formData.get('account') as string;
    const categoryId = formData.get('category') as string;
    
    const ammount = formData.get('ammount') as string;
    const date = formData.get('date') as string;
    const description = formData.get('description') as string;
    const type = formData.get('type') as string;

    console.log(formData);

    await createTransaction({
        account: { connect: { id: accountId } },
        ammount: (type === "expense" ? "-" : "") + currencyToNumber(ammount),
        date: new Date(date.replace('-', '/')),
        description: description,
        transactionCategory: { connect: { id: categoryId } },
    });

    redirect('/transacoes/');
}

export async function createTransactionCategoryAction(formData: FormData){
    console.log('ACTION CREATE TRANSACTION CATEGORY');

    const name = formData.get('name') as string;

    await createTransactionCategory({
        name: name
    });
}