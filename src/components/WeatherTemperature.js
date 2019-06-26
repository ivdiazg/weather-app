import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    'sunny': 'day-sunny',
    'fog': 'day-fog'
};

const getWeatherIcon = weatherState => {
    let icon = icons[weatherState];
    if (!icon) { icon = "day-fog"; }
    return <WeatherIcons name={icon} size='2x'></WeatherIcons>
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;