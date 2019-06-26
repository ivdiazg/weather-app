import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`Humedad: ${humidity}% - `}</span>
        <span>{`Viento: ${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;