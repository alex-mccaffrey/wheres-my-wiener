import React, { useState, useEffect } from 'react';

import config from '../config';
import axios from 'axios';

export default function LocateDog() {
  const [location, setLocation] = React.useState('');
  const [results, setResults] = React.useState({});
  let [responseData, setResponseData] = React.useState('');

  const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';

  const getResults = () => {
    console.log('getting results');

    const url = process.env.REACT_APP_API_URL;
    console.log(url);

    axios({
      method: 'get',
      'Access-Control-Allow-Origin': `${corsApiUrl}`,
      url: `${url}`,
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
    getResults();
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='location-box'
          placeholder='Enter Location'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <ul className='results' id='results'></ul>
    </div>
  );
}
