import { Decimal } from "@prisma/client/runtime/library";

export function numberToCurrency(value: Decimal | number): string {
    return value ? Intl.NumberFormat('pt-br', {
        currency: "BRL",
        style: 'currency'
    }).format(value.toString() as Intl.StringNumericLiteral) : 'R$ 0,00';
}