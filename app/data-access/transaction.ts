import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getTransactions() {
    return await prisma.transaction.findMany({
        include: {
            account: true,
            creditCard: true,
            transactionCategory: true,
        }
    });
}

export async function createTransaction(transaction: Prisma.TransactionCreateInput) {
    return await prisma.transaction.create({
        data: transaction
    });
}