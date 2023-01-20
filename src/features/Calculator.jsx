import React, { useState } from 'react'
import { Button, Input, Output } from "../components"

export default function Calculator() {

    let [number, setNumber] = useState(0);

    const [calculatedNumber, setCalculatedNumber] = useState(0);

    const handleInputVal = (value) => {
        const reguarExp = new RegExp(/\W/);
        console.log(4 + "+" + 4);
        if (reguarExp.test(value)) {
            let store = number.split(value)
            switch (value) {
                case "+":
                    setCalculatedNumber((output) => output = number + value)
                    // store.length > 2 ? setNumber((number) => number = store[0] + store[1]) : setNumber((num) => num + value)
                    break;
                case "-":
                    break;
                default:
                    break;
            }
        }
        setNumber((num) => num += value)


    }

    return (
        <div className=' w-auto text-white p-6'>
            <h1 className='text-white'>{number}</h1>

            <Output result={calculatedNumber} />
            <Button />
            <Input number={number} handleInput={handleInputVal} />

        </div>
    )
}
