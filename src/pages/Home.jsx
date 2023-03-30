import { useState, useEffect } from 'react';

const Home = () => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/dogs/search`, {
          method: 'GET',
          headers: {
            'fetch-api-key': process.env.REACT_APP_API_KEY,
          },
          credentials: 'include',
        });

        const data = await response.json();
        console.log(data);

        const dogResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/dogs`, {
          method: 'POST',
          headers: {
            'fetch-api-key': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data.resultIds),
        });

        const dogData = await dogResponse.json();
        console.log(dogData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDogData();
  });

  return <div>Home</div>;
};

export default Home;
