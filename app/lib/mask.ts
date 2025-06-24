import { numberToCurrency } from "../utils/format";

export function currencyMask(event: React.FormEvent<HTMLInputElement>){
    const input = event.currentTarget;
    input.maxLength = 23;

    const value = input.value;
    const numberValue = Number(value.replace(/\D/g, '')) / 100;

    const currencyValue =  numberToCurrency(numberValue);

    input.value = currencyValue;
}