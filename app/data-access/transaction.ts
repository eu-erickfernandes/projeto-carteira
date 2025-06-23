import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function createTransaction(transaction: Prisma.TransactionCreateInput) {
    console.log('💾 DAL CREATE TRANSACTION');

    return await prisma.transaction.create({
        data: transaction
    });
}

export async function getTransactionsAmmountSumByAccountId(accountId: string){
    console.log('💾 DAL GET TRANSACTIONS AMMOUNT SUM BY ACCOUNT ID');

    return await prisma.transaction.aggregate({
        _sum: { ammount: true },
        where: { accountId: accountId }
    });
}

export async function getTransactions() {
    console.log('💾 DAL GET TRANSACTIONS');

    return await prisma.transaction.findMany({
        include: {
            account: true,
            creditCard: true,
            transactionCategory: true,
        },

        orderBy: [{ date: 'desc' }, { createdAt: 'desc' }]
    });
}