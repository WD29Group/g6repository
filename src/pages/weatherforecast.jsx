import React, { useState, useEffect } from 'react';

function Weatherforecast() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.weatherbit.io/v2.0/forecast/daily?city=El Nido,PH&key=0f2c78fe24d04bc8969b4c9cbb0b72c5',
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []); // The empty array ensures that the effect only runs on mount

  if (!data) {
    return <div>Loading...</div>;
  }

  function getWeekday(dateString) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const day = date.getDay();
    return weekdays[day];
  }

  return (
    <>
      <div className="row text-center wrow1">
        {/* firstday */}
        <div className="col-md-3">
          <div className="fw-bold">{getWeekday(data.data[1].datetime)}</div>
          <div>{data.data[1].min_temp} °C</div>
          <img height="80" src={process.env.PUBLIC_URL + `/icons/${data.data[1].weather.icon}.png`} />
        </div>

        {/* second */}
        <div className="col-md-3">
          <div className="fw-bold">{getWeekday(data.data[2].datetime)}</div>
          <div>{data.data[2].min_temp} °C</div>
          <img height="80" src={process.env.PUBLIC_URL + `/icons/${data.data[2].weather.icon}.png`} />

        </div>
        {/* third */}
        <div className="col-md-3">
        <div className="fw-bold">{getWeekday(data.data[3].datetime)}</div>
        <div>{data.data[3].min_temp} °C</div>
          <img height="80" src={process.env.PUBLIC_URL + `/icons/${data.data[3].weather.icon}.png`} />

        </div>
        {/* fourth */}
        <div className="col-md-3">
        <div className="fw-bold">{getWeekday(data.data[4].datetime)}</div>
        <div>{data.data[4].min_temp} °C</div>
          <img height="80" src={process.env.PUBLIC_URL + `/icons/${data.data[4].weather.icon}.png`} />

        </div>
      </div>
      <div className="row text-center wrow2">
        {/* fifth */}
        <div className="col-md-4 ps-5">
        <div className="fw-bold">{getWeekday(data.data[5].datetime)}</div>
        <div>{data.data[5].min_temp} °C</div>
          <img height="80" src={process.env.PUBLIC_URL + `/icons/${data.data[5].weather.icon}.png`} />

        </div>
        {/* sixth */}
        <div className="col-md-4 ">
        <div className="fw-bold">{getWeekday(data.data[6].datetime)}</div>
        <div>{data.data[6].min_temp} °C</div>
          <img height="80" src={process.env.PUBLIC_URL + `/icons/${data.data[6].weather.icon}.png`} />

        </div>
        {/* seventh */}
        <div className="col-md-4">
        <div className="fw-bold">{getWeekday(data.data[7].datetime)}</div>
          <div>{data.data[7].min_temp} °C</div>
          <img height="80" src={process.env.PUBLIC_URL + `/icons/${data.data[7].weather.icon}.png`} />

        </div>
      </div>
    </>
  )
}

export default Weatherforecast;
