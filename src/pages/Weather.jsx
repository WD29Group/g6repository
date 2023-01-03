import React, { useState, useEffect } from 'react';
import Weatherforecast from '../pages/weatherforecast';
import Wforecast from '../pages/weatherforecast';

function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.weatherbit.io/v2.0/current?city=El-Nido&key=0f2c78fe24d04bc8969b4c9cbb0b72c5',
      );
      const json = await response.json();
      setData(json);

    }
    fetchData();
  }, []); // The empty array ensures that the effect only runs on mount




  if (!data) {
    return <div>Loading...</div>;
  }

  const temp = data.data[0].temp;
  const description = data.data[0].weather.description;
  const city = data.data[0].city_name;
  const country = data.data[0].country_code;
  const aqi = data.data[0].aqi;
  const wndspd = data.data[0].wind_spd;
  const sunrise = data.data[0].sunrise;
  const sunset = data.data[0].sunset;

  return (
    <>
      <div className="wBody">
        <div className="container" id="weather1">
          <div className="row">
            <div className="weatherbod col-md-4">
              <div className="col-md-11">
                <span className="ps-3">Current weather :</span>
                <br />
                <br />
                <span className="fw-bold h1 pt-5 ps-5 pe-5">{temp} °C </span>
                <br />
                <span className="ps-5">{description} at {city}, {country}</span>
                {/* Make sure to use the correct path to the image file */}
                <div className="d-flex align-items-center justify-content-center pt-3">
                <img src={process.env.PUBLIC_URL + `/icons/${data.data[0].weather.icon}.png`} />
                </div>
                <div className="pt-5 ps-4">Air Quality Index : {aqi}</div>
                <div className="ps-4">Wind speed : {wndspd}m/s</div>
                <div className="ps-4">Sunrise : {sunrise} am</div>
                <div className="ps-4">Sunset : {sunset} pm</div>
              </div>
            </div>
            <div className="weatherbod col-md-8">
              <div className="text-center fw-bold pb-3 h2"> 7 Day Forecast</div>
              <hr />
              <span className>
                <Wforecast />
              </span>
              <br />
              <span className="ps-5"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
