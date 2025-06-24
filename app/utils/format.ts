import { Decimal } from "@prisma/client/runtime/library";

export function currencyToNumber(value: string): number{
    return Number(value.replace(/\D/g, '')) / 100
}

export function numberToCurrency(value: Decimal | number): string{
    return Number(value).toLocaleString("pt-br", {
        currency: "BRL",
        style: "currency",
    });
}