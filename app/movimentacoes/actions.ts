'use server';

import { revalidatePath } from "next/cache";
import { getAccount } from "../data-access/account";
import { createTransaction } from "../data-access/transaction";
import { createTransactionCategory, getTransactionCategory } from "../data-access/transactionCategory";

// import { revalidatePath } from "next/cache";
// import { createAccount, getAccount } from "./data-access/account";
// import { createCreditCard } from "./data-access/creditCard";
// import { connect } from "http2";
// import { create } from "domain";
// import { createTransaction } from "./data-access/transaction";
// import { Decimal } from "@prisma/client/runtime/library";

// export async function createAccountAction(formData: FormData){
//     console.log('ACTION CREATE ACCOUNT');

//     const name = formData.get('name') as string;

//     await createAccount({
//         name: name
//     });

//     revalidatePath('/');
// }

// export async function createCreditCardAction(formData: FormData) {
//     console.log('ACTION CREATE CREDIT CARD');

//     const accountId = formData.get('account') as string;

//     const account = await getAccount(accountId);

//     // const name = formData.get('name') as string;

//     // const account = await createAccount({
//     //     name: name
//     // });

//     const expiresAt = formData.get('expiresAt') as string;
//     const limit = formData.get('limit') as string;

//     await createCreditCard({
//         account: { connect: { id: account?.id } },
//         expiresAt: new Date(expiresAt),
//         limit: limit,
//     });

//     revalidatePath('/');
// }

export async function createTransactionAction(formData: FormData){
    console.log('ACTION CREATE TRANSACTION');

    const accountId = formData.get('account') as string;
    const creditCardId = formData.get('creditCard') as string;
    
    const categoryId = formData.get('category') as string;
    const ammount = formData.get('ammount') as string;
    const date = formData.get('date') as string;
    const description = formData.get('description') as string;

    await createTransaction({
        account: { connect: { id: accountId } },
        ammount: ammount,
        date: new Date(date),
        description: description,
        transactionCategory: { connect: { id: categoryId } },
    });

    revalidatePath('/');
}

export async function createTransactionCategoryAction(formData: FormData){
    console.log('ACTION CREATE TRANSACTION CATEGORY');

    const name = formData.get('name') as string;

    await createTransactionCategory({
        name: name
    });
}