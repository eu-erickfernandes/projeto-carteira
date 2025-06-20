import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getTransactionCategory(id: string){
    return await prisma.transactionCategory.findFirst({ where: { id: id } });
}

export async function getTransactionCategorys(){
    return await prisma.transactionCategory.findMany({});
}

export async function createTransactionCategory(transactionCategory: Prisma.TransactionCategoryCreateInput){
    return await prisma.transactionCategory.create({
        data: transactionCategory
    });
}