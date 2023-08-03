"use client";

import React from "react";
import { useState, useEffect } from "react";

const FormSearch = () => {
    const [cityInput, setCityInput] = useState("");
    const [weatherData, setWeatherData] = useState({});

    const handleEvent = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        getWeatherData();
    }, []);

    const getWeatherData = async () => {
        try {
            const serverResponse = await fetch(
                "https://api.openweathermap.org/data/2.5/weather?" + "q=" + cityInput + "&appid=" + process.env.NEXT_PUBLIC_WEATHER_KEY + "&units=imperial"
            );
            const data = await serverResponse.json();
            console.log(data);
            if (data?.cod === "400") throw data;
            setWeatherData(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleEvent}>
                <label htmlFor="City Name">City Name</label>
                <br></br>
                <input type="text" placeholder="Enter A City Name..." onChange={(e) => setCityInput(e.target.value)} />
                <button className="btn" onClick={() => getWeatherData()}>
                    Get Weather
                </button>
            </form>
            <div className="results">
                <h3>{weatherData?.name} </h3>
                {weatherData?.main && <p>Currently feels like {weatherData?.main.temp.toFixed(0)}&deg;F</p>}
                {weatherData?.weather && (
                    <img src={"http://openweathermap.org/img/wn/" + weatherData?.weather[0].icon + "@4x.png"} alt="weather image" height={100} width={100} />
                )}
            </div>
        </div>
    );
};

export default FormSearch;
