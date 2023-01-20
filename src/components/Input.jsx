import React from 'react'
import Button from './Button'

const Input = ({ handleInput }) => {
    console.log(handleInput);
    const calText = [
        { color: 'text-black', bgColor: "bg-stone-300", name: "C" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "(" },
        { color: 'text-black', bgColor: "bg-stone-300", name: ")" },
        { color: 'text-white', bgColor: "bg-amber-500", name: "%" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "7" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "8" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "9" },
        { color: 'text-white', bgColor: "bg-amber-500", name: "X" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "4" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "5" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "6" },
        { color: 'text-white', bgColor: "bg-amber-500", name: "-" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "1" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "2" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "3" },
        { color: 'text-white', bgColor: "bg-amber-500", name: "+" },
        { color: 'text-black', bgColor: "bg-stone-300", spanCol: "col-span-2 w-full", name: "0" },
        { color: 'text-black', bgColor: "bg-stone-300", name: "." },
        { color: 'text-white', bgColor: "bg-amber-500", name: "=" },

    ];
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                calText.map((prop) => {

                    return <Button key={prop.name} btnProp={prop} handleInput={handleInput} />
                })
            }
            {/* <Button bgColor='bg-stone-300' value="C" /> */}
        </div >
    )
}
{/* <Button key={name} color={color} bgColor={bgColor} value={name} spanCol={spanCol && spanCol} /> */ }

export default Input