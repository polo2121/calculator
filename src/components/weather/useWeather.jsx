import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useWeather = () => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const instance = axios.create({ baseURL: "https://api.openweathermap.org/data/2.5/", timeout: 6000 })

    const weatherKey = "71297ae6c256024878cc1de1790d7c87";

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const timer = setTimeout(() => {
    //         getWeather(controller);

    //     }, 4000);
    //     return () => {
    //         clearTimeout(timer)
    //         controller.abort()
    //     };
    // }, [])

    async function getWeather(search, controller) {
        try {
            setError("")
            setLoading(true)
            const response = await instance.get(`weather?q=${search}&appid=${weatherKey}&units=metric`, { signal: controller.signal })
            setWeather(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error.response.statusText)
            setLoading(false)
            setError(error.response.statusText);
        }
    }
    return { weather, loading, error, getWeather }
}

export default useWeather