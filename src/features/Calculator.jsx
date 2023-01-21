import React, { useState } from 'react'
import { Button, Input, Output } from "../components"

export default function Calculator() {

    let [number, setNumber] = useState(0);
    let [calculatedNumber, setCalculatedNumber] = useState(0);
    let [isInvalid, setIsInvalid] = useState(false)

    const handleInputVal = (value) => {

        try {
            setIsInvalid(false)
            switch (value) {
                case "C":
                    setNumber(number = 0)
                    setCalculatedNumber(calculatedNumber = 0)
                    setIsInvalid(true)
                    break;
                case "AC":
                    let newInput = number.slice(0, number.length - 1)
                    setNumber(newInput);

                    break;
                case "=":
                    let total = eval(number);
                    setCalculatedNumber(output => output = total)
                    break;
                default:
                    number === 0 ? setNumber(num => num = value) : setNumber(num => num += value)
                    break;
            }

        } catch (error) {
            setIsInvalid(isInvalid = true)
            console.log(error)
        }
    }

    return (
        <div className=' w-auto text-white p-6'>

            <Output result={calculatedNumber} />
            <h1 className='text-white'>{number}</h1>
            {
                console.log(calculatedNumber)
            }
            <p className={`${isInvalid === false ? "hidden" : ''} text-rose-500`}>Please Enter Valid Number and Calculation</p>
            <Button />
            <Input number={number} handleInput={handleInputVal} />

        </div >
    )
}
