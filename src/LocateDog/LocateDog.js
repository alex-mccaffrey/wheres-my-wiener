import React, { useState, useEffect } from 'react';

import config from '../config';

export default function LocateDog() {
  const [location, setLocation] = React.useState('');
  const [results, setResults] = React.useState({});
  let [responseData, setResponseData] = React.useState('');

  //  useEffect(() => {
  //    const url = config.API_URL;

  //    const fetchData = async () => {
  //      try {
  //        const response = await fetch(url);
  //        const json = await response.json();
  //        console.log(json.slip.results);
  //        setResults(json.slip.results);
  //      } catch (error) {
  //        console.log('error', error);
  //      }
  //    };

  //    fetchData();
  //  }, []);

  const getResults = () => {
    console.log('getting results');
    const token = 'bearer ' + config.API_KEY;
    const url =
      'https://api.yelp.com/v3/businesses/search?categories=hotdog&location=' +
      location;
    // fetch(`${config.API_URL}${location}`)

    //   fetch(`${config.API_URL}${location}`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(),
    //   }).then((dog) => {
    //     console.log(dog);
    //   });
    console.log(url);
    fetch(`${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  };
  //.then(console.log(res));
  // const fetchData = () => {
  //   const token = 'bearer ' + config.API_KEY;
  //   fetch(`${config.API_URL}${location}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Access: 'application/json',
  //       Authorization: token,
  //     },
  //     body: JSON.stringify(),
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // };

  // React.useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

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
