'use client'

import { currencyMask } from "@/app/lib/mask";

type InputProps = React.InputHTMLAttributes<HTMLElement>

export default function InputCurrency({ 
    value, 
    ...rest 
}: InputProps){

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        currencyMask(event);
    }

    return (
        <input onChange={ handleChange } type="text" { ...rest } />
    );
}