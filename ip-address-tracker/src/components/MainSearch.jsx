import React, { useState } from 'react';

function MainSearch() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleClick = () => {
    const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_l3Ay7b4UfMxJAHTs9Z84v8TmNMFoT&ipAddress=${inputValue}`;

    // Make a GET request
    fetch(apiUrl).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((jsonData) => {
      console.log(jsonData);
      setData(jsonData);
    }).catch((error) => {
      console.log('Error', error);
    });
  };

  return (
    <section>
      <h1 className="title">IP Address Tracker</h1>

      <div id="ip-search-holder">
        <input
          className="search-bar"
          placeholder="Enter IP address"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button type="button" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div>
        <div className="data-holder">
          <span className="data-label">IP ADDRESS</span>
          <span className="data-value">{data?.ip}</span>
        </div>
        <div className="data-holder">
          <span className="data-label">LOCATION</span>
          <span className="data-value">{data?.location?.region}</span>
        </div>
        <div className="data-holder">
          <span className="data-label">TIMEZONE</span>
          <span className="data-value">{data?.location?.timezone}</span>
        </div>
        <div className="data-holder">
          <span className="data-label">ISP</span>
          <span className="data-value">{data?.isp}</span>
        </div>
      </div>
    </section>

  );
}

export default MainSearch;
