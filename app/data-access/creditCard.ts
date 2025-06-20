import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getCreditCards() {
    console.log('DAL GET CREDIT CARD');
    
    return await prisma.creditCard.findMany({
        include: {
            account: true
        }
    });
}

export async function createCreditCard(creditCard: Prisma.CreditCardCreateInput) {
    console.log('DAL CREATE CREDIT CARD');
    
    return await prisma.creditCard.create({
        data: creditCard
    });
}