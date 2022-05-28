import React from 'react'
import { useState } from 'react';
import './weather.css'

const api = {
    key: "",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    const [location, setLocation] = useState("");
    const [liveweather, setLiveweather] = useState({});

    function changer(e) {
        setLocation(e.target.value);
    }

    const search = (e) => {
        if (e.key == "Enter") {
            fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setLiveweather(result);
                    setLocation("");
                    console.log(result);
                });
        }

    }

    console.log(liveweather)
    today = mm + '/' + dd + '/' + yyyy;

    return (
        <div className='weather'>
            <div className='header'>
                <input type="text" placeholder='Enter location here' name="location" onChange={changer} onKeyPress={search} />
                <div className='date'>
                    {`${today}`}
                </div>
                <div className='weather__update'>
                    <h1>Current Temp : {liveweather.main.temp}</h1>
                    <p>Weather :{liveweather.weather[0].main} </p>
                </div>
            </div>
        </div >
    )
}

export default Weather;
