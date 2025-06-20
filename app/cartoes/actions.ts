'use server';

import { revalidatePath } from "next/cache";
import { createCreditCard } from "../data-access/creditCard";

export async function createCreditCardAction(formData: FormData) {
    console.log('ACTION CREATE CREDIT CARD');

    const accountId = formData.get('account') as string;

    const closesAt = formData.get('closesAt') as string;
    const expiresAt = formData.get('expiresAt') as string;
    const limit = formData.get('limit') as string;

    await createCreditCard({
        account: { connect: { id: accountId } },
        closesAt: Number(closesAt),
        expiresAt: Number(expiresAt),
        limit: limit,
    });

    revalidatePath('/');
}