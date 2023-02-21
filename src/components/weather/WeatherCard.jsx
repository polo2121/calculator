import React from 'react'
import { useState } from 'react';

export default function WeatherCard({ children }) {

    return <>{children}</>
}

export const Search = ({ loading, error, onSearch }) => {

    const [search, setSearch] = useState("");
    const [inputError, setInputError] = useState(false);

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (validatedInput) => {
        onSearch(validatedInput.toLowerCase());
    }

    const validateInput = () => {
        if (!search) {
            return setInputError(true);
        }
        handleSubmit(search);
        setInputError(false)
    }

    return <div>
        <input className='border-red-300 border-2' type="text" onChange={(e) => handleInput(e)} value={search} />
        <button className='bg-slate-400 px-5 py-1' onClick={validateInput} disabled={loading && true}>Search</button>
        {inputError && <p>Please check your input again.</p>}
        {error && <p>{error}</p>}


    </div>
}

export const Time = () => {
    return <p>
        10:48 PM, Thu Feb 16
    </p>
}

export const Country = ({ name }) => {
    return <h3>
        {name}
    </h3>
}


export const Temperature = ({ temp }) => {
    return <h1>
        {temp}
    </h1>
}

export const Status = ({ status }) => {
    return <h4>
        {status}
    </h4>
}

export const Humidity = ({ humid }) => {
    return <p>
        Humidity: {humid}
    </p>
}

export const Visibility = ({ visibility }) => {
    return <p>
        Visibility: {visibility}
    </p>
}