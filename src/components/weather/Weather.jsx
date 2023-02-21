import React, { useEffect, useState } from 'react'
import { WeatherCard, Search, Time, Country, Temperature, Status, Humidity, Visibility } from "@components/weather"
import useWeather from "@components/weather/useWeather"


const Weather = () => {
    const { weather, loading, error, getWeather } = useWeather();
    const [country, setCountry] = useState("");

    useEffect(() => {
        if (country) {
            const controller = new AbortController();
            getWeather(country, controller);
            // const timer = setTimeout(() => {
            //     console.log("UseEffect")
            //     getWeather(country, controller);
            // }, 4000);
            return () => {
                // clearTimeout(timer)
                controller.abort()
            };
        }

    }, [country])

    const handleSearch = (name) => {
        console.log(name)
        setCountry(name)
    }

    const isEmpty = (objectName) => {
        return Object.keys(objectName).length > 0 ? false : true
    }

    // const Loading = () => {
    //     return <div>Loading....</div>
    // }
    // const Error = () => {
    //     return <div>Something Went Wrong...</div>
    // }

    // if (loading) return <Loading />
    // if (error) return <Error />

    return (
        <>
            <Search loading={loading} error={error} onSearch={handleSearch} />
            {
                !isEmpty(weather) && <WeatherCard>
                    {console.log(weather)}
                    <Time />
                    <Country name={weather.name} />
                    <Temperature temp={weather.main.temp} />
                    <Status status={weather.weather[0].main} />
                    <Humidity humid={weather.main.humidity} />
                    <Visibility visibility={weather.visibility} />
                </WeatherCard>
            }
        </>

    )
}

export default Weather