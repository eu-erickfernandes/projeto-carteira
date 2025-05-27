import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getCreditCards() {
    return await prisma.creditCard.findMany({});
}

export async function createCreditCard(creditCard: Prisma.CreditCardCreateInput) {
    return await prisma.creditCard.create({
        data: creditCard
    });
}