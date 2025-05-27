import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getTransactions() {
    return await prisma.transaction.findMany({});
}

export async function createTransaction(transaction: Prisma.TransactionCreateInput) {
    return await prisma.transaction.create({
        data: transaction
    });
}