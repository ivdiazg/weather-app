import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={'sunny'}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'26 km/h'} ></WeatherExtraInfo>
    </div>
);

export default WeatherData;
