import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";


export async function getAccount(accountId: string){
    console.log('DAL GET ACCOUNT')

    return await prisma.account.findUnique({
        where: {
            id: accountId
        }
    });
}

export async function getAccounts(){
    console.log('DAL GET ACCOUNTS')

    return await prisma.account.findMany({});
}

export async function createAccount(account: Prisma.AccountCreateInput){
    console.log('DAL CREATE ACCOUNT')

    return await prisma.account.create({
        data: account
    });
}