import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";


export async function getAccount(accountId: string){
    return await prisma.account.findUnique({
        where: {
            id: accountId
        }
    });
}

export async function getAccounts(){
    return await prisma.account.findMany({});
}

export async function createAccount(account: Prisma.AccountCreateInput){
    return await prisma.account.create({
        data: account
    });
}