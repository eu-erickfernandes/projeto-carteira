'use client'

import { numberToCurrency } from "@/app/utils/format";
import { useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLElement>

export default function InputCurrency({ ...rest }: InputProps){
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
        console.log('HANDLE CHANGE');

        setValue(event.target.value);
        
        // const currencyValue = new Intl.NumberFormat('pt-br', {
        //     currency: 'BRL',
        //     style: 'currency'
        // }).format(event.target.value / 100);

        // console.log(currencyValue);

        // setValue(currencyValue);

        // const newValue = numberToCurrency(Number(event.target.value / 100));
        // console.log(newValue);

        // setValue(newValue);

        // setValue();
    }

    return (
        <input onChange={ handleChange } type="text" value={ value } { ...rest } />
    );
}